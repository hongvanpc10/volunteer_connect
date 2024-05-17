'use client'

import Alignment from '@/components/ui/alignment'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from 'usehooks-ts'

export default function Works() {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0.2,
		freezeOnceVisible: true,
	})

	return (
		<section className='py-16 bg-slate-100'>
			<div className='container'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Các hoạt động nổi bật
				</h2>

				<div ref={ref} className='grid grid-cols-3 gap-8'>
					{[...Array(3)].map((_, index) => (
						<div
							key={index}
							style={{
								transitionDelay: 200 * index + 'ms',
							}}
							className={cn(
								'transition translate-y-36 opacity-0 duration-500 ease-out',
								isIntersecting && 'translate-y-0 opacity-100',
							)}
						>
							<div className='aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden border border-primary-50'>
								<Image
									alt='thumb'
									src='https://picsum.photos/800'
									width={500}
									height={312}
									className='object-cover w-full h-full transition hover:scale-110 ease-in'
								/>
							</div>
							<div className='inline-block text-xs font-medium py-1 px-2 rounded-lg bg-amber-200 mt-4'>
								Đang diễn ra
							</div>
							<h3 className='text-lg font-semibold mt-2 line-clamp-2 h-14 transition hover:text-primary-500'>
								Chiến dịch tăng cường học tập cho trẻ em vùng sâu vùng xa
							</h3>
							<div className='flex items-center space-x-4 text-xs font-light mt-2'>
								<div className='flex items-center'>
									<span className='w-2 h-2 rounded-full bg-primary-400 mr-2' />
									TP Hồ Chí Minh
								</div>
								<div className='flex items-center'>
									<span className='w-2 h-2 rounded-full bg-primary-400 mr-2' />
									11/5/2024 - 25/5/2024
								</div>
							</div>
							<Alignment align='right' className='mt-3'>
								<Link
									href={''}
									className='text-primary-500 font-medium group flex items-center'
								>
									Xem chi tiết
									<ArrowRight className='h-5 ml-2 transition-all mr-2 group-hover:ml-4 group-hover:mr-0 ease-out' />
								</Link>
							</Alignment>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
