'use client'
import { ReactNode, useState } from 'react'
// import UpdateVolunteerWork from '../components/update-volunteerWork'
// import Join from '../components/join'
// import Member from '../components/member'
import { Edit2, Note1, ProfileAdd } from 'iconsax-react'
import { cn } from '@/lib/utils'
import {
	useRouter,
	usePathname,
	useSelectedLayoutSegment,
} from 'next/navigation'


const items = [
	{
		title: 'Chỉnh sửa hoạt động',
		icon: Edit2,
		link: 'edit',
	},
	{
		title: 'Yêu cầu tham gia',
		icon: ProfileAdd,
		link: 'request-join',
	},
	{
		title: 'Danh sách sinh viên',
		icon: Note1,
		link: 'members',
	},
]

function OrganizeManage({ children }: { children: ReactNode }) {
	const router = useRouter()
	const path = usePathname()
	const segment = useSelectedLayoutSegment()

	const changePage = (href: string) => {
		const newPath = path.replace(`${segment}`, '')
		router.replace(`${newPath}/${href}`)
	}

	return (
		<div className='flex'>
			<div className='grid grid-cols-12 container mx-auto  md:gap-5 sm:gap-10'>
				<div className='lg:col-span-3 md:col-span-1 sm:col-span-2 sm:w-full'>
					<div
						className={cn(
							'w-full flex flex-col gap-3 sm:sticky sm:top-[10rem]',
							'fixed max-sm:bg-white max-sm:shadow-inner max-sm:left-0 max-sm:bottom-0 max-sm:w-fit max-sm:flex-row max-sm:z-50 rounded-tr-xl',
						)}
					>
						{items.map((item, index) => {
							let Icon = item.icon

							return (
								<div
									key={index}
									className={cn(
										'flex items-center xl:pl-6 max-sm:py-4 max-sm:px-3 py-2 gap-4 relative cursor-pointer text-gray-700 font-medium',
										item.link == segment ? 'font-bold text-primary-400' : '',
									)}
									onClick={() => changePage(item.link)}
								>
									<div
										className={cn(
											'flex',
											item.link == segment
												? 'text-primary-400'
												: 'text-gray-700',
										)}
									>
										<Icon size={24} />
									</div>
									<p className='max-lg:hidden'>{item.title}</p>

									{item.link == segment && (
										<div className='absolute sm:top-0 bottom-0 max-sm:left-0 max-sm:right-0 max-sm:w-full right-0 sm:w-1 max-sm:h-1 rounded-l-full bg-primary-400'></div>
									)}
								</div>
							)
						})}
					</div>
				</div>
				<div className='lg:col-span-9 md:col-span-11 sm:col-span-10 col-span-12'>
					<div className='py-16 flex '>
						{/* <Component /> */}
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrganizeManage
