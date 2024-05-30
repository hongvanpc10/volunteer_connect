'use client'

import useProtectedRoute from '@/hooks/use-protected-route'
import { AccountRole } from '@/interfaces/account-role'
import { ReactNode } from 'react'

export default function RequestedOrganizationLayout({
	children,
}: {
	children: ReactNode
}) {
	const isSuccess = useProtectedRoute(AccountRole.ORGANIZATION)

	return isSuccess && children
}
