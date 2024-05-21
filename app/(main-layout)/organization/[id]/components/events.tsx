'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Add } from 'iconsax-react'
import { useIntersectionObserver } from 'usehooks-ts'
import AddEvent from './qan/add-event'
import { DialogTitle } from '@radix-ui/react-dialog'

export default function Events() {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0,
		freezeOnceVisible: true,
	})

	return (
		<section>
			<div className='flex items-center justify-between mb-16'>
				<h3 className='font-semibold text-lg'>Sự kiện</h3>

				<Dialog>
					<DialogTrigger asChild>
						<Button size='sm' variant='secondary'>
							<Add className='h-5 mr-1' />
							Thêm
						</Button>
					</DialogTrigger>
					<DialogContent className='max-w-2xl'>
						<DialogHeader>
							<DialogTitle className='text-lg font-semibold'>
								Thêm sự kiện
							</DialogTitle>
						</DialogHeader>

						<AddEvent />
					</DialogContent>
				</Dialog>
			</div>

			<div
				ref={ref}
				className={cn(
					'space-y-16 flex flex-col ml-0 md:ml-36 pl-9 md:pl-24 lg:pl-36 before:content-[""] before:block relative before:absolute before:w-0.5 before:h-0 before:rounded-full before:bg-slate-200 before:left-0 before:top-0 before:transition-all before:duration-500 before:ease-in',
					isIntersecting && 'before:h-full',
				)}
			>
				{[...Array(5)].map((_, index) => (
					<div
						key={index}
						data-label='Đang diễn ra'
						className={cn(
							index == 0 &&
								'before:content-[attr(data-label)] before:inline-block before:py-2 before:px-2 before:text-center before:bg-primary-400 relative before:right-[calc(100%+3.25rem)]  md:before:right-[calc(100%+7rem)] lg:before:right-[calc(100%+10rem)] before:absolute before:w-[8rem] before:top-6 before:!rounded-tr-none before:font-medium before:text-white before:text-sm before:rounded-lg after:content-[""] after:inline-block after:border-y-[0.5rem] after:border-x-[1.5rem] after:!border-t-primary-400 after:border-transparent after:absolute after:top-6 lg:after:right-[calc(100%+8.75rem)] md:after:right-[calc(100%+5.75rem)] after:right-[calc(100%+2rem)] transition duration-700 ease-out -translate-x-36 opacity-0 max-md:after:hidden max-md:before:hidden',
							isIntersecting && 'opacity-100 translate-x-0',
						)}
					>
						<div
							style={{
								transitionDelay: 500 * index + 'ms',
							}}
							className={cn(
								'p-4 border border-slate-100 rounded-xl relative before:content-[""] before:block before:h-px lg:before:w-36 md:before:w-24 before:w-9 before:absolute before:rounded-full before:bg-slate-200 before:right-full before:top-6 after:content-[""] after:block after:w-3 after:h-3 after:rounded-full after:absolute after:bg-primary-400 lg:after:right-[calc(100%+9rem)] md:after:right-[calc(100%+6rem)] after:right-[calc(100%+2.25rem)] after:top-6 after:-translate-y-1/2 after:translate-x-1/2 transition opacity-0 translate-x-full ease-out duration-700',
								isIntersecting && 'translate-x-0 opacity-100',
							)}
						>
							<h4>Sự kiện {index + 1}</h4>
							<Separator className='my-2' />
							<ul className='text-sm space-y-2'>
								<li>
									<strong className='font-medium'>Bắt đầu:</strong> 20/10/2021
									00:00
								</li>
								<li>
									<strong className='font-medium'>Kết thúc:</strong> 21/10/2021
									23:59
								</li>
							</ul>
							{index == 0 && (
								<span className='md:hidden bg-primary-400 py-1 px-4 rounded-md text-xs text-white font-medium mt-4 inline-block'>
									Đang diễn ra
								</span>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
