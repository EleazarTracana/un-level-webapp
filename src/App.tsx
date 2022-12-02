import '@fontsource/poppins/latin.css'

import AboutUs from './sections/About'
import CommunityTools from './sections/CommunityTools'
import Mission from './sections/Mission'
import Overview from './sections/Overview'
import Roadmap from './sections/Roadmap'
import Team from './sections/Team'
import Wave from './components/Wave'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import LayoutApp from './layouts/App'

export default function App() {
	return (
		<LayoutApp>
			<Navbar />
			<Overview />
			<Wave />
			<AboutUs />
			<Mission />
			<CommunityTools />
			<Roadmap />
			<Wave inverted />
			<Team />
			<Wave />
			<Footer />
		</LayoutApp>
	)
}
