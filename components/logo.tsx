import routes from '@/constants/routes'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
	withText?: boolean
	textWhite?: boolean
}

export default function Logo({ withText = true, textWhite }: LogoProps) {
	return (
		<Link href={routes.home} className='inline-flex items-center'>
			<Image
				alt='logo'
				src={'/images/logo.png'}
				width={515}
				height={512}
				className='h-10 w-auto'
			/>
			{withText && (
				<div className={cn('ml-3 flex flex-col', textWhite && 'text-white')}>
					<span className='font-extrabold text-lg leading-[1]'>Volunteer</span>
					<span className='font-semibold text-sm leading-[1]'>Connect</span>
				</div>
			)}
		</Link>
	)
}
