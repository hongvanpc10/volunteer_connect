import { PersonError } from '@/errors/person-error'
import { Person } from '@/interfaces/person'
import httpClient, { handleError } from '@/lib/http-client'

class PersonApi {
	async getInfo() {
		try {
			return await httpClient.get<Person>('/student/studentInfo')
		} catch (error) {
			handleError(error, PersonError)
		}
	}
}

const personApi = new PersonApi()
export default personApi
