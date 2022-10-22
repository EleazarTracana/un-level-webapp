import styles, { layout } from "../style";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent, TimelineOppositeContent } from '@mui/lab';

const Roadmap = () =>  (
  <section id="roadmap" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`xl:px-0 sm:px-4 px-4 ${layout.sectionRoadmap}`}>
      <h2 className={`${styles.heading2} lg:py-16 xl:py-16 md:py-16 sm:py-16 py-16`}>
        Roadmap
      </h2>
      
      <div className={`flex-1  flex-col xl:px-0 sm:px-4 px-4`}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
           <p className={styles.paragraphWhite}>Q4 2022</p>
           <p className={`${styles.paragraphWhite} timeline-content-card rounded-lg py-4 px-4`}>
                "With great power comes great responsibility". <br className="sm:block hidden" />
                 As we develop the Un-Level DApp, we will also working on our Ambassadors Program. A program mainly focused 
                on spreading our vision and values through top level influencers.
              </p>
          </AnimationOnScroll>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-white">
            <p className={styles.paragraphWhite}>Spreading Un-Level vision</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <AnimationOnScroll animateIn="animate__fadeInRight">
          <p className={styles.paragraphWhite}>Q1 2023</p>
          <p className={`${styles.paragraphWhite} timeline-content-card rounded-lg py-4 px-4`}>
            We will adding to the board strategic partners that will help us along the way and provides us with real utilities to our NFT holders. 
            </p> 
            </AnimationOnScroll>  
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-white">
          <p className={styles.paragraphWhite}>Grow as we go</p>  
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <p className={styles.paragraphWhite}>Q1 2023</p>
            <p className={`${styles.paragraphWhite} timeline-content-card rounded-lg py-4 px-4`}>
              Minting goes live on ETH over a smart contract fully audited by third parties such as Hacken.
            </p>
            </AnimationOnScroll>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p className={styles.paragraphWhite}>
            Public Sale
          </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <p className={styles.paragraphWhite}>Q2 2023</p>
            <p className={`${styles.paragraphWhite} timeline-content-card rounded-lg py-4 px-4`}>
              On the second quarter of 2023 we will be releasing our first version of Un-Level DApp, providing key features to our community.
            </p>
            </AnimationOnScroll>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p className={styles.paragraphWhite}>
            MVP Un-Level DApp
          </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <p className={styles.paragraphWhite}>Q3/Q4 2023</p>
            <p className={`${styles.paragraphWhite} timeline-content-card rounded-lg py-4 px-4`}>
              A Metaverse building available to only NFT Holders, 
              hosting meetups and coaching sessions to create the Synergy of a high value community  
            </p>
            </AnimationOnScroll>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p className={styles.paragraphWhite}>
            Metaverse
          </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
    </div>
  </section>
);

export default Roadmap;
