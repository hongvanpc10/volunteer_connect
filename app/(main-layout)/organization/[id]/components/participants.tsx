'use client'

import { Button } from '@/components/ui/button'
import { cn, getRandomAvatar } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from 'usehooks-ts'

export default function Participants() {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0,
		freezeOnceVisible: true,
	})

	return (
		<section>
			<h3 className='font-semibold text-lg mb-6'>Tình nguyện viên tham gia</h3>

			<div ref={ref} className='grid grid-cols-2 md:grid-cols-3 gap-5'>
				{[...Array(20)].map((_, index) => (
					<div
						key={index}
						style={{
							transitionDelay: 200 * index + 'ms',
						}}
						className={cn(
							'flex flex-col items-center px-4 py-6 border border-slate-100 rounded-xl transition duration-500 ease-out translate-y-36 opacity-0',
							isIntersecting && 'translate-y-0 opacity-100',
						)}
					>
						<Image
							alt='avatar'
							src={getRandomAvatar(true, 'Vinh')}
							width={64}
							height={64}
							className='w-16 h-16 object-cover rounded-full'
						/>
						<h3 className='mt-3 text-sm font-medium'>Phạm Văn Vinh</h3>
						<Button asChild className='mt-6' variant='outline' size='sm'>
							<Link href={''}>Xem chi tiết</Link>
						</Button>
					</div>
				))}
			</div>
		</section>
	)
}
