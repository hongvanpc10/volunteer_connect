import { SearchNormal1 } from "iconsax-react";

export default function Search() {
    return (
			<section className='container py-16 flex items-center flex-col'>
				<h2 className='text-4xl font-bold mb-4 text-center'>Khám phá</h2>
				<h3 className='mb-14'>Khám phá các tổ chức, hoạt động yêu thích </h3>

				<div className='flex items-center bg-slate-50 border border-slate-200 max-w-[50rem] w-full p-1.5 rounded-2xl'>
					<input
						placeholder='Tìm kiếm hoạt động theo tên, trường, đơn vị tổ chức, ...'
						className='outline-none bg-transparent flex-1 px-6'
					/>
					<button className='flex items-center justify-center h-10 px-6 bg-primary-200 rounded-xl'>
						<SearchNormal1 className='h-5' />
					</button>
				</div>

				<div className='flex items-center justify-center space-x-3 mt-8'>
					{['UIT', 'MHX', 'XTN', 'CTXH', 'KTX'].map((label, index) => (
						<span
							key={index}
							className='bg-primary-200 text-primary-700 py-1 px-4 rounded-full cursor-pointer transition hover:bg-primary-200/90'
						>
							{label}
						</span>
					))}
				</div>
			</section>
		)

}