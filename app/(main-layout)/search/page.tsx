import Search from '@/components/search'
import Organizations from './components/organizations'
import VolunteerWorks from './components/volunteer-works'

export default function SearchPage() {
	return (
		<div className='py-16'>
			<Search />

			<h1 className='text-center mb-12 text-3xl font-bold'>Kết quả tìm kiếm</h1>

			<Organizations />
			<VolunteerWorks />
		</div>
	)
}