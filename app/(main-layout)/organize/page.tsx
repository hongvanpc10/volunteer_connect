'use client'

import Image from 'next/image'
import { Note, Profile2User } from 'iconsax-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Activity, Profile, Introduce } from './components'

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
			Component = Profile
			break
		case 1:
			Component = Activity
			break
		default:
			Component = Profile
			break
	}

	return (
		<div className='flex'>
			<div className='container pt-16 pb-8'>
				<p className='text-xl mb-4 font-bold'>Hồ sơ tổ chức</p>

				<div className='grid grid-cols-6 gap-5'>
					<div className='lg:col-span-2 col-span-6'>
						<Introduce />
					</div>

					<div className='lg:col-span-4 col-span-6 flex flex-col gap-5'>
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
