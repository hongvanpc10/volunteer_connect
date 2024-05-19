import Header from '@/components/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Trang không tồn tại',
}

export default function NotFoundPage() {
	return (
		<div>
			<Header />
			<div className='pt-64'>Not found</div>
		</div>
	)
}
