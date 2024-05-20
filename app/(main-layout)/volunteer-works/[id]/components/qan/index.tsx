import AskForm from './ask-form'
import List from './list'

export default function QNA() {
	return (
		<section className='max-w-[40rem] mx-auto'>
			<h3 className='font-semibold text-lg mb-10'>Hỏi đáp</h3>

			<div className='mb-16'>
				<AskForm />
			</div>

			<List />
		</section>
	)
}
