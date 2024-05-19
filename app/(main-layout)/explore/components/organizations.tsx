export default function Organizations() {
	return (
		<section className='container py-16'>
			<h2 className='text-3xl font-bold mb-14 text-center'>
				Các tổ chức tình nguyện
			</h2>

			<div className='grid col-span-3 gap-6'>
				{[...Array(6)].map((_, index) => (
					<div key={index}>
						
					</div>
				))}
			</div>
		</section>
	)
}
