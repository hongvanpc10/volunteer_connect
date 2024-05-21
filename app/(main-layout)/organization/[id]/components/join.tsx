import Image from 'next/image'
import { TickCircle, CloseCircle, ArrowRight2 } from 'iconsax-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

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

function Join() {
	return (
		<div className='w-full'>
			<h1 className='text-center text-3xl font-bold mb-16'>Yêu cầu tham gia</h1>

			<div className='flex justify-center'>
				<div className='flex flex-col max-w-[50rem] w-full'>
					<div className='flex items-center font-medium text-black/60 py-4 px-5 bg-gray-50 rounded-lg'>
						<p className='w-[21.875rem]'>Họ và tên</p>
						<p>Ngày gửi yêu cầu</p>
					</div>
					{usersRequest.map((user, index) => {
						return (
							<div
								key={index}
								className='flex items-center py-4 px-5 border-b border-solid border-black/10'
							>
								<div className='flex items-center gap-4 w-[21.875rem]'>
									<Image
										src={user.avatar}
										alt=''
										height={512}
										width={512}
										className='w-12 h-12 rounded-full'
									/>
									<p className='font-semibold text-base'>{user.name}</p>
								</div>

								<p className='font-medium text-gray-700'>{user.dayRequest}</p>

								<div className='flex items-center gap-4 ml-auto'>
									<div className='flex items-center text-sm gap-2 px-4 py-2 border border-solid border-green-600 text-green-600 hover:bg-green-100/50 transition-all cursor-pointer rounded-xl'>
										{/* <TickCircle size={16} /> */}
										Đồng ý
									</div>

									<div className='flex items-center text-sm gap-2 px-4 py-2 border border-solid border-red-600 text-red-600 hover:bg-red-100/50 transition-all cursor-pointer rounded-xl'>
										{/* <CloseCircle size={16} /> */}
										Từ chối
									</div>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												<div className='p-2 rounded-xl bg-white hover:bg-gray-100/80 transition-all cursor-pointer'>
													<ArrowRight2 size={16} />
												</div>
											</TooltipTrigger>
											<TooltipContent>
												<p>Xem thông tin</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Join
