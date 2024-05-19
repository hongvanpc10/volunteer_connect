import { cn, getRandomTextAvatar } from '@/lib/utils'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'

interface OrganizationCardProps {
	className?: string
	style?: CSSProperties
}

export default function OrganizationCard({
	className,
	style,
}: OrganizationCardProps) {
	return (
		<div
			className={cn(
				'overflow-hidden flex flex-col items-center rounded-2xl border border-slate-100 px-4 py-6',
				className,
			)}
			style={style}
		>
			<Image
				alt='avatar'
				src={getRandomTextAvatar('CLB Tình nguyện Sinh viên UIT')}
				width={80}
				height={80}
				className='w-20 h-20 rounded-full object-cover'
			/>
			<h3 className='font-semibold line-clamp-2 mt-3 text-center'>
				CLB Tình nguyện Sinh viên UIT
			</h3>
			<p className='text-center text-xs mt-2 line-clamp-2'>
				Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM
			</p>
			<Link
				href={''}
				className='text-primary-500 mt-6 font-medium group flex items-center'
			>
				Xem chi tiết
				<ArrowRight className='h-5 ml-2 transition-all mr-2 group-hover:ml-4 group-hover:mr-0 ease-out' />
			</Link>
		</div>
	)
}
