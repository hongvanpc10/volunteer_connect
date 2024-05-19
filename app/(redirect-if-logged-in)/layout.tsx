'use client'

import useRedirectIfLoggedIn from '@/hooks/use-redirect-if-logged-in'
import { ReactNode } from 'react'

export default function RedirectIfLoggedInLayout({
	children,
}: {
	children: ReactNode
}) {
	useRedirectIfLoggedIn()

	return children
}
