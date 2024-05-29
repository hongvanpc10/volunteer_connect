'use client'

import { Suspense } from 'react'
import VolunteerWorks from './volunteer-works'
import Organizations from './organizations'

export default function Results() {
	return (
		<>
			<Suspense>
				<Organizations />
			</Suspense>
			<Suspense>
				<VolunteerWorks />
			</Suspense>
		</>
	)
}
