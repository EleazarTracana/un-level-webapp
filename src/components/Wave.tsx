import Wavify from 'react-wavify'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Wave({ inverted = false }) {
	const morePoints = useMediaQuery('(min-width: 768px)')

	return (
		<div
			className={`h-24 w-full bg-white ${
				inverted ? ' -scale-y-100' : ''
			}`}>
			<Wavify
				className='h-full w-full'
				fill='black'
				paused={false}
				options={{
					height: 20,
					amplitude: 20,
					speed: 0.25,
					points: !morePoints ? 3 : 6,
				}}
			/>
		</div>
	)
}
