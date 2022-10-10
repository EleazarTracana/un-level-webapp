import styles, { layout } from "../style";
import Spline from "@splinetool/react-spline";
import YoutubeEmbed from "./YoutubeEmbed";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const SecondaryOverview = () =>  (
  <section id="features">
    <div id="row" className={`flex md:flex-row flex-col bb-dashed ${styles.paddingY}`}>

      
    <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-16 px-6`}>
        <YoutubeEmbed embedId="0KrdRZVr-q4" />
    </div>
    
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        As you evolve, <br className="sm:block hidden" /> your NFT does too
      </h2>

      <p className={`${styles.paragraphWhite} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum vel tellus quis dignissim. Aenean imperdiet mi ac massa fringilla, sollicitudin eleifend nibh aliquam. Duis mollis dignissim sapien. Nam sed justo faucibus, vehicula felis sit amet, porta diam. Cras ullamcorper laoreet nisl, vel semper turpis congue sed. Cras interdum, felis a placerat mattis, eros tortor laoreet tortor, quis egestas ex metus ac libero. Duis lacinia efficitur tellus, eget vestibulum quam fermentum luctus. Nulla facilisi. Quisque elementum rutrum metus, eget pharetra felis. Fusce non pulvinar erat. Integer non efficitur sapien, at blandit mi. Sed congue venenatis facilisis. Nullam vel tincidunt leo. Phasellus scelerisque rutrum mauris ut suscipit. Fusce ligula mauris, lobortis nec ornare ut, malesuada id lorem.
      </p>

    </div>
    </div>

    </div>
  </section>
);

export default SecondaryOverview;
