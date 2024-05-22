import { OrganizationError } from '@/errors/organization'
import { Organization } from '@/interfaces/organization'
import httpClient, { handleError } from '@/lib/http-client'

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
}

const organizationsApi = new OrganizationsApi()
export default organizationsApi
