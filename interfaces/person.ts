import Account from './account'

export interface Person {
	_id: string
	account: Account
	name: string
	faculty: string
	school: string
	gender: boolean
	totalPoints: number
	quote: string
	phoneNumber: string
	studentCode: string
	dob: Date
	avatarUrl: string
}
