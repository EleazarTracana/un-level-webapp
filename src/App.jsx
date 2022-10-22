import styles from "./style";
import "animate.css/animate.min.css";
import {SecondaryOverview, Clients, Footer, Navbar, Stats, Testimonials, Overview, Roadmap, OurMission, NftUtilities } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Overview />
      </div>
    </div>
    
    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <SecondaryOverview />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <OurMission />
      </div>
    </div>

    
    <div className={`bg-black  ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidthMax}`}>
      <NftUtilities />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Roadmap />
      </div>
    </div>
    
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
