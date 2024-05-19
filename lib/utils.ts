import { type ClassValue, clsx } from 'clsx'
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
