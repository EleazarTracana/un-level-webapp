import { useState, useEffect } from "react";
import { PageFlip } from 'page-flip';

import { vw, vh } from "../untils/ScreenSizeUnits";
import Navbar from "../sections/Navbar";
import Wave from "../components/Wave";
import Footer from "../sections/Footer";

enum SizeType {
    /** Dimensions are fixed */
    FIXED = "fixed",
    /** Dimensions are calculated based on the parent element */
    STRETCH = "stretch"
}

const bgImages = [
    'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1517088510108-1f4e04f3e8fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9hZC8xNjAweDkwMHx8fHx8fDE2MzU4ODUxMTQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1570622300391-059a11a5ef7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW58fHx8fHwxNjM1OTUxNjA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',
]

export default function About() {
    const [first, setFirst] = useState(false);
    const [flipObject, SetFlipObject] = useState<PageFlip>();

    useEffect(() => {
        if (first) {
            let pagesRef = document.getElementById("book-filp") as HTMLDivElement;

            const pageFlip = new PageFlip(
                pagesRef,
                {
                    width: Math.round(Math.floor(vh(62))), 
                    height: Math.round(Math.floor(vh(85))), 
                    maxShadowOpacity: 0,
                    // showCover: true,
                    mobileScrollSupport: false
                }
            );

            SetFlipObject(pageFlip);

            pageFlip.loadFromHTML(document.querySelectorAll(".page"));

            document.addEventListener('keydown', (event) => {
                if (event.key == 'ArrowLeft') {
                    pageFlip.flipPrev();
                } else if (event.key == 'ArrowRight') {
                    pageFlip.flipNext();
                }
            });
        }
        setFirst(true);
    }, [first])

    return (
        <div className="about-container overflow-x-hidden">
            <Navbar />

            <div className="flex items-center overflow-hidden justify-around h-full bg-white py-12">
                <div id='book-filp' className="flip-book relative w-full">
                    <div className="page page-cover page-cover-top" data-density="hard">
                        <div className="page-content">
                            <h2>BOOK TITLE</h2>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">Page header 1</h2>
                            <div className="page-footer">2</div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">Page header - 2</h2>
                            <div className="page-footer">16</div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">Page header - 3</h2>
                            <img className="page-image" src={bgImages[2]} alt="bg image" />
                            <div className="page-footer">17</div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">Page header - 4</h2>
                            <img className="page-image" src={bgImages[3]} alt="bg image" />
                            <div className="page-footer">17</div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">Page header - 5</h2>
                            <img className="page-image" src={bgImages[4]} alt="bg image" />
                            <div className="page-footer">17</div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">Page header - 16</h2>
                            <div className="page-footer">17</div>
                        </div>
                    </div>
                    <div className="page page-cover page-cover-bottom" data-density="hard">
                        <div className="page-content">
                            <h2>THE END</h2>
                        </div>
                    </div>
                </div>
            </div>


            <Wave />
            <Footer />
        </div>
    )
}