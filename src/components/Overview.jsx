import styles from "../style";
import Spline from "@splinetool/react-spline";

const Overview = () => {
  return (
    <section id="overview" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
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
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Spline scene="https://prod.spline.design/d82JY5rPvR0f-5B8/scene.splinecode"/>
      </div>
    </section>
  );
};

export default Overview;
