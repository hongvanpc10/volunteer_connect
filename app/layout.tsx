import fonts from '@/constants/fonts'
import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
	title: 'Volunteer Connect',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='vi'>
			<body className={cn(fonts.sans.className, 'text-sm')}>{children}</body>
		</html>
	)
}
