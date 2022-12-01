import './App.css'
import '@fontsource/poppins/latin.css'
import {
	Navbar,
	Overview,
	SecondaryOverview,
	OurMission,
	CommunityTools,
	Roadmap,
	OurTeam,
	Footer,
} from './components'

import Wave from 'react-wavify'

export default function App() {
	return (
		<div className='bg-black text-white font-normal w-full h-auto min-h-screen antialiased scroll-smooth'>
			<Navbar />
			<Overview />
			<div className='bg-white w-full h-24'>
				<Wave
					className='w-full h-full'
					fill='black'
					paused={false}
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.25,
						points: 2,
					}}
				/>
			</div>
			<SecondaryOverview />
			<OurMission />
			<CommunityTools />
			<Roadmap />
			<OurTeam />
			<Footer />
		</div>
	)
}
