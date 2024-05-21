'use client'
import { useState } from 'react'
import UpdateVolunteerWork from '../components/update-volunteerWork'
import Join from '../components/join'
import Member from '../components/member'
import {Edit2, Note1, ProfileAdd } from 'iconsax-react'
import { cn } from '@/lib/utils'

const items = [
	{
		title: 'Chỉnh sửa hoạt động',
		icon: Edit2,
	},
	{
		title: 'Yêu cầu tham gia',
		icon: ProfileAdd,
	},
	{
		title: 'Danh sách sinh viên',
		icon: Note1,
	},
]

function OrganizeManage() {
	const [page, setPage] = useState<number>(2)
	const changePage = (index: number) => {
		setPage(index)
	}

	let Component

	switch (page) {
		case 0:
			Component = UpdateVolunteerWork
			break
		case 1:
			Component = Join	
			break
		case 2:
			Component = Member
			break
		default:
			Component = UpdateVolunteerWork
	}

	return (
		<div className='flex'>
			<div className='grid grid-cols-12 container mx-auto gap-5'>
				<div className='col-span-3 w-full'>
					<div className='w-full flex flex-col gap-3 pt-10'>
						{items.map((item, index) => {
							let Icon = item.icon

							return (
								<div
									key={index}
									className={cn(
										'flex items-center pl-6 py-2 gap-4 relative cursor-pointer text-gray-700 font-medium',
										index == page ? 'font-bold text-primary-400' : '',
									)}
									onClick={() => changePage(index)}
								>
									<div
										className={cn(
											'flex',
											index == page ? 'text-primary-400' : 'text-gray-700',
										)}
									>
										<Icon size={24}/>
									</div>
									<p>{item.title}</p>

									{index == page && (
										<div className='absolute top-0 bottom-0 right-0 w-1 rounded-l-full bg-primary-400'></div>
									)}
								</div>
							)
						})}
					</div>
				</div>
				<div className='col-span-9'>
					<div className='py-16'>
						<Component />
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrganizeManage
