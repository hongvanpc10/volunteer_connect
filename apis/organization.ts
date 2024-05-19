import { PersonError } from '@/errors/person-error'
import { Organization } from '@/interfaces/organization'
import { Person } from '@/interfaces/person'
import httpClient, { handleError } from '@/lib/http-client'

class OrganizationApi {
	async getInfo() {
		try {
			return await httpClient.get<Organization>(
				'/organization/organizationInfo',
			)
		} catch (error) {
			handleError(error, PersonError)
		}
	}
}

const organizationApi = new OrganizationApi()
export default organizationApi
