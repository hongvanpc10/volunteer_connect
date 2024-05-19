'use client'

import organizationApi from '@/apis/organization'
import personApi from '@/apis/person'
import { Organization } from '@/interfaces/organization'
import { Person } from '@/interfaces/person'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useToast } from './use-toast'
import queryKeys from '@/configs/query-keys'
import authApi from '@/apis/auth'
import { AccountRole } from '@/interfaces/account-role'

export default function useAuth() {
	const [isLoggedIn, setIsLoggedIn, removeIsLoggedIn] = useLocalStorage(
		'isLoggedIn',
		false,
	)
	const [isOrganization, setIsOrganization, removeIsOrganization] =
		useLocalStorage('isOrganization', false)

	const { toast } = useToast()

	const { data: account, error: error1 } = useQuery({
		queryKey: queryKeys.account,
		queryFn: isOrganization ? organizationApi.getAccount : personApi.getAccount,
		enabled: isLoggedIn,
	})

	const { data: accountInfo, error: error2 } = useQuery<
		Person | Organization | undefined
	>({
		queryKey: queryKeys.accountInfo.gen(account?._id),
		queryFn: isOrganization
			? () => organizationApi.getInfo(account!._id)
			: () => personApi.getInfo(account!._id),
		enabled: !!account,
	})

	const queryClient = useQueryClient()

	const { mutate: logIn, isPending: isLoggingIn } = useMutation({
		mutationFn: authApi.logIn,
		onSuccess: data => {
			toast({
				description: 'Đăng nhập thành công',
			})
			setIsLoggedIn(true)
			setIsOrganization(data!.role === AccountRole.ORGANIZATION)
		},
		onError: error => {
			toast({
				title: 'Đăng nhập thất bại',
				description: error.message,
				variant: 'destructive',
			})
		},
	})

	const { mutate: logOut } = useMutation({
		mutationFn: authApi.logOut,
		onSuccess: () => {
			removeIsLoggedIn()
			removeIsOrganization()
			queryClient.removeQueries({ queryKey: queryKeys.account })
			queryClient.removeQueries({
				queryKey: queryKeys.accountInfo.gen(account?._id),
			})
		},
	})

	useEffect(() => {
		if (error1 || error2) {
			toast({
				title: 'Phiên đăng nhập đã hết hạn',
				description: 'Vui lòng đăng nhập lại',
				variant: 'destructive',
			})
			logOut()
		}
	}, [error1, error2, logOut, removeIsLoggedIn, removeIsOrganization, toast])

	return {
		isLoggedIn,
		accountInfo: account &&
			accountInfo && {
				...accountInfo,
				account: account.account,
			},
		isOrganization,
		logOut,
		logIn,
		isLoggingIn,
	}
}
