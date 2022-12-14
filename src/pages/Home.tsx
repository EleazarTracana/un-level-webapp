import '@fontsource/poppins/latin.css'

import AboutUs from '../sections/About'
import CommunityTools from '../sections/HolderBenefits'
import Mission from '../sections/Mission'
import Overview from '../sections/Overview'
import Roadmap from '../sections/Roadmap'
import Team from '../sections/Team'
import Wave from '../components/Wave'
import Footer from '../sections/Footer'
import Social from '../sections/Social'
import Navbar from '../sections/Navbar'

export default function LandingPage() {
	return (
		<>
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
			<Social />
			<Footer />
		</>
	)
}