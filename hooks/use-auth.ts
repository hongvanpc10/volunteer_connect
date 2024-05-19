'use client'

import organizationApi from '@/apis/organization'
import personApi from '@/apis/person'
import { Organization } from '@/interfaces/organization'
import { Person } from '@/interfaces/person'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useToast } from './use-toast'
import queryKeys from '@/configs/query-keys'

export default function useAuth() {
	const [isLoggedIn, setIsLoggedIn, removeIsLoggedIn] = useLocalStorage(
		'isLoggedIn',
		false,
	)
	const [isOrganization, setIsOrganization, removeIsOrganization] =
		useLocalStorage('isOrganization', false)

	const { toast } = useToast()

	const { data: accountInfo, error } = useQuery<
		Person | Organization | undefined
	>({
		queryKey: queryKeys.accountInfo,
		queryFn: isOrganization ? organizationApi.getInfo : personApi.getInfo,
		enabled: isLoggedIn,
	})

	const queryClient = useQueryClient()

	useEffect(() => {
		if (error) {
			toast({
				title: 'Phiên đăng nhập đã hết hạn',
				description: 'Vui lòng đăng nhập lại',
				variant: 'destructive',
			})
			removeIsLoggedIn()
			removeIsOrganization()
		}
	}, [error, removeIsLoggedIn, removeIsOrganization, toast])

	function logOut() {
		removeIsLoggedIn()
		removeIsOrganization()
		queryClient.removeQueries({ queryKey: queryKeys.accountInfo })
	}

	function logIn(isOrganization: boolean) {
		setIsLoggedIn(true)
		setIsOrganization(isOrganization)
		queryClient.invalidateQueries({ queryKey: queryKeys.accountInfo })
	}

	return {
		isLoggedIn,
		accountInfo,
		isOrganization,
		logOut,
		logIn,
	}
}
