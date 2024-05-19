import { PersonError } from '@/errors/person-error'
import Account from '@/interfaces/account'
import { Person } from '@/interfaces/person'
import httpClient, { handleError } from '@/lib/http-client'

class PersonApi {
	async getAccount() {
		try {
			return await httpClient.get<{ _id: string; account: Account }>(
				'/student/loginedInfo',
			)
		} catch (error) {
			handleError(error, PersonError)
		}
	}

	async getInfo(id: string) {
		try {
			return await httpClient.get<Person>('/student/studentInfo', {
				params: {
					studentId: id,
				},
			})
		} catch (error) {
			handleError(error, PersonError)
		}
	}
}

const personApi = new PersonApi()
export default personApi
