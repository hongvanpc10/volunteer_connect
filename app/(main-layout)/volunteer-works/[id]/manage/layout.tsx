'use client'
import volunteerWorksApi from '@/apis/volunteer-works'
import queryKeys from '@/configs/query-keys'
import routes from '@/configs/routes'
import useAuth from '@/hooks/use-auth'
import useProtectedRoute from '@/hooks/use-protected-route'
import { AccountRole } from '@/interfaces/account-role'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Edit2, Note1, ProfileAdd } from 'iconsax-react'
import { notFound, useParams, usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

function OrganizeManage({ children }: { children: ReactNode }) {
	useProtectedRoute(AccountRole.ORGANIZATION)

	const router = useRouter()
	const pathName = usePathname()

	const { id } = useParams<{ id: string }>()

	const items = [
		{
			title: 'Chỉnh sửa hoạt động',
			icon: Edit2,
			link: routes.volunteerWorks.manage.edit.gen(id),
		},
		{
			title: 'Yêu cầu tham gia',
			icon: ProfileAdd,
			link: routes.volunteerWorks.manage.requestJoin.gen(id),
		},
		{
			title: 'Danh sách sinh viên',
			icon: Note1,
			link: routes.volunteerWorks.manage.members.gen(id),
		},
	]

	const { accountInfo } = useAuth()

	const { data, isSuccess, error } = useQuery({
		queryKey: queryKeys.volunteer.gen(id),
		queryFn: () => volunteerWorksApi.getInfo(id),
	})

	useEffect(() => {
		if (
			error ||
			(isSuccess && !data) ||
			(data && accountInfo && data.organization._id != accountInfo._id)
		) {
			notFound()
		}
	}, [accountInfo, data, error, isSuccess])

	return (
		<div className='flex'>
			<div className='grid grid-cols-12 container mx-auto  md:gap-5 sm:gap-10'>
				<div className='lg:col-span-3 md:col-span-1 sm:col-span-2 sm:w-full'>
					<div
						className={cn(
							'w-full flex flex-col gap-3 sm:gap-6 sm:sticky sm:top-[10rem]',
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
										item.link == pathName ? 'font-semibold text-primary-400' : '',
									)}
									onClick={() => router.push(item.link)}
								>
									<div
										className={cn(
											'flex',
											item.link == pathName
												? 'text-primary-400'
												: 'text-gray-700',
										)}
									>
										<Icon size={24} />
									</div>
									<p className='max-lg:hidden'>{item.title}</p>

									{item.link == pathName && (
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
