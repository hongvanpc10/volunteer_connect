'use client'
import OrganizationCard from '@/components/organization-card'
import organizationsApi from '@/apis/organizations'
import queryKeys from '@/configs/query-keys'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { useQuery } from '@tanstack/react-query'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function MakeList() {
	const router = useRouter()
	const [page, setPage] = useState(1)

	const searchParams = useSearchParams()
	const searchPage = searchParams.get('page') || '1'

	const { data, isLoading } = useQuery({
		queryKey: queryKeys.organizationsPagination.gen(page, 9),
		queryFn: () => organizationsApi.getOrganizations({ page, limit: 9 }),
	})

	useEffect(() => {
		if (searchPage) {
			if (Number(searchPage) < 1) {
				router.push('?page=1')
			} else if (
				data &&
				Number(searchPage) > Math.ceil(data.pagination.total / 9)
			) {
				router.push('?page=' + Math.ceil(data.pagination.total / 9))
			} else {
				setPage(Number(searchPage))
			}
		}
	}, [data, router, searchPage])

	return (
		<div>
			<div>
				{data && (
					<div className='grid grid-cols-3 gap-6'>
						{data.data.map((organization, index) => (
							<OrganizationCard key={index} data={organization} />
						))}
					</div>
				)}
			</div>
			{data && (
				<Pagination className='mt-16'>
					<PaginationContent>
						{page > 1 && (
							<PaginationItem>
								<PaginationPrevious
									className='cursor-pointer'
									onClick={() => router.push('?page=' + (page - 1))}
								/>
							</PaginationItem>
						)}

						{[
							[...Array(Math.ceil(data.pagination.total / 9))].map(
								(_, index) => (
									<PaginationItem key={index}>
										<PaginationLink
											isActive={page == index + 1}
											className='cursor-pointer'
											onClick={() => router.push('?page=' + (index + 1))}
										>
											{index + 1}
										</PaginationLink>
									</PaginationItem>
								),
							),
						]}

						{page < Math.ceil(data.pagination.total / 9) && (
							<PaginationItem>
								<PaginationNext
									className='cursor-pointer'
									onClick={() => router.push('?page=' + (page + 1))}
								/>
							</PaginationItem>
						)}
					</PaginationContent>
				</Pagination>
			)}
		</div>
	)
}

function List() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
            <MakeList />
        </Suspense>
	)
}

export default List