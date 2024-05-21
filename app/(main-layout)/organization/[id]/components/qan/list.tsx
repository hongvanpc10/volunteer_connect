import Alignment from '@/components/ui/alignment'
import { getRandomAvatar } from '@/lib/utils'
import Image from 'next/image'

export default function List() {
	return (
		<div className='space-y-8'>
			{[...Array(3)].map((_, index) => (
				<div key={index}>
					<div>
						<div className='flex items-start'>
							<Image
								alt='avatar'
								src={getRandomAvatar(false, 'Maria')}
								width={40}
								height={40}
								className='w-10 h-10 rounded-full object-cover'
							/>

							<div className='ml-4 px-4 py-3 rounded-lg bg-slate-100 flex-1'>
								<h3 className='text-sm font-medium mb-2'>Maria Scort</h3>
								<div className='prose prose-sm'>
									<p>
										Nostrud veniam laboris laboris consectetur deserunt dolor?
									</p>
								</div>
							</div>
						</div>
						<Alignment align='right' className='mt-1'>
							<span className='text-xs font-medium text-primary-500'>
								Trả lời
							</span>
						</Alignment>
					</div>

					<div className='pl-14 mt-4'>
						<div className='flex items-start'>
							<Image
								alt='avatar'
								src={getRandomAvatar(true, 'Admin')}
								width={40}
								height={40}
								className='w-10 h-10 rounded-full object-cover'
							/>

							<div className='ml-4 px-4 py-2 rounded-lg bg-slate-100 flex-1'>
								<h3 className='text-sm font-medium mb-2'>Maria Scort</h3>
								<div className='prose prose-sm prose-p:!my-1'>
									<p>
										Cillum officia eu commodo ad dolore voluptate reprehenderit
										cupidatat. Proident ea ex ex aute eiusmod occaecat ea anim
										et do labore quis.
									</p>
									<p>Occaecat exercitation eu culpa proident cupidatat.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
