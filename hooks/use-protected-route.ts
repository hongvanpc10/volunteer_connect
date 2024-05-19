import { usePathname, useRouter } from 'next/navigation'
import useAuth from './use-auth'
import { useEffect } from 'react'
import routes from '@/configs/routes'

export default function useProtectedRoute() {
	const { isLoggedIn } = useAuth()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		if (!isLoggedIn) {
			router.push(routes.logIn + '?redirect=' + pathname)
		}
	}, [isLoggedIn, pathname, router])
}
