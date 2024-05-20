'use client'
import Header from '@/components/header'
import { Metadata } from 'next'
import images from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import lottieAnimations from '@/assets/lottie-animations'
import LottieAnimation from '@/components/lottie-animation'
import { Button } from '@/components/ui/button'
import routes from '@/configs/routes'

export const metadata: Metadata = {
	title: 'Trang không tồn tại',
}

export default function NotFoundPage() {
	const sizeOfIllustrator = (width: number, height: number) => {
		return 100
	}

	const sizeOfIllustrator404 = (width: number, height: number) => {
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
				<div className='flex flex-col md:mt-[6rem] pt-10'>
					{/* <div className='flex flex-col items-center'>
						<LottieAnimation
							lottie={lottieAnimations.notFound}
							sizeOfIllustrator={sizeOfIllustrator404}
						/>
						<p className='text-2xl text-center font-semibold text-primary-800'>
							Whoops! Hình như có gì đó sai sai!
						</p>

						<Button variant={'secondary'} className='w-fit' asChild>
							<Link href={routes.home}>Quay về trang chủ</Link>
						</Button>
					</div>
					<div className='flex-1 px-20 pt-20 relative'>
						<div className="aboslute caret-blink ">
							<LottieAnimation
								lottie={lottieAnimations.boat}
								sizeOfIllustrator={sizeOfIllustrator}
							/>
						</div>
					</div> */}

					<div className='flex h-[21.875rem] max-md:flex-wrap md:overflow-hidden container items-center xl:px-20 '>
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
								<Link href="javascript:history.back()">Quay về</Link>
							</Button>
						</div>
						<LottieAnimation
							lottie={lottieAnimations.notFound}
							sizeOfIllustrator={sizeOfIllustrator404}
						/>
					</div>
				</div>
				{/* <Image
					src={images.wave}
					alt=''
					height={512}
					width={512}
					className='w-full absolute left-0 bottom-0 z-[4] duration-[30000] wave1'
					style={{
						backgroundSize: '1000px 100px',
					}}
				/>
				<Image
					src={images.wave}
					alt=''
					height={512}
					width={512}
					className='w-full absolute left-0 bottom-2 z-[3] delay-[-5000] duration-[15000] opacity-50 wave2'
					style={{
						backgroundSize: '1000px 100px'
					}}
				/>
				<Image
					src={images.wave}
					alt=''
					height={512}
					width={512}
					className='w-full absolute left-0 bottom-3 z-[2] delay-[-2000] duration-[30000] opacity-20 wave1'
					style={{
						backgroundSize: '1000px 100px'
					}}
				/>
				<Image
					src={images.wave}
					alt=''
					height={512}
					width={512}
					className='w-full absolute left-0 bottom-4 z-[1] delay-[-2000] opacity-70 duration-[5000] wave2'
					style={{
						backgroundSize: '1000px 100px'
					}}
				/> */}
			</div>
		</div>
	)
}
