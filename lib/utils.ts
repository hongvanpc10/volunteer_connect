import VolunteerWork from '@/interfaces/volunteer-work'
import { type ClassValue, clsx } from 'clsx'
import { min } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function splitName(name: string) {
	const [firstName, ...lastName] = name.split(/\s+/)
	return {
		firstName,
		lastName: lastName.join(' '),
	}
}

export function getRandomAvatar(gender: boolean, username: string) {
	return `https://avatar.iran.liara.run/public/${
		gender ? 'boy' : 'girl'
	}?username=${username}`
}

export function getRandomTextAvatar(username: string) {
	return `https://avatar.iran.liara.run/username?username=${username}`
}

export function getEndDateOfVolunteerWork(volunteerWork: VolunteerWork) {
	return min(
		[
			volunteerWork.endRegisteredDate,
			...volunteerWork.events.map(e => e.endDate),
		].filter(Boolean),
	)
}
