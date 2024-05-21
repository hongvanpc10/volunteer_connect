import { Organization } from './organization'

export interface Event {
	_id: string
	title: string
	startDate: Date
	endDate: Date
}

export default interface VolunteerWork {
	_id: string
	title: string
	description: string
	endRegisteredDate: Date
	receivedCoins: number
	imageUrl: string
	organization: Organization
	createdAt: Date
	events: Event[]
	requirements: string
	benefits: string
	contactInfo: string
}
