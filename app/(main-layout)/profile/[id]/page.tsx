'use client'

import personApi from '@/apis/person'
import images from '@/assets/images'
import Crown from '@/components/icons/crown'
import Point from '@/components/icons/point'
import { Button } from '@/components/ui/button'
import queryKeys from '@/configs/query-keys'
import useAuth from '@/hooks/use-auth'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { ArrowDown2, Flash } from 'iconsax-react'
import Image from 'next/image'
import Quote from './components/quote'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useDocumentTitle } from 'usehooks-ts'
import { notFound } from 'next/navigation'

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

const field = ['Họ và tên:', 'Giới tính:', 'Ngày sinh:', 'Trường:', 'Khoa:']

function Profile({ params: { id } }: { params: { id: string } }) {
	const { accountInfo } = useAuth()

	const { data, error, isLoading } = useQuery({
		queryKey: queryKeys.accountInfo.gen(id),
		queryFn: () => personApi.getInfo(id),
	})

	useEffect(() => {
		if (error) {
			notFound()
		}
	}, [error])

	return (
		data && (
			<div className='space-y-14'>
				<header className='bg-slate-50 pb-8'>
					<div className='container'>
						<div className='sm:h-[18.75rem] h-[15rem] relative'>
							<Image
								src={images.cover}
								alt='background image'
								fill
								priority
								className='object-cover object-bottom rounded-b-3xl'
							/>

							<Image
								src={data.avatarUrl}
								alt='avatar'
								width={200}
								height={200}
								className='object-cover object-center absolute bottom-0 translate-y-1/2 sm:h-[11.25rem] sm:w-[11.25rem] w-[7rem] h-[7rem] left-1/2 -translate-x-1/2 border-[0.625rem] border-white border-solid rounded-full box-content'
							/>
						</div>

						<div className='flex flex-col items-center sm:mt-[6.8rem] mt-[5rem] sm:gap-3 gap-1'>
							<div className='flex gap-3 items-center'>
								<h1 className='sm:text-3xl text-xl font-semibold'>
									{data.name}
								</h1>
								{true && <Crown className='sm:w-10 w-6 relative sm:-top-1' />}
							</div>

							<div className='flex gap-2  mb-4'>
								<p className='sm:text-xl text-base font-medium'>
									{data.totalPoints}
								</p>
								<Point className='w-4' />
							</div>

							{data._id == accountInfo?._id && (
								<Button variant={'secondary'}>Chỉnh sửa thông tin</Button>
							)}
						</div>
					</div>
				</header>

				<div className='container grid grid-cols-6 max-lg:grid-rows-[repeat(2)] gap-6'>
					<div className='col-span-2 max-lg:row-start-1 max-lg:col-span-6 flex flex-col gap-6'>
						<div className='flex justify-center mb-5'>
							<Quote
								quote={data.quote}
								className='w-[18.25rem] max-lg:w-[25rem]'
							/>
						</div>

						<div className='px-6 py-8 border border-slate-200 rounded-xl'>
							<h3 className='font-bold text-lg w-full mb-6'>Thông tin</h3>
							<div className='flex flex-col gap-4'>
								{[
									data.name,
									data.gender ? 'Nam' : 'Nữ',
									format(data.dob, 'd/M/yyyy'),
									data.school,
									data.faculty,
								].map((value, index) => {
									return (
										<div key={index} className='flex gap-4'>
											<p className='w-[5rem] font-medium text-sm'>
												{field[index]}
											</p>
											<p className='flex-1 text-right'>{value}</p>
										</div>
									)
								})}
							</div>
						</div>

						<div className='px-9 py-7 space-y-6 border border-slate-200 rounded-xl'>
							<div>
								<h3 className='font-bold text-lg w-full mb-4'>Thành tựu</h3>

								<div className='space-y-4'>
									<div className='flex gap-4'>
										<p className='flex-1 font-medium text-sm'>
											Tham gia hoạt động:
										</p>
										<span>4</span>
									</div>
									<div className='flex gap-4'>
										<p className='flex-1 font-medium text-sm'>Điểm tích lũy:</p>
										<span className='flex items-center'>
											100
											<Point className='ml-1' />
										</span>
									</div>
								</div>
							</div>

							<div>
								<h3 className='font-bold text-lg w-full mb-4'>Danh hiệu</h3>

								<div className='flex flex-wrap gap-4'>
									{['🏅 TNV tích cực', '🎖️ TNV xuất sắc'].map(
										(achieve, index) => {
											return (
												<div
													key={index}
													className='text-center text-xs flex items-center justify-center py-[0.5rem] px-4 text-black/60 font-medium rounded-full bg-slate-100'
												>
													{achieve}
												</div>
											)
										},
									)}
								</div>
							</div>
						</div>
					</div>

					<div className='col-span-4 max-lg:row-start-2 max-lg:col-span-6 flex flex-col items-center gap-12'>
						<div className='flex flex-col h-fit w-full px-9 py-7 gap-5 border border-slate-200 rounded-xl'>
							<p className='font-bold text-xl w-full'>Hoạt động gần đây</p>

							<div className='space-y-2'>
								{recentActivity.map((activity, index) => {
									return (
										<div
											key={index}
											className={cn(
												'flex flex-wrap gap-x-14 gap-y-2 w-full p-5 text-[#334155]',
												index % 2 == 0
													? 'bg-primary-100 rounded-xl'
													: 'bg-white',
											)}
										>
											<div className='sm:line-clamp-1 line-clamp-2 sm:flex-1'>
												{activity.title}
											</div>
											<div className='flex max-sm:w-full items-center gap-8 max-sm:justify-between max-sm:font-medium max-sm:text-sm'>
												<p>
													{activity.date.getDate().toString().padStart(2, '0')}/
													{activity.date.getMonth().toString().padStart(2, '0')}
													/{activity.date.getFullYear().toString()}
												</p>

												<div className='flex'>
													{[...Array(5)].map((_, index) => {
														return (
															<Flash
																key={index}
																size={16}
																variant='Bold'
																color={
																	index >= 5 - activity.rate
																		? '#fbbf24'
																		: '#000000'
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
					</div>
				</div>
			</div>
		)
	)
}

export default Profile
