import { Button } from '@/components/ui/button'
import routes from '@/constants/routes'
import { ArrowLeft } from 'iconsax-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Xác thực email',
}

export default function EmailConfirmationPage() {
	return (
		<div>
			<h1 className='text-2xl font-bold mb-2'>Xác thực email của bạn</h1>
			<h2 className='mb-8'>Kiểm tra emal của bạn để thực hiện xác thực</h2>

			<Button className='w-full' size='lg' asChild>
				<Link href={routes.logIn}>
					<ArrowLeft className='mr-2 h-5' />
					Quay lại đăng nhập
				</Link>
			</Button>
		</div>
	)
}
