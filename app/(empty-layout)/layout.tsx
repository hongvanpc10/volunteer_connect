import Logo from '@/components/logo'
import { ReactNode } from 'react'

export default function EmptyLayout({ children }: { children: ReactNode }) {
	return (
		<div className='p-8'>
			<Logo />
			<div className='flex justify-center mt-16'>
				<div className='w-[26rem]'>{children}</div>
			</div>
		</div>
	)
}
