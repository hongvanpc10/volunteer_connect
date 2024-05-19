import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowDown2, Location } from 'iconsax-react'

const organizeWork = [
	{
		image:
			'https://i.pinimg.com/474x/6b/71/9d/6b719d6ec6327baeb74771e412223646.jpg',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients',
		place: 'TP Hồ Chí Minh',
		date: '11/5/2024 - 25/5/2024',
		status: true,
	},
	{
		image:
			'https://i.pinimg.com/474x/6b/71/9d/6b719d6ec6327baeb74771e412223646.jpg',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients',
		place: 'TP Hồ Chí Minh',
		date: '11/5/2024 - 25/5/2024',
		status: false,
	},
	{
		image:
			'https://i.pinimg.com/474x/6b/71/9d/6b719d6ec6327baeb74771e412223646.jpg',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients',
		place: 'TP Hồ Chí Minh',
		date: '11/5/2024 - 25/5/2024',
		status: false,
	},
	{
		image:
			'https://i.pinimg.com/474x/6b/71/9d/6b719d6ec6327baeb74771e412223646.jpg',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients  of natural ingredients. With the Goodness of 100% Natural Ingredients',
		place: 'TP Hồ Chí Minh',
		date: '11/5/2024 - 25/5/2024',
		status: false,
	},
]

function Activity() {
	return (
		<div className='flex flex-col gap-5'>
			<p className='font-bold sm:text-xl text-lg'>Các buổi hoạt động tình nguyện</p>

			<div className='flex flex-col gap-5'>
				{/* {organizeWork.map((work, index) => {
					return (
						<div
							key={index}
							className='flex px-7 py-6 bg-primary-50 rounded-2xl gap-5'
						>
							<div className='h-[7rem] w-[7rem] relative'>
								<Image
									src={work.image}
									alt=''
									fill
									className='object-cover object-center rounded-xl'
								/>
							</div>
							<div className='flex-1 flex flex-col justify-between'>
								<div>
									<p className='font-medium text-base line-clamp-1 mb-1'>
										{work.title}
									</p>
									<p className='text-black/80 line-clamp-2 text-sm'>
										{work.description}
									</p>
								</div>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-5 text-sm'>
										<div className='flex items-center'>
											<span className='w-2 h-2 rounded-full bg-primary-400 mr-2' />
											{work.place}
										</div>
										<div className='flex items-center tracking-wider'>
											<span className='w-2 h-2 rounded-full bg-primary-400 mr-2' />
											{work.date}
										</div>
									</div>

									<div
										className={cn(
											'px-5 py-2 rounded-full text-sm',
											work.status ? 'bg-amber-200' : 'bg-primary-200',
										)}
									>
										{work.status ? 'Đang diễn ra' : 'Đã kết thúc'}
									</div>
								</div>
							</div>
						</div>
					)
				})} */}

				{organizeWork.map((work, index) => {
					return (
						<div key={index} className='bg-primary-50/50 ms:px-7 sm:py-6 p-4 rounded-lg'>
							<div key={index} className='flex items-center h-fit sm:gap-5 gap-2 flex-wrap'>
								<div className='relative h-14 w-14 rounded-lg overflow-hidden max-sm:hidden'>
									<Image
										src={
											'https://i.pinimg.com/474x/fa/ea/d3/faead375326983a7353844023ade075a.jpg'
										}
										alt=''
										fill
										className='object-cover object-center'
									/>
								</div>

								<div className='flex flex-col justify-between gap-2 flex-1 self-stretch'>
									<p className='sm:font-bold font-semibold sm:text-base sm:line-clamp-1 line-clamp-2'>
										{work.title}
									</p>
									<div
										className={cn(
											'text-xs px-4 py-1 rounded-full w-fit',
											work.status ? 'bg-amber-200' : 'bg-primary-200',
										)}
									>
										{work.status ? 'Đang diễn ra' : 'Đã kết thúc'}
									</div>
								</div>

								<div className='flex sm:flex-col sm:justify-between justify-end gap-1.5 items-end min-w-[10rem] max-sm:w-full'>
									<div className='flex items-center gap-1 font-semibold max-sm:hidden'>
										<Location size={16} variant='Bold' />
										<p className='line-clamp-1'>{work.place}</p>
									</div>

									<p className='text-gray-600 text-sm font-medium'>
										{work.date}
									</p>
								</div>
							</div>

							<div className='line-clamp-2 max-sm:hidden mt-4'>{work.description}</div>
						</div>
					)
				})}
			</div>

			<div className='mx-auto px-4 py-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition-all'>
				Xem thêm <ArrowDown2 size={15} color='#000000' />
			</div>
		</div>
	)
}

export default Activity
