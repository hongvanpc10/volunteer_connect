import useAuth from './use-auth'
import { useEffect } from 'react'
import routes from '@/configs/routes'
import { useRouter, useSearchParams } from 'next/navigation'

export default function useRedirectIfLoggedIn() {
	const { accountInfo } = useAuth()
	const router = useRouter()
	const searchParams = useSearchParams()
	const redirect = searchParams.get('redirect') ?? ''

	useEffect(() => {
		if (accountInfo) {
			if (redirect) {
				router.push(redirect)
			} else {
				router.push(routes.home)
			}
		}
	}, [accountInfo, redirect, router])
}
