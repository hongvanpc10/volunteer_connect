import Image from "next/image"
import { Mail, AffiliatedUnit } from '@/assets/icon'

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

function Introduce() {
	return (
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
	)
}

export default Introduce
