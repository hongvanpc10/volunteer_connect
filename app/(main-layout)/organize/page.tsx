'use client'

import Image from 'next/image'
import { Mail, AffiliatedUnit } from '@/assets/icon'
import { Note, Profile2User } from 'iconsax-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Activity, Infomation } from './components'

const organizeInfo = [
	{
		icon: AffiliatedUnit,
		info: 'Trường đại học Công nghệ thông tin đại học Công nghệ thông tin đại học Công nghệ thông tin',
	},
	{
		icon: Mail,
		info: 'hoangvinh9257@gmail.com',
	},
]

const info = [
	{
		icon: Profile2User,
		title: 'Hồ sơ',
	},
	{
		icon: Note,
		title: 'Các hoạt động',
	},
]

function Organize() {
	const [choose, setChoose] = useState<number>(0)

	let Component

	switch (choose) {
		case 0:
			Component = Infomation
			break
		case 1:
			Component = Activity
			break
		default:
			Component = Infomation
			break
	}

	return (
		<div className='flex'>
			<div className='container'>
				<p className='text-xl mb-4 font-bold'>Hồ sơ tổ chức</p>

				<div className='grid grid-cols-6 gap-5'>
					<div className='col-span-2'>
						<div className='flex flex-col items-center py-8 px-5 rounded-lg bg-white shadow-md gap-6 border border-black/10'>
							<Image
								src={
									'https://i.pinimg.com/474x/6f/dd/84/6fdd84c0cc7653e37313169d4964a59e.jpg'
								}
								alt=''
								width={512}
								height={512}
								className='w-[7.5rem] h-[7.5rem] rounded-full bg-no-repeat bg-center bg-cover'
							/>

							<div className='px-6'>
								<p className='text-xl font-semibold text-center'>
									Tổ chức xã hội về Y tế và Nhân đạo tại Việt Nam
								</p>

								<div className='flex flex-col mt-3 gap-2'>
									{organizeInfo.map((organize, index) => {
										let Icon = organize.icon
										return (
											<div
												key={index}
												className='flex gap-2 justify-center text-black/50'
											>
												<div className='relative w-4 flex-shrink-0'>
													<Icon className='w-4 h-4 absolute top-[0.1875rem] left-0' />
												</div>
												<span className='text-center'>{organize.info}</span>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>

					<div className='col-span-4 flex flex-col gap-5'>
						<div className=' bg-white shadow-md border border-black/10 overflow-hidden rounded-lg'>
							<div className='h-[15.625rem] w-full relative'>
								<Image
									src={
										'https://i.pinimg.com/564x/4b/5b/e8/4b5be83ea214a76aa7719d3496aad32b.jpg'
									}
									alt=''
									fill
									className='object-cover object-bottom rounded-lg'
								/>
							</div>

							<div className='flex gap-5 px-10'>
								{info.map((item, index) => {
									let Icon = item.icon
									return (
										<div
											className={cn(
												'flex gap-1 items-center py-5 cursor-pointer',
												choose == index && 'text-primary-500 border-primary-500 border-b-2 font-medium',
											)}
											key={index}
											onClick={() => setChoose(index)}
										>
											<Icon className='w-4' />
											<span>{item.title}</span>
										</div>
									)
								})}
							</div>
						</div>

						<div className='bg-white shadow-md border border-black/10 rounded-lg px-9 py-7 h-fit'>
							<Component />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Organize
