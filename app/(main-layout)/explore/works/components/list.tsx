import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import VolunteerWorkVerticalCard from '@/components/volunteer-work-vertical-card'

export default function List() {
	return (
		<div>
			<div className='grid grid-cols-3 gap-6'>
				{[...Array(9)].map((_, index) => (
					<VolunteerWorkVerticalCard key={index} />
				))}
			</div>

			<Pagination className='mt-16'>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href='#' />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink isActive href='#'>
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>10</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href='#' />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}
