'use client'

import { cn } from '@/lib/utils'
import { ArrowDown2, Flash } from 'iconsax-react'
import { useParams } from 'next/navigation'

interface RecentActivityType {
	title: string
	date: Date
	rate: number
}

const recentActivity: RecentActivityType[] = [
	{
		title: 'Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 4,
	},
	{
		title:
			'Lorem ipsum dolor sit amet consectetur.feafdsafewafds Lorem ipsum dolor sit amet consectetur.feafdsafewafdsLorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 2,
	},
	{
		title:
			'Lorem ipsum dolor sit amet consectetur.feafdsafewafds Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 3,
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 5,
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetu',
		date: new Date(2024, 5, 19),
		rate: 5,
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 4,
	},
	{
		title:
			'Lorem ipsum dolor sit amet consectetur.feafdsafewafds Lorem ipsum dolor sit amet consectetur.feafdsafewafdsLorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 2,
	},
	{
		title:
			'Lorem ipsum dolor sit amet consectetur.feafdsafewafds Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 3,
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 4,
	},
	{
		title:
			'Lorem ipsum dolor sit amet consectetur.feafdsafewafds Lorem ipsum dolor sit amet consectetur.feafdsafewafdsLorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 2,
	},
	{
		title:
			'Lorem ipsum dolor sit amet consectetur.feafdsafewafds Lorem ipsum dolor sit amet consectetur.feafdsafewafds',
		date: new Date(2024, 5, 19),
		rate: 3,
	},
]

export default function Activities() {
	const { id } = useParams<{ id: string }>()

	return (
		<div className='flex flex-col h-fit w-full px-9 py-7 gap-5 border border-slate-100 rounded-xl'>
			<p className='font-bold text-xl w-full'>Hoạt động gần đây</p>

			<div className='space-y-2'>
				{recentActivity.map((activity, index) => {
					return (
						<div
							key={index}
							className={cn(
								'flex flex-wrap gap-x-14 gap-y-2 w-full p-5 text-[#334155]',
								index % 2 == 0 ? 'bg-primary-100 rounded-xl' : 'bg-white',
							)}
						>
							<div className='sm:line-clamp-1 line-clamp-2 sm:flex-1'>
								{activity.title}
							</div>
							<div className='flex max-sm:w-full items-center gap-8 max-sm:justify-between max-sm:font-medium max-sm:text-sm'>
								<p>
									{activity.date.getDate().toString().padStart(2, '0')}/
									{activity.date.getMonth().toString().padStart(2, '0')}/
									{activity.date.getFullYear().toString()}
								</p>

								<div className='flex'>
									{[...Array(5)].map((_, index) => {
										return (
											<Flash
												key={index}
												size={16}
												variant='Bold'
												color={
													index >= 5 - activity.rate ? '#fbbf24' : '#000000'
												}
											/>
										)
									})}
								</div>
							</div>
						</div>
					)
				})}
			</div>

			<div className='flex'>
				<div className='mx-auto px-4 py-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition-all'>
					Xem thêm <ArrowDown2 size={15} color='#000000' />
				</div>
			</div>
		</div>
	)
}
