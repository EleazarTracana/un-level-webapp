import styles, { layout } from "../style";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import laptopImage from "../assets/un_level_laptop.png";
import partnerships from "../assets/un_level_partnerships.png";
 

const items = [
  {
    name: "Website",
    active: true
  },
  {
    name: "Partnerships",
    active: true
  },
  {
    name: "Private Sale",
    active: true
  }
]


const Roadmap = () =>  (
  <section id="roadmap" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`xl:px-0 sm:px-16 px-6 ${layout.sectionRoadmap}`}>
      <h2 className={`${styles.heading2} lg:py-16 xl:py-16 md:py-16 sm:py-16 py-16`}>
        Roadmap 1.0
      </h2>
      
      <div className={`flex-1  flex-col xl:px-0 sm:px-16 px-6`}>
      <Timeline position="alternate">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
           <p className={styles.paragraphWhite}>Q4 2022</p>
           <p className={styles.paragraphWhite}>
              <br className="sm:block hidden" />
              All Un-Level NFTs will be available on our website</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-white">
            <p className={styles.paragraphWhite}>Website</p>
             <img src={laptopImage}  className="m-auto"/>
            </TimelineContent>
        </TimelineItem>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
        <TimelineItem>
          <TimelineOppositeContent>
          <p className={styles.paragraphWhite}>Partnerships</p>  
          <img src={partnerships} className="m-auto" />        
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-white">
          <p className={styles.paragraphWhite}>Q1 2023</p>
          <p className={styles.paragraphWhite}>
          <br className="sm:block hidden" />
          {" "}We want to deliver to our community 10.000 Unique molecules, available for minting through our website 
              <br className="sm:block hidden" />{" "} Each unique Un-Level 
            </p> 
          </TimelineContent>
        </TimelineItem>
        </AnimationOnScroll>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
          <p className={styles.paragraphWhite}>
          Marketplace - Q2 2023
          </p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-white">
            <p className={styles.paragraphWhite}>
            We'll be Open Sea partners, but also include our own marketplace with
            flexible fees and more exciting features.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>

    </div>
  </section>
);

export default Roadmap;
