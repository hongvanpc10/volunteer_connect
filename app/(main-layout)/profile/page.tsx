import Image from 'next/image'
import Link from 'next/link'
import Crown from '@/components/icons/crown'
import Point from '@/components/icons/point'
import { Button } from '@/components/ui/button'
import { Flash, ArrowDown2 } from 'iconsax-react'
import { cn } from '@/lib/utils'

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

const field = [
	'Họ và tên:',
	'Giới tính:',
	'Ngày sinh:',
	'Khoa:',
	'Trường:'
]

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
		return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0') + '33';
	}

	return (
		<div>
			<div className='container pb-8 flex flex-col gap-14'>
				<header>
					<div className='h-[18.75rem] relative'>
						<Image
							src={
								'https://i.pinimg.com/564x/81/bb/f9/81bbf99c2f8c9894f5f43de3eb9a7363.jpg'
							}
							alt='background image'
							fill
							className='object-cover object-center rounded-b-3xl'
						/>

						<div className='absolute bottom-0 translate-y-1/2 h-[11.25rem] w-[11.25rem] left-1/2 -translate-x-1/2 border-[0.625rem] border-white border-solid rounded-full box-content'>
							<Image
								src={
									'https://i.pinimg.com/474x/db/7c/97/db7c97f278c55226ac689d0f79a56b48.jpg'
								}
								alt=''
								fill
								className='object-cover object-center rounded-full'
							/>
						</div>
					</div>

					<div className='flex flex-col items-center mt-[6.8rem] gap-3'>
						<div className='flex gap-2 items-center'>
							<p className='text-3xl font-semibold'>Phạm Hoàng Vinh</p>
							{topServer && <Crown className='w-10 relative -top-1' />}
						</div>

						<div className='flex gap-2 mb-4'>
							<p className='italic text-xl font-semibold'>1024</p>
							<Point className='w-4' />
						</div>

						<Button variant={'secondary'}>Chỉnh sửa thông tin</Button>
					</div>
				</header>

				<div className='w-full h-px bg-black/20'></div>

				<div className='grid grid-cols-6 gap-5'>
					<div className='col-span-2 flex flex-col gap-5'>
						<div className='px-9 py-7 flex flex-col gap-5 border border-primary-200 rounded-xl'>
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
								{achivements.map((achive, index) => {
									return (
										<div className='flex items-center justify-center py-[0.625rem] px-5 text-black/60 font-medium bg-primary-100 rounded-full' style={{
											backgroundColor: randomColor(),
										}}>
											{achive}
										</div>
									)
								})}
							</div>
							<div className='mx-auto px-4 py-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition-all'>
								Xem thêm <ArrowDown2 size={15} color='#000000' />
							</div>
						</div>
					</div>

					<div className='flex flex-col px-9 py-7 col-span-4 gap-5 border border-primary-200 rounded-xl'>
						<p className='font-bold text-xl w-full'>Hoạt động gần đây</p>

						<div>
							{recentActivity.map((activity, index) => {
								return (
									<div
										key={index}
										className={cn(
											'flex gap-14 w-full p-5 text-[#334155]',
											index % 2 == 0 ? 'bg-primary-100 rounded-xl' : 'bg-white',
										)}
									>
										<div className='line-clamp-1 flex-1'>{activity.title}</div>
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
}

export default Profile
