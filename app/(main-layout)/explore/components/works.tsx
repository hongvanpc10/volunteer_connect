'use client'

import Alignment from '@/components/ui/alignment'
import { Button } from '@/components/ui/button'
import VolunteerWorkVerticalCard from '@/components/volunteer-work-vertical-card'
import routes from '@/configs/routes'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from 'usehooks-ts'

export default function Works() {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0,
		freezeOnceVisible: true,
	})

	return (
		<section className='container py-16'>
			<h2 className='text-3xl font-bold mb-14 text-center'>
				Các tổ chức tình nguyện
			</h2>

			<div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12'>
				{[...Array(6)].map((_, index) => (
					<VolunteerWorkVerticalCard
						key={index}
						style={{
							transitionDelay: 150 * index + 'ms',
						}}
						className={cn(
							'transition translate-y-36 opacity-0 duration-500 ease-out',
							isIntersecting && 'translate-y-0 opacity-100',
						)}
					/>
				))}
			</div>

			<Alignment align='center' className='mt-16'>
				<Button variant='outline' className='rounded-full group' asChild>
					<Link href={routes.explore.works}>
						Xem thêm
						<ArrowRight className='h-5 ml-2 mr-2 group-hover:ml-4 group-hover:mr-0 transition-all ease-out' />
					</Link>
				</Button>
			</Alignment>
		</section>
	)
}
