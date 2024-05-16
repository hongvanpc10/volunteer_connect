'use client'

import { Dispatch, SetStateAction, createContext, useState } from 'react'
import Step1 from './step-1'
import Step2 from './step-2'

interface PersonalData {
	firstName?: string
	lastName?: string
	email?: string
	dob?: Date
	phone?: string
	gender?: string
	school?: string
	major?: string
	studentCode?: string
	password?: string
}

export const PersonalContext = createContext<{
	data: PersonalData
	setData: Dispatch<SetStateAction<PersonalData>>
	setStep: Dispatch<SetStateAction<number>>
}>({
	data: {},
	setData: () => {},
	setStep: () => {},
})

export default function Personal() {
	const [data, setData] = useState<PersonalData>({
		firstName: '',
		lastName: '',
		email: '',
		dob: undefined,
		phone: '',
		gender: '',
		school: '',
		major: '',
		studentCode: '',
		password: '',
	})

	const [step, setStep] = useState(1)

	return (
		<PersonalContext.Provider value={{ data, setData, setStep }}>
			{step === 1 ? <Step1 /> : <Step2 />}
		</PersonalContext.Provider>
	)
}
