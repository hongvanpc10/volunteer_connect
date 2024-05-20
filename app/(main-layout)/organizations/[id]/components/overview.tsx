import { Separator } from '@/components/ui/separator'
import { getRandomTextAvatar } from '@/lib/utils'
import Image from 'next/image'

export default function Overview() {
	return (
		<section className='border border-slate-100 rounded-2xl px-4 md:px-6 xl:px-4 py-6 flex items-center flex-col'>
			<Image
				alt='avatar'
				src={getRandomTextAvatar('UIT')}
				width={80}
				height={80}
				className='w-20 h-20 rounded-full object-cover'
			/>
			<h3 className='text-base font-semibold line-clamp-2 text-center mt-2'>
				Tên tổ chức
			</h3>
			<p className='mt-3 text-sm text-center'>
				Trường Đại học Công nghệ Thông tin - ĐHQG-HCM
			</p>
			<Separator className='my-4' />

			<h4 className='text-sm font-medium w-full mb-3'>Thông tin liên hệ</h4>

			<div className='prose w-full prose-sm prose-p:!m-0'>
				<p>Email: example@gmail.com</p>
				<p>SDT: 9999999999</p>
			</div>
		</section>
	)
}
