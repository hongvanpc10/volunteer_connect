import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import { CSSProperties } from 'react'
import Alignment from './ui/alignment'
import Link from 'next/link'

interface VolunteerWorkVerticalCardProps {
	className?: string
	style?: CSSProperties
	showDetail?: boolean
}

export default function VolunteerWorkVerticalCard({
	className,
	style,
	showDetail = true,
}: VolunteerWorkVerticalCardProps) {
	return (
		<div style={style} className={className}>
			<div className='aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden border border-primary-50'>
				<Image
					alt='thumb'
					src='https://picsum.photos/800'
					width={500}
					height={312}
					className='object-cover w-full h-full transition hover:scale-110 ease-in'
				/>
			</div>
			<div className='inline-block text-xs font-medium py-1 px-2 rounded-lg bg-amber-200 mt-4'>
				Đang diễn ra
			</div>
			<h3 className='text-lg font-semibold mt-2 line-clamp-2 h-14 transition hover:text-primary-500'>
				Chiến dịch tăng cường học tập cho trẻ em vùng sâu vùng xa
			</h3>
			<div className='flex items-center space-x-4 text-xs font-light mt-2'>
				<div className='flex items-center'>
					<span className='w-2 h-2 rounded-full bg-primary-400 mr-2' />
					TP Hồ Chí Minh
				</div>
				<div className='flex items-center'>
					<span className='w-2 h-2 rounded-full bg-primary-400 mr-2' />
					11/5/2024 - 25/5/2024
				</div>
			</div>
			{showDetail && (
				<p className='line-clamp-3 text-[0.8125rem] mt-3 font-light'>
					Cupidatat id nostrud incididunt cillum eu aliquip aute nostrud aliqua.
					Et dolor aliquip occaecat Lorem ut incididunt officia excepteur
					proident culpa consectetur. Nulla commodo tempor ipsum adipisicing
					voluptate aliqua proident consequat in incididunt est proident ea ad.
					Aute excepteur ipsum culpa ad dolore quis labore enim. Non Lorem
					labore amet tempor non enim adipisicing ad nostrud duis sint. Elit
					sint culpa minim ea. Pariatur amet laborum do do proident consequat
					sint occaecat ullamco cillum eu ullamco eiusmod.
				</p>
			)}
			<Alignment align='right' className='mt-6'>
				<Link
					href={''}
					className='text-primary-500 font-medium group flex items-center'
				>
					Xem chi tiết
					<ArrowRight className='h-5 ml-2 transition-all mr-2 group-hover:ml-4 group-hover:mr-0 ease-out' />
				</Link>
			</Alignment>
		</div>
	)
}
