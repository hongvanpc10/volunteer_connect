import Header from '@/components/header'
import Footer from '@/components/footer'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Header />
			<div className='pt-[7rem] max-lg:pt-[6rem]'>{children}</div>
			<Footer />
		</div>
	)
}
