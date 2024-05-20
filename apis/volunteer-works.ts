import { VolunteerWorkError } from '@/errors/volunteer-work-error'
import VolunteerWork from '@/interfaces/volunteer-work'
import httpClient, { handleError } from '@/lib/http-client'

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
}

const volunteerWorksApi = new VolunteerWorksApi()
export default volunteerWorksApi
