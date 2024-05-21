import { Person } from "./person"

export type ParticipantStatus = 'ACCEPTED' | 'UNACCEPTED' | 'WAITING' | 'FINISH'
export interface Participant {
	_id: string
	studentId: Person
	volunteerWorkId: string
	status: ParticipantStatus
	feedback: string
	rating: number
	receivedCoins: number
}
