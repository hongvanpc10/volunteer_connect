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
