import { VolunteerWorkError } from '@/errors/volunteer-work-error'
import VolunteerWork from '@/interfaces/volunteer-work'
import httpClient, { PaginatedResponse, handleError } from '@/lib/http-client'

type CreateData = Omit<
	VolunteerWork,
	'_id' | 'imageUrl' | 'createdAt' | 'events' | 'organization'
>

class VolunteerWorksApi {
	async createNew({ data, image }: { data: CreateData; image: File }) {
		try {
			const formData = new FormData()
			formData.append('jsonData', JSON.stringify(data))
			formData.append('image', image)

			return await httpClient.post<VolunteerWork>(
				'/volunteerWork/newVolunteerWork',
				formData,
			)
		} catch (error) {
			handleError(error, VolunteerWorkError)
		}
	}

	async getInfo(id: string) {
		try {
			return await httpClient.get<VolunteerWork>(
				'/volunteerWork/volunteerWorkInfo',
				{ params: { volunteerWorkId: id } },
			)
		} catch (error) {
			handleError(error, VolunteerWorkError)
		}
	}

	async getVolunteerWorksByOrganizationId(data: {
		organizationId: string
		page: number
		limit: number
	}) {
		try {
			return await httpClient.post<PaginatedResponse<VolunteerWork>>(
				'/volunteerWork/orgVolunteerWorks',
				data,
			)
		} catch (error) {
			handleError(error, VolunteerWorkError)
		}
	}

	async get(data: { limit: number; page: number }) {
		try {
			return await httpClient.post<PaginatedResponse<VolunteerWork>>(
				'/volunteerWork/volunteerWorks',
				data,
			)
		} catch (error) {
			handleError(error, VolunteerWorkError)
		}
	}

	async addQuestion(data: { questionText: string; volunteerWorkId: string }) {
		try {
			return await httpClient.post('/volunteerWork/addQuestion', data)
		} catch (error) {
			handleError(error, VolunteerWorkError)
		}
	}

	async answerQuestion(data: { questionId: string; answer: string }) {
		try {
			return await httpClient.post('/volunteerWork/answerQuestion', data)
		} catch (error) {
			handleError(error, VolunteerWorkError)
		}
	}
}

const volunteerWorksApi = new VolunteerWorksApi()
export default volunteerWorksApi
