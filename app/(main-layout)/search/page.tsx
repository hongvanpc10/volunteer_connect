import Search from '@/components/search'
import Results from './components/results'

export default function SearchPage() {
	return (
		<div className='py-16'>
			<Search />

			<h1 className='text-center mb-12 text-3xl font-bold'>Kết quả tìm kiếm</h1>

			<Results />
		</div>
	)
}
