import { ParticipantsError } from '@/errors/participants-error'
import { Participant, ParticipantStatus } from '@/interfaces/participant'
import httpClient, { handleError } from '@/lib/http-client'

class ParticipantsApi {
	async getByVolunteerWork(data: {
		volunteerWorkId: string
		status?: ParticipantStatus
	}) {
		try {
			return await httpClient.post<Participant[]>(
				'/participant/participants',
				data,
			)
		} catch (error) {
			handleError(error, ParticipantsError)
		}
	}
}

const participantsApi = new ParticipantsApi()
export default participantsApi
