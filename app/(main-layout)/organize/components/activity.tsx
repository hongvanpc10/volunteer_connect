import { cn } from "@/lib/utils"
import Image from "next/image"

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
			<p className='font-bold text-xl'>Các buổi hoạt động tình nguyện</p>

			<div className='flex flex-col gap-5'>
				{organizeWork.map((work, index) => {
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
				})}
			</div>
		</div>
	)
}

export default Activity