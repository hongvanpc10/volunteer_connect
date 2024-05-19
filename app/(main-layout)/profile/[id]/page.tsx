import images from '@/assets/images'
import Crown from '@/components/icons/crown'
import Point from '@/components/icons/point'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowDown2, Flash } from 'iconsax-react'
import Image from 'next/image'

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

const field = ['Họ và tên:', 'Giới tính:', 'Ngày sinh:', 'Khoa:', 'Trường:']

const userInfo = [
	'Phạm Hoàng Vinh',
	'Nam',
	'05/09/2005',
	'Khoa học và Kỹ thuật thông tin',
	'Trường đại học công nghệ thông tin',
]

const achivements = [
	'Xuân tình nguyện 2024',
	'Xuân tình nguyện 2023',
	'Hè xanh 2024',
	'Hè xanh 2023',
	'Mùa hè tình nguyện tháng 7',
	'Thứ 7 xanh',
]

function Profile() {
	const topServer = true
	const randomColor = () => {
		return (
			'#' +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, '0') +
			'33'
		)
	}

	return (
		<div>
			<div className='container pb-8 flex flex-col gap-14'>
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
							<p className='sm:text-3xl text-xl font-semibold'>
								Phạm Hoàng Vinh
							</p>
							{topServer && (
								<Crown className='sm:w-10 w-6 relative sm:-top-1' />
							)}
						</div>

						<div className='flex gap-2  mb-4'>
							<p className='italic sm:text-xl text-base font-semibold'>1024</p>
							<Point className='w-4' />
						</div>

						<Button variant={'secondary'}>Chỉnh sửa thông tin</Button>
					</div>
				</header>

				<div className='w-full h-px bg-black/20'></div>

				<div className='grid grid-cols-6 max-lg:grid-rows-[repeat(2)] gap-5'>
					<div className='col-span-2 max-lg:row-start-1 max-lg:col-span-6 flex flex-col gap-5'>
						<div className='flex justify-center mb-5'>
							<Quotes className='w-[18.25rem] max-lg:w-[25rem]' />
						</div>

						<div className='px-9 py-7 max-lg: flex flex-col gap-5 border border-primary-200 rounded-xl'>
							<p className='font-bold text-xl w-full'>Thông tin</p>
							<div className='flex flex-col gap-4'>
								{userInfo.map((value, index) => {
									return (
										<div key={index} className='flex gap-5'>
											<p className='w-[5rem] font-medium'>{field[index]}</p>
											<p className='flex-1 text-right text-balance'>{value}</p>
										</div>
									)
								})}
							</div>
						</div>

						<div className='px-9 py-7 flex flex-col gap-5 border border-primary-200 rounded-xl'>
							<p className='font-bold text-xl w-full'>Thành tựu</p>
							<div className='flex flex-wrap gap-4'>
								{achivements.map((achieve, index) => {
									return (
										<div
											key={index}
											className='text-center text-xs flex items-center justify-center py-[0.625rem] px-5 text-black/60 font-medium bg-primary-100 rounded-full'
											style={{
												backgroundColor: randomColor(),
											}}
										>
											{achieve}
										</div>
									)
								})}
							</div>
							<div className='mx-auto px-4 py-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition-all'>
								Xem thêm <ArrowDown2 size={15} color='#000000' />
							</div>
						</div>
					</div>

					<div className='col-span-4 max-lg:row-start-2 max-lg:col-span-6 flex flex-col items-center gap-12'>

						<div className='flex flex-col h-fit w-full px-9 py-7 gap-5 border border-primary-200 rounded-xl'>
							<p className='font-bold text-xl w-full'>Hoạt động gần đây</p>

							<div>
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
		</div>
	)
}

function Quotes({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				className,
				'relative max-w-full min-h-[12rem] flex justify-center items-center py-[3.125rem] px-[2.25rem]',
			)}
		>
			<p className='text-xl italic text-center text-primary-500'>
				Do things at your own place. Life {"isn't"} a race.
			</p>
			<Image
				src={images.quotes}
				alt=''
				className='absolute w-12 top-2 left-2'
			/>
			<Image
				src={images.quotes}
				alt=''
				className='absolute w-12 bottom-2 right-2'
			/>
			<Image
				src={images.quotesTopRight}
				alt=''
				className='absolute w-[80%]  top-0 right-0'
			/>
			<Image
				src={images.quotesBottomLeft}
				alt=''
				className='absolute w-[80%] bottom-0 left-0'
			/>
		</div>
	)
}

export default Profile
