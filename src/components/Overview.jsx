import styles from "../style";
import Spline from "@splinetool/react-spline";
import UnLevelMolecule from "../assets/un-level-molecule.gif"

const Overview = () => {
  return (
    <section id="overview" className={`flex md:flex-row flex-col ${styles.paddingY} px-8 lg:px-16 sm:px-4`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Unlock your full potential through <br className="sm:block hidden" />{" "}
            <span className="un_level_color">Un-Level NFTs</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[28px] text-[18px] text-black w-full mt-">
          The first NFT Collection that evolves overtime. 
        </h1>

       <div className={`flex-1  ${styles.flexEnd}`}>
          <div className="py-8 px-3">
            <button className="rounded-full bg-launch-app font-semibold text-neutral-300 px-6 py-3 text-lg w-18 sm:w-24 md:w-38 lg:w-48 xl:w-48 disabled-button" disabled>
              Launch App
            </button>
          </div>

          <div className="py-8 px-3">
            <a href="https://un-level.gitbook.io/what-is-un-level/" target="_blank" rel="noreferrer" >
            <button className="rounded-full bg-un-level font-semibold text-lg text-white px-6 py-3 timeline-content-card w-18 md:w-38 sm:w-24 lg:w-48 xl:w-48 cursor-pointer">
              Docs
            </button>
            </a>
          </div>
          </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={UnLevelMolecule}/>
      </div>
    </section>
  );
};

export default Overview;
