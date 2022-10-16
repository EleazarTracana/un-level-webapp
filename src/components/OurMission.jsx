import styles from "../style";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const OurMission = () => {
    return (
        <section id="about-us">
         <AnimationOnScroll animateIn="animate__fadeInUp">
        <div id="row" className={`flex md:flex-row flex-col py-12`}>
        <div className={`flex-1 px-6 py-12 ${styles.flexCenter}  flex-col xl:pr-4 sm:py-16 xl:py-16 our-mission rounded-full`}>
            <h2 className={`font-poppins font-semibold text-white xs:text-[48px] text-[40px]`}>
                Our Mission
            </h2>
            <p className={`${styles.paragraphWhite} text-center max-w-[750px] mt-5`}>
               We aim to become the #1 community of growth, connecting people worldwide that share our own values and principles
               and want to follow us through the next ladder of evolution.
            </p>
        </div>
        </div>
        </AnimationOnScroll>
      </section>
)}

export default OurMission;