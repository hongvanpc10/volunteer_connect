'use client'

import routes from '@/configs/routes'
import { AccountRole } from '@/interfaces/account-role'
import { notFound, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useAuth from './use-auth'

export default function useProtectedRoute(requiredRole?: AccountRole) {
	const { isLoggedIn, isOrganization } = useAuth()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		if (!isLoggedIn) {
			if (requiredRole) {
				notFound()
			} else {
				router.push(routes.logIn + '?redirect=' + pathname)
			}
		} else {
			if (requiredRole) {
				if (isOrganization && requiredRole !== AccountRole.ORGANIZATION) {
					notFound()
				} else if (
					!isOrganization &&
					requiredRole === AccountRole.ORGANIZATION
				) {
					notFound()
				}
			}
		}
	}, [isLoggedIn, isOrganization, requiredRole, pathname, router])
}
