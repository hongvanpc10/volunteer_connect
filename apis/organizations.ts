import { OrganizationError } from '@/errors/organization'
import { Organization } from '@/interfaces/organization'
import httpClient, { handleError } from '@/lib/http-client'

interface AddEventData {
	title: string
	description: string
	startDate: Date
	endDate: Date
	volunteerWorkId: string
}

class OrganizationsApi {
	async getMe() {
		try {
			return await httpClient.get<Organization>('/organization/loginedInfo')
		} catch (error) {
			handleError(error, OrganizationError)
		}
	}

	async getInfo(id: string) {
		try {
			return await httpClient.get<Organization>(
				'/organization/organizationInfo',
				{
					params: {
						organizationId: id,
					},
				},
			)
		} catch (error) {
			handleError(error, OrganizationError)
		}
	}

	async addEvent(data: AddEventData) {
		try {
			return await httpClient.post('/organization/newEvent', data)
		} catch (error) {
			handleError(error, OrganizationError)
		}
	}
}

const organizationsApi = new OrganizationsApi()
export default organizationsApi
