import styles, { layout } from "../style";
import evolutionLadder from "../assets/evolution-ladder-1.png"

const SecondaryOverview = () =>  (
  <section id="features">
    <div id="row" className={`flex md:flex-row flex-col ${styles.paddingY} px-8 lg:px-16 sm:px-4`}>
    <div className={`flex-1 ${styles.flexEnd} order-last px-6 py-12 sm:order-last md:order-first xl:order-first flex-col xl:pr-4 sm:py-16 xl:py-8`}>
       <img src={evolutionLadder} />
    </div>
    
      <div className={`flex-2 ${styles.flexStart} flex-col xl:px-6 sm:px-16 px-6`}>
      <div className={`flex-2 ${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        As you evolve, <br className="sm:block hidden" /> your NFT does too
      </h2>

      <p className={`${styles.paragraphWhite} max-w-[470px] mt-5`}>
      We believe that the most valuable asset on earth is time. 
      We have developed a mechanism to make our NFT evolve overtime, just as humans do. 
      This way our digital asset embraces one of the most beautiful aspects of life itself: evolution. 
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        We start from the tiniest organism the human body is made of: molecules. 
        In our public sale every investor will get a high-quality NFT molecule that will go through <span className="un_level_color font-semibold">12 different stages</span>,
        until  it reaches its final unique form.
      </p>

    </div>
    </div>

    </div>

   <div id="row" className={`flex md:flex-row flex-col px-8 lg:px-16 sm:px-4`}>
    <div className={`flex-1 ${styles.flexStart} px-6 flex-col xl:pr-4 `}>
      <p className={`${styles.paragraphWhite} max-w-[470px]`}>
      Every NFT stage will get you a different access to our community's tools and a given weight of vote on our DAO Governance.
      As you approximate to what we like to call <span className="un_level_color font-semibold">"The Higher Self"</span>, 
      more features will be unlocked and your weight of vote will also increase.
      </p>
    </div>
  </div>

  </section>
);

export default SecondaryOverview;
