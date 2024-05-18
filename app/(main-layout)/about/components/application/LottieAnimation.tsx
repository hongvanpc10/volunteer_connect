'use client'
import { useDeviceSize } from '@/hooks'
import Lottie from 'react-lottie'

function LottieAnimation({lottie}: {lottie: any}) {
    const [deviceWidth, deviceHeight] = useDeviceSize()

	const sizeOfIllustrator = () => {
		if (deviceWidth < 1024 && deviceWidth >= 768) {
			return 300
		} else if (deviceWidth < 768) {
			return 250
		} else {
			return 400
		}
	}

	return (
		<Lottie
			options={{
				loop: true,
				autoplay: true,
				animationData: lottie,
			}}
			height={sizeOfIllustrator()}
			width={sizeOfIllustrator()}
		/>
	)
}

export default LottieAnimation
