import { cn, getRandomTextAvatar } from '@/lib/utils'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

export default function VolunteerWorkHorizontalCard() {
	return (
		<div className='@container'>
			<div className='flex @2xl:flex-row flex-col items-stretch'>
				<div className='@3xl:w-4/12 @2xl:w-6/12 w-full'>
					<div className='aspect-w-16 @2xl:aspect-h-12 aspect-h-9'>
						<Image
							alt='banner'
							src='https://picsum.photos/500/500'
							width={500}
							height={500}
							className='w-full h-full object-cover rounded-lg'
						/>
					</div>
				</div>
				<div className='@2xl:ml-4 @2xl:mt-0 mt-4'>
					<h3 className='text-base font-medium line-clamp-2 h-12 mb-2'>
						Chiến dịch Exercitation in mollit velit excepteur ex incididunt quis
						dolor quis.
					</h3>
					<p className='text-sm'>Thời gian: 12/5/2024 - 30/5/2024</p>
					<div className='flex items-center mt-3'>
						<Image
							alt='avatar'
							src={getRandomTextAvatar('An')}
							width={32}
							height={32}
							className='w-8 h-8 object-cover rounded-full'
						/>
						<div className='ml-3'>
							<h4 className='font-medium line-clamp-1'>
								CLB tình nguyện sinh viên
							</h4>
							<p className='text-sm line-clamp-1'>
								Trường Đại học Công nghệ Thông tin - ĐHQG-HCM
							</p>
						</div>
					</div>

					<div className='flex items-center justify-between mt-4'>
						<span
							className={cn(
								'py-1 px-3 bg-slate-100 rounded-md text-xs font-medium text-slate-700',
								true && 'bg-primary-200',
							)}
						>
							{true ? 'Đang diễn ra' : 'Đã kết thúc'}
						</span>

						<Link
							href={''}
							className='text-primary-500 text-sm font-medium group flex items-center'
						>
							Xem chi tiết
							<ArrowRight className='h-4 ml-1 transition-all mr-1 group-hover:ml-2 group-hover:mr-0 ease-out' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
