import images from '@/assets/images'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Quote({
	quote,
	className,
}: {
	className?: string
	quote?: string
}) {
	return (
		<div
			className={cn(
				className,
				'relative max-w-full min-h-[12rem] flex justify-center items-center py-[3.125rem] px-[2.25rem]',
			)}
		>
			<p className='text-xl italic text-center text-primary-500'>
				{quote || "Do things at your own place. Life isn't a race."}
			</p>
			<Image
				src={images.quotes}
				alt=''
				className='absolute w-12 top-2 left-2'
			/>
			<Image
				src={images.quotes}
				alt=''
				className='absolute w-12 bottom-2 right-2'
			/>
			<Image
				src={images.quotesTopRight}
				alt=''
				className='absolute w-[80%]  top-0 right-0'
			/>
			<Image
				src={images.quotesBottomLeft}
				alt=''
				className='absolute w-[80%] bottom-0 left-0'
			/>
		</div>
	)
}
