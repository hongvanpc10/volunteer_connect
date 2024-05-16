import Logo from '@/components/logo'
import SignUpForm from './components/sign-up-form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Đăng ký',
}

export default function SignUpPage() {
	return (
		<div className='flex h-screen items-stretch'>
			<ScrollArea className='w-[55%]'>
				<div className='px-32 py-12'>
					<Logo />

					<div className='mt-8'>
						<SignUpForm />
					</div>
				</div>
			</ScrollArea>
			<div className='flex-1 bg-primary-400'></div>
		</div>
	)
}
