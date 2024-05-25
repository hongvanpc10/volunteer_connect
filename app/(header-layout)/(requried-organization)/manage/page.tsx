'use client'
import AddEvent from '@/app/(main-layout)/volunteer-works/[id]/components/events/add-event'
import { Bin, Edit, UserAdd } from '@/assets/icon'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn, getEndDateOfVolunteerWork } from '@/lib/utils'
import { ArrowRight2, More } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

import volunteerWorksApi from '@/apis/volunteer-works'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import queryKeys from '@/configs/query-keys'
import routes from '@/configs/routes'
import useAuth from '@/hooks/use-auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useToast } from '@/hooks/use-toast'

function ManageActivitys() {
	const { accountInfo } = useAuth()

	const { data } = useQuery({
		queryKey: queryKeys.volunteerByOrganization.gen(accountInfo?._id),
		queryFn: () =>
			volunteerWorksApi.getVolunteerWorksByOrganizationId({
				organizationId: accountInfo?._id,
				page: '1',
				limit: 9,
			}),
	})

	const { toast } = useToast()
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: volunteerWorksApi.deleteVolunteerWork,
		onSuccess() {
			toast({
				description: 'Xóa hoạt động tình nguyện thành công',
			})

			queryClient.refetchQueries({
				queryKey: queryKeys.volunteerByOrganization.gen(accountInfo?._id),
			})
		},
		onError(error) {
			toast({
				title: 'Xóa hoạt động tình nguyện thất bại',
				description: error.message,
				variant: 'destructive',
			})
		},
	})

	return (
		<div className='container mx-auto py-16'>
			<h1 className='text-center text-3xl font-bold mb-16'>
				Quản lí các hoạt động tình nguyện
			</h1>

			<div className='flex'>
				<div className='flex flex-col max-w-[50rem] mx-auto w-full'>
					<div className='flex justify-between items-center mb-4'>
						<p className='font-semibold text-lg'>Các hoạt động tình nguyện</p>
						<AddEvent />
					</div>
					{data &&
						data.data.length > 0 &&
						data.data.map((activity, index) => {
							return (
								<div
									className={cn(
										'flex items-center justify-between max-md:gap-10 gap-4 p-5 border-gray-100 hover:border hover:border-solid hover:rounded-xl transition-all relative',
										'after:absolute after:-bottom-px after:inset-x-5 after:h-px after:bg-gray-100',
									)}
									key={index}
								>
									<div className='flex items-center gap-4'>
										<div className='w-12 h-12 relative'>
											<Image
												src={activity.imageUrl}
												alt='avatar'
												fill
												className='object-cover object-center rounded-lg'
											/>
										</div>

										<div className='self-stretch flex flex-col justify-between flex-1'>
											<p className='font-medium line-clamp-1'>
												{activity.title}
											</p>
											<p className='text-sm'>
												<span className='font-medium'>Thời gian:</span>&nbsp;
												<span>
													{format(activity.createdAt, 'd/M/yyyy')} -{' '}
													{format(
														getEndDateOfVolunteerWork(activity),
														'd/M/yyyy',
													)}
												</span>
											</p>
										</div>
									</div>

									<div className='flex items-center'>
										<div className='flex gap-4 items-center max-md:hidden'>
											{/* Chỉnh sửa  */}
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link
															href={routes.volunteerWorks.manage.edit.gen(
																activity._id,
															)}
															className={cn(
																'flex p-2 border border-solid rounded-lg transition-all cursor-pointer',
																'border-blue-400 text-blue-400 hover:bg-blue-50/50',
															)}
															key={index}
														>
															<Edit className='w-4 h-4' />
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p>Chỉnh sửa thông tin</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>

											{/* Quản lí sinh viên */}
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link
															href={routes.volunteerWorks.manage.members.gen(
																activity._id,
															)}
															className={cn(
																'flex p-2 border border-solid rounded-lg transition-all cursor-pointer',
																'border-primary-400 text-primary-400 hover:bg-primary-50/50',
															)}
															key={index}
														>
															<UserAdd className='w-4 h-4' />
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p>Quản lí sinh viên</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>

											{/* Xóa hoạt động */}
											<Dialog>
												<DialogTrigger>
													<TooltipProvider>
														<Tooltip>
															<TooltipTrigger>
																<div
																	className={cn(
																		'flex p-2 border border-solid rounded-lg transition-all cursor-pointer',
																		'border-red-400 text-red-400 hover:bg-red-50/50',
																	)}
																	key={index}
																>
																	<Bin className='w-4 h-4' />
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p>Xóa hoạt động</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</DialogTrigger>
												<DialogContent className='max-w-[90%] w-[28rem]'>
													<DialogHeader>
														<DialogTitle className='leading-normal my-2 text-center'>
															Bạn có chắc chắn muốn xóa{' '}
															<strong>HOẠT ĐỘNG TÌNH NGUYỆN</strong> dưới đây
															không?
														</DialogTitle>
														<DialogDescription>
															Hành động này không thể được hoàn tác và sẽ dẫn
															đến việc loại bỏ sự kiện này khỏi hoạt động tình
															nguyện của bạn.
														</DialogDescription>
													</DialogHeader>

													<DialogFooter className='flex gap-2 mt-2'>
														<div
															className='py-2 px-4 rounded-md bg-red-500 transition-all hover:opacity-80 font-medium text-white flex-1 text-center cursor-pointer max-sm:order-2'
															onClick={() => mutate(activity._id)}
														>
															Chắc chắn
														</div>
														<DialogClose asChild>
															<div className='py-2 px-4 rounded-md border border-solid border-gray-300 transition-all hover:bg-gray-100/50  font-medium flex-1 text-center cursor-pointer max-sm:order-1'>
																Hủy
															</div>
														</DialogClose>
													</DialogFooter>
												</DialogContent>
											</Dialog>

											{/* Xem chi tiết */}
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link
															href={routes.volunteerWorks.gen(activity._id)}
															className='flex ml-2 p-2 rounded-xl bg-white hover:bg-gray-100/80 transition-all cursor-pointer'
														>
															<ArrowRight2 size={16} />
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p>Xem chi tiết</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</div>

										<DropdownMenu>
											<DropdownMenuTrigger>
												<div className='flex p-2 rounded-full transition-all cursor-pointer hover:bg-gray-100 md:hidden ml-auto'>
													<More size={20} className='rotate-90' />
												</div>
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuItem asChild>
													<Link
														href={routes.volunteerWorks.manage.edit.gen(
															activity._id,
														)}
														className={cn(
															'flex items-center transition-all cursor-pointer gap-3',
														)}
													>
														<Edit className='w-5 h-5 text-blue-400' />
														Chỉnh sửa thông tin
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem asChild>
													<Link
														href={routes.volunteerWorks.manage.members.gen(
															activity._id,
														)}
														className={cn(
															'flex items-center transition-all cursor-pointer gap-3',
														)}
													>
														<UserAdd className='w-5 h-5 text-primary-400' />
														Quản lí sinh viên
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem asChild>
													<Dialog>
														<DialogTrigger className='w-full'>
															<div
																className={cn(
																	'flex items-center transition-all cursor-pointer gap-3 hover:bg-slate-100',
                                                                    'relative cursor-pointer w-full select-none rounded-md items-center px-6 py-3 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'
																)}
															>
																<Bin className='w-5 h-5 text-red-400' />
																Xóa hoạt động
															</div>
														</DialogTrigger>
														<DialogContent className='max-w-[90%] w-[28rem]'>
															<DialogHeader>
																<DialogTitle className='leading-normal my-2 text-center'>
																	Bạn có chắc chắn muốn xóa{' '}
																	<strong>HOẠT ĐỘNG TÌNH NGUYỆN</strong> dưới
																	đây không?
																</DialogTitle>
																<DialogDescription>
																	Hành động này không thể được hoàn tác và sẽ
																	dẫn đến việc loại bỏ sự kiện này khỏi hoạt
																	động tình nguyện của bạn.
																</DialogDescription>
															</DialogHeader>

															<DialogFooter className='flex gap-2 mt-2'>
																<div
																	className='py-2 px-4 rounded-md bg-red-500 transition-all hover:opacity-80 font-medium text-white flex-1 text-center cursor-pointer max-sm:order-2'
																	onClick={() => mutate(activity._id)}
																>
																	Chắc chắn
																</div>
																<DialogClose asChild>
																	<div className='py-2 px-4 rounded-md border border-solid border-gray-300 transition-all hover:bg-gray-100/50  font-medium flex-1 text-center cursor-pointer max-sm:order-1'>
																		Hủy
																	</div>
																</DialogClose>
															</DialogFooter>
														</DialogContent>
													</Dialog>
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem asChild>
													<Link
														href={routes.volunteerWorks.gen(activity._id)}
														className='w-full flex items-center justify-center gap-3 transition-all cursor-pointer'
													>
														Xem chi tiết
														<ArrowRight2 size={16} />
													</Link>
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default ManageActivitys
