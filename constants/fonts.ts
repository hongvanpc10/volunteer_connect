import { Montserrat } from 'next/font/google'

const sans = Montserrat({
	subsets: ['latin', 'vietnamese'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const fonts = { sans }

export default fonts