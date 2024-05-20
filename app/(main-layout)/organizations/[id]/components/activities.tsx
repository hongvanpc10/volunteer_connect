import VolunteerWorkHorizontalCard from '@/components/volunteer-work-horizontal-card'

export default function Activities() {
	return (
		<section>
			<h3 className='font-semibold text-lg mb-6'>Các hoạt động của tổ chức</h3>

			<div className='space-y-14'>
				{[...Array(8)].map((_, index) => (
					<VolunteerWorkHorizontalCard key={index} />
				))}
			</div>
		</section>
	)
}
