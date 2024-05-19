import Crown from '@/components/icons/crown'
import Point from '@/components/icons/point'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
	return (
		<header>
			<div className='sm:h-[18.75rem] h-[12rem] relative'>
				<Image
					src={
						'https://i.pinimg.com/564x/81/bb/f9/81bbf99c2f8c9894f5f43de3eb9a7363.jpg'
					}
					alt='background image'
					fill
					className='object-cover object-center rounded-b-3xl'
				/>

				<div className='absolute bottom-0 translate-y-1/2 sm:h-[11.25rem] sm:w-[11.25rem] w-[7rem] h-[7rem] left-1/2 -translate-x-1/2 border-[0.625rem] border-white border-solid rounded-full box-content'>
					<Image
						src={
							'https://i.pinimg.com/474x/db/7c/97/db7c97f278c55226ac689d0f79a56b48.jpg'
						}
						alt='avatar'
						fill
						className='object-cover object-center rounded-full'
					/>
				</div>
			</div>

			<div className='flex flex-col items-center sm:mt-[6.8rem] mt-[5rem] sm:gap-3 gap-1'>
				<div className='flex gap-2 items-center'>
					<p className='sm:text-3xl text-xl font-semibold'>Phạm Hoàng Vinh</p>
					{true && <Crown className='sm:w-10 w-6 relative sm:-top-1' />}
				</div>

				<div className='flex gap-2  mb-4'>
					<p className='italic sm:text-xl text-base font-semibold'>1024</p>
					<Point className='w-4' />
				</div>

				<Button variant={'secondary'}>Chỉnh sửa thông tin</Button>
			</div>
		</header>
	)
}
