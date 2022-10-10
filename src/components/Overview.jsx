import styles from "../style";
import Spline from "@splinetool/react-spline";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Overview = () => {
  return (
    <section id="overview" className={`flex md:flex-row flex-col bb-dashed ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Unlock your full potential through <br className="sm:block hidden" />{" "}
            <span className="un_level_color">Un-Level NFTs</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[28px] text-[18px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          A Community Of Growth.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Spline scene="https://prod.spline.design/d82JY5rPvR0f-5B8/scene.splinecode"/>
      </div>
    </section>
  );
};

export default Overview;
