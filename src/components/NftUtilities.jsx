import styles from "../style";

const NftUtilities = () => { 
        return (
            <section id="nft-utilities" className="py-16 px-16">
                    <div id="row" className={`flex md:flex-row flex-col py-16 mb-16`}>
                    <h2 className={`${styles.heading2}`}>
                        Community Tools
                    </h2>
                    </div>
                    <div id="row" className={`flex md:flex-row flex-col py-16 mb-16 nft-utility-container`}>
                        <div className={`flex-1 px-6 py-12 ${styles.flexCenter} flex-col rounded-lg nft-utility-card`}>
                        <h2 className={`font-poppins font-semibold text-white xs:text-[28px] text-[20px] pb-5`}>
                            Un-Level DApp
                        </h2>
                        <p className="text-white font-poppins font-semibold">

                            • Digital Content Library
                            <br className="sm:block hidden" />

                            • Career Booster Program
                            <br className="sm:block hidden" />
                        </p>
                        </div>
                        <div className={`flex-1 px-6 py-12 ${styles.flexCenter} flex-col rounded-lg nft-utility-card`}>
                        <h2 className={`font-poppins font-semibold text-white xs:text-[28px] text-[20px] pb-5`}>
                            Metaverse
                        </h2>
                        <p className="text-white font-poppins font-semibold">

                        </p>
                        </div>
                        <div className={`flex-1 px-6 py-12 ${styles.flexCenter} flex-col rounded-lg nft-utility-card`}>
                        <p className="text-white font-poppins font-semibold">
                        <h2 className={`font-poppins font-semibold text-white xs:text-[28px] text-[20px] pb-5`}>
                            Interoperability
                        </h2>

                        </p>
                        </div>
                    </div>
            </section>
        )
}

export default NftUtilities;