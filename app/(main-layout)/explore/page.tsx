import { Metadata } from 'next'
import Organizations from './components/organizations'

export const metadata: Metadata = {
	title: 'Khám phá',
}

function Explore() {
	return (
		<div>
			<Organizations />
		</div>
	)
}

export default Explore
