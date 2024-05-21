import { ParticipantStatus } from '@/interfaces/participant'

const queryKeys = {
	account: ['account'],
	accountInfo: { gen: (id?: string) => ['accountInfo', id] },
	volunteerByOrganization: {
		gen: (id?: string) => ['volunteerByOrganization', id],
	},
	volunteer: {
		gen: (id?: string) => ['volunteer', id],
	},
	participantsByVolunteerWork: {
		gen: (id?: string, status?: ParticipantStatus) => [
			'participantsByVolunteerWork',
			id,
			status,
		],
	},
	volunteerWorks: ['volunteerWorks'],
	volunteerWorksPagination: {
		gen: (page?: number, limit?: number) => ['volunteerWorks', page, limit],
	},
}

export default queryKeys
