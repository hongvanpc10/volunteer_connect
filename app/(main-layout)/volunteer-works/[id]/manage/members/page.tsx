import Image from 'next/image'
import {
	TickCircle,
	CloseCircle,
	Flash,
	ArrowRight2,
	DocumentDownload,
} from 'iconsax-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from '@/components/ui/dialog'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { Bin } from '@/assets/icon'

const usersRequest = [
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
]

const rate = ['Kém', 'Không tốt', 'Bình thường', 'Tốt', 'Xuất sắc']

function Member() {
	let numberOfStudents = usersRequest.length

	return (
		<div className='w-full'>
			<div className='mb-16'>
				<h1 className='text-center text-3xl font-bold'>
					Danh sách sinh viên tham gia
				</h1>
				<p className='italic text-center mt-2'>
					( {numberOfStudents} sinh viên )
				</p>
			</div>

			<div className='flex flex-col justify-center items-center gap-5'>
				<div className='max-w-[50rem] w-full flex'>
					<Button className='ml-auto' variant={'secondary'}>
						<DocumentDownload
							size={16}
							variant='Bold'
							className='mr-2 text-primary-500'
						/>
						Xuất file excel
					</Button>
				</div>
				<div className='flex flex-col max-w-[50rem] w-full'>
					{/* <div className='flex items-center font-medium text-black/60 py-4 px-5 bg-gray-50 rounded-lg'>
						<p className='w-12 text-center mr-2'>STT</p>
						<p className='lg:w-[21.875rem] w-[19.875rem]'>Họ và tên</p>
						<p>Đánh giá</p>
					</div> */}
					{usersRequest.map((user, index) => {
						return (
							<div
								key={index}
								className='flex items-center max-md:flex-wrap max-md:gap-y-4 py-4 px-5 border-b border-solid border-black/10'
							>
								<p className='md:w-12 w-6 text-center mr-2 font-medium text-base'>
									{index + 1}
								</p>

								<div className='flex items-center gap-4 lg:w-[21.875rem] w-[19.875rem] max-md:flex-1'>
									<Image
										src={user.avatar}
										alt=''
										height={512}
										width={512}
										className='w-12 h-12 rounded-full'
									/>
									<p className='font-semibold text-base'>{user.name}</p>
								</div>

								<div className=' flex items-center justify-between gap-5 ml-auto max-md:pl-8 max-md:order-1 max-md:w-full'>
									<Select>
										<SelectTrigger className='h-9 w-fit gap-2'>
											<SelectValue placeholder='Đánh giá' />
										</SelectTrigger>
										<SelectContent className='max-h-56 overflow-y-auto'>
											{[...Array(10)].map((_, index) => {
												return (
													<SelectItem
														key={index}
														value={(index + 1).toString()}
													>
														{index + 1}
													</SelectItem>
												)
											})}
										</SelectContent>
									</Select>
									<Dialog>
										<DialogTrigger>
											<div className='flex items-center text-sm gap-2 px-4 py-2 border border-solid border-red-600 text-red-600 hover:bg-red-100/50 transition-all cursor-pointer rounded-xl w-full max-md:order-1'>
												<Bin className='w-4 h-4 md:hidden' />
												<span className='max-md:hidden'>Xóa</span>
											</div>
										</DialogTrigger>
										<DialogContent className='max-w-[90%] w-[28rem]'>
											<DialogHeader>
												<DialogTitle className='leading-normal mt-2'>
													Bạn có chắc chắn muốn xóa sinh viên dưới đây không?
												</DialogTitle>
												<div className='flex flex-col items-center gap-4 py-4'>
													<Image
														src={user.avatar}
														alt=''
														height={512}
														width={512}
														className='w-14 h-14 rounded-full'
													/>
													<p className='font-semibold text-base'>{user.name}</p>
												</div>
												<DialogDescription>
													Hành động này không thể được hoàn tác và sẽ dẫn đến
													việc loại bỏ sinh viên khỏi hoạt động tình nguyện này
													của bạn.{' '}
												</DialogDescription>
											</DialogHeader>

											<DialogFooter className='flex gap-2 mt-2'>
												<div className='py-2 px-4 rounded-xl bg-red-500 transition-all hover:opacity-80 font-medium text-white flex-1 text-center cursor-pointer max-sm:order-2'>
													Chắc chắn
												</div>
												<DialogClose asChild>
													<div className='py-2 px-4 rounded-xl border border-solid border-gray-300 transition-all hover:bg-gray-100/50  font-medium flex-1 text-center cursor-pointer max-sm:order-1'>
														Hủy
													</div>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</div>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<div className='ml-2 p-2 rounded-xl bg-white hover:bg-gray-100/80 transition-all cursor-pointer'>
												<ArrowRight2 size={16} />
											</div>
										</TooltipTrigger>
										<TooltipContent>
											<p>Xem thông tin</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

// function Rating() {
// 	const [ratingClick, setRatingClick] = useState<number>(0)
// 	const [ratingHover, setRatingHover] = useState<number>(0)

// 	const handleHover = (rate: number) => {
// 		setRatingHover(rate)
// 	}

// 	const handleClick = (rate: number) => {
// 		setRatingClick(rate)
// 	}

// 	const handleLeaveHover = () => {
// 		setRatingHover(ratingClick)
// 	}

// 	return (
// 		<div className='flex'>
// 			{[...Array(5)].map((_, index) => {
// 				return (
// 					<TooltipProvider>
// 						<Tooltip>
// 							<TooltipTrigger>
// 								<Flash
// 									key={index}
// 									size={18}
// 									variant='Bold'
// 									className='transition-all cursor-pointer hover:scale-[1.15]'
// 									color={index + 1 <= ratingHover ? '#fbbf24' : '#000000'}
// 									onMouseEnter={() => handleHover(index + 1)}
// 									onMouseLeave={handleLeaveHover}
// 									onClick={() => handleClick(index + 1)}
// 								/>
// 							</TooltipTrigger>
// 							<TooltipContent>
// 								<p>{rate[index]}</p>
// 							</TooltipContent>
// 						</Tooltip>
// 					</TooltipProvider>
// 				)
// 			})}
// 		</div>
// 	)
// }

export default Member
