'use client'

import useProtectedRoute from '@/hooks/use-protected-route'
import { ReactNode } from 'react'

export default function ProtectedRoutesLayout({
	children,
}: {
	children: ReactNode
}) {
	const isSuccess = useProtectedRoute()

	return isSuccess && children
}
