import { OrganizationError } from '@/errors/organization'
import { PersonError } from '@/errors/person-error'
import Account from '@/interfaces/account'
import { Organization } from '@/interfaces/organization'
import httpClient, { handleError } from '@/lib/http-client'

class OrganizationApi {
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

const organizationApi = new OrganizationApi()
export default organizationApi
