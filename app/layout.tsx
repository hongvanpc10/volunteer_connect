import fonts from '@/constants/fonts'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import config from '@/tailwind.config'

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
			<body className={cn(fonts.sans.className, 'text-[0.9375rem]')}>
				<NextTopLoader
					color={config.theme.extend.colors.primary[400]}
					shadow={false}
				/>
				{children}
			</body>
		</html>
	)
}
