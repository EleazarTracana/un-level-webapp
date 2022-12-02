import { PropsWithChildren } from 'react'
import Debug from '../helpers/Debug'
import Scroll from '../helpers/Scroll'

export default function LayoutApp({ children }: PropsWithChildren) {
	return (
		<div className='h-auto min-h-screen w-full scroll-smooth bg-black font-normal text-white antialiased'>
			<div id='top'></div>
			<Scroll />
			<Debug />
			{children}
		</div>
	)
}
