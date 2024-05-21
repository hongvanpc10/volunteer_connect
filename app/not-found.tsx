'use client'
import lottieAnimations from '@/assets/lottie-animations'
import Header from '@/components/header'
import LottieAnimation from '@/components/lottie-animation'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Trang không tồn tại',
}

export default function NotFoundPage() {
	const sizeOfIllustrator = (width: number, height: number) => {
		if (width <= 640) {
			return 300
		} else if (width <= 768) {
			return 400
		}
		return 800
	}

	return (
		<div>
			<Header />
			<div className='h-screen relative flex w-full justify-center'>
				<div className='flex flex-col pt-10'>
					<div className='flex min-h-[21.875rem] max-md:flex-wrap md:overflow-hidden container items-center xl:px-20 '>
						<div className='flex flex-col max-md:order-2 max-md:items-center'>
							<p className='font-bold lg:text-[4rem] text-[2rem]'>Whoops!</p>
							<p className='font-bold lg:text-3xl text-xl mt-2'>
								Không tìm thấy nội dung 😓
							</p>
							<p className='text-sm text-gray-700 font-light mt-4 max-md:text-center max-md:px-10'>
								Trang web bạn tìm kiếm không tồn tại, có thể đã bị xóa hoặc di
								chuyển sang một địa chỉ URL khác.
							</p>
							<Button asChild className='w-fit rounded-full mt-8'>
								<Link href='javascript:history.back()'>Quay về</Link>
							</Button>
						</div>
						<LottieAnimation
							lottie={lottieAnimations.notFound}
							sizeOfIllustrator={sizeOfIllustrator}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
