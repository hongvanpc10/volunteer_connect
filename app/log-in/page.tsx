import Logo from '@/components/logo'
import LogInForm from './components/log-in-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Đăng nhập',
}


export default function LoginPage() {
	return (
		<div className='flex h-screen items-stretch'>
			<div className='w-5/12 px-16 py-12'>
				<Logo />

				<div className='mt-8'>
					<LogInForm />
				</div>
			</div>
			<div className='flex-1 bg-slate-50'></div>
		</div>
	)
}
