'use client'

import volunteerWorksApi from '@/apis/volunteer-works'
import Alignment from '@/components/ui/alignment'
import { Button } from '@/components/ui/button'
import VolunteerWorkVerticalCard from '@/components/volunteer-work-vertical-card'
import queryKeys from '@/configs/query-keys'
import routes from '@/configs/routes'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight } from 'iconsax-react'
import Link from 'next/link'
import { useIntersectionObserver } from 'usehooks-ts'

export default function Works() {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0,
		freezeOnceVisible: true,
	})

	const { data, isLoading } = useQuery({
		queryKey: queryKeys.volunteerWorksPagination.gen(1, 8),
		queryFn: () => volunteerWorksApi.get({ page: 1, limit: 8 }),
	})

	return (
		<section className='container py-16'>
			<h2 className='text-3xl font-bold mb-14 text-center'>
				Các công việc tình nguyện
			</h2>

			{data && <div ref={ref} />}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12'>
				{data &&
					data.data.map((item, index) => (
						<VolunteerWorkVerticalCard
							key={index}
							data={item}
							style={{
								transitionDelay: 150 * index + 'ms',
							}}
							className={cn(
								'transition translate-y-36 opacity-0 duration-500 ease-out',
								isIntersecting && 'translate-y-0 opacity-100',
							)}
						/>
					))}

				{isLoading && [
					[...Array(6)].map((_, index) => (
						<VolunteerWorkVerticalCard.Skeleton key={index} />
					)),
				]}
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
