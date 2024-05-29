'use client'

import organizationsApi from '@/apis/organizations'
import OrganizationCard from '@/components/organization-card'
import queryKeys from '@/configs/query-keys'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useIntersectionObserver } from 'usehooks-ts'

export default function Organizations() {
	const searchParams = useSearchParams()
	const query = searchParams.get('q')

	const { data, isLoading } = useQuery({
		queryKey: queryKeys.searchOrganizations.gen(query || ''),
		queryFn: () => organizationsApi.search(query!),
		enabled: !!query,
	})

	const { ref, isIntersecting } = useIntersectionObserver({
		threshold: 0,
		freezeOnceVisible: true,
	})

	return (
		<section className='container py-16'>
			<h2 className='text-2xl font-bold mb-12 text-center'>Tổ chức</h2>

			{data && data.length > 0 && <div ref={ref} />}
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
				{isLoading &&
					[...Array(6)].map((_, index) => (
						<OrganizationCard.Skeleton key={index} />
					))}

				{data &&
					data.length > 0 &&
					data.map((organization, index) => (
						<OrganizationCard
							data={organization}
							key={index}
							style={{
								transitionDelay: index * 200 + 'ms',
							}}
							className={cn(
								'transition duration-500 ease-out translate-y-36 opacity-0',
								isIntersecting && 'opacity-100 translate-y-0',
							)}
						/>
					))}
			</div>
			{data && data.length == 0 && (
				<div className='text-center mt-8'>
					<p className='text-baase'>Không tìm thấy kết quả nào cho tổ chức</p>
				</div>
			)}
		</section>
	)
}
