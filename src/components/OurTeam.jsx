import styles, { layout } from '../style'

const OurTeam = () => (
	<section
		id='ourteam'
		className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div className={`xl:px-0 sm:px-4 px-4 ${layout.sectionRoadmap}`}>
			<h2
				className={`${styles.heading2Black} lg:py-16 xl:py-16 md:py-16 sm:py-16 py-16`}>
				Our Team
			</h2>
			<div></div>
		</div>
	</section>
)

export default OurTeam
