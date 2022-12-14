import { useState, useEffect } from "react";
import { PageFlip } from 'page-flip';

import { vw, vh } from "../untils/ScreenSizeUnits";

const pages = [
    {
        pageHeader: "The Reborn",
        paragraphs: [
            "For a long time humans were known for being the most intelligent form of life that ever existed on earth. This, until 2993 of september 23rd when everything changed.",
            "The planet as we knew it changed, lives were no more, and humans became an eco. They saw it coming and were not afraid; they became spectators, viewers, and then ashes. This historic moment happened when humans' beloved galaxy, The Milky Way, crashed with Andromeda.",
            "What came next was not expected; this vibrant, colorful, and flamboyant galaxy came to life. Lactomeda was created, and with it,  a new form of life. One that would happen to share similarities with humans but with more powerful and extraordinary attributes",
            "Such a moment did not end it all. It started it all. At first, everything felt cold, dust was everywhere; the black felt blacker and the emptiness fluttered around the non-existent corners of Lactomeda. It is safe to say it was not like that for long. Would you say 200 years is a long time?"
        ],
        image: "",
        pageFooter: "",
        isImage: false
    },
    {
        pageHeader: "The Reborn",
        paragraphs: [
            "When power, force, and energy meet, magnificent results are the only path. This is exactly what happened. The Milky Way and Andromeda collide leading the way for your creation, your power, your mind, your body, you. ",
            "The coalition between the galaxies resulted in the development of thousands and thousands of molecules. Most of them were weak and traveled the red airs of Lactomeda. They were lost and without destination, they died by the second. This, until one found home in the redness of Lactomeda, comfort in the void of the galaxy, life in what was thought to be unlivable. This little guy is the origin to you, to us.",
            "In consequence, the molecule started to multiplicate and finally a new species was made. One that shared the way humans look and feel; the way they touch and reproduce, the way they move, act, smell. ",
        ],
        image: "",
        pageFooter: "",
        isImage: false
    },
    {
        pageHeader: "The Galaxy",
        paragraphs: [
            "This being said, this new species was more intelligent, faster, stronger. Their growth depended on the work they did in order to enhance their own selves. This allowed  them to progress at their own pace. This allowed for the strong ones to become the strongest ones, and the weak ones to stay weak.  This enabled artists to achieve their full potential, singers to reach their highest notes, engineers to come up with the best innovations, and so on. ",
            "While humans in the Milky Wilky grew with time, in this new era of life the species grew with purpose. ",
            "One of the most magnificent aspects of humanity was their diversity, and this never changed. This new species bloomed in every sense; the difference relies on how they managed to find their impetus and achieve their higher self. ",
            "In consequence, getting there, getting to their higher self was something they all aim for. Lactomeda started to become a place rich in determination. This in every sense. There was no line between life in the galaxy and life on planets. They were one. Just like humanoids, they were all one, a community, the biggest community ever existed. "
        ]

    },
    {
        pageHeader: "The Galaxy",
        paragraphs: [
            "Humanoids could travel from out and down, freely, without limitations. The community found comfort in each other. Some were able to fly, others to breathe underwater, blend with fire, read minds; and everything in a positive manner. Their attributes depended on the way they decided to evolve, and the evolution depended on the way they decided to see the world from the beginning. ",
            "This being said, they all had in common that impetus for growth. It was in the ADN. ",
            "And this desire of achieving their Higher self is what made Lactomeda what it became. Nature was the greenest one ever seen. Purple and blue were two colors that defined the galaxy and the humanoids. They all had a touch of it and it is no coincidence. ",
            "The purple reflects wisdom, magic, creativity, imagination; the blue intelligence, calmness, safety, power. Not only did humanoids had them, the planets too, the animals too, the mountain, seas, and landscapes too. It was magnificent, it is magnificent. It just shows what one moment can do. "
        ]

    }
]

export default function OriginsOfYou() {
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
            <div className="flex items-center overflow-hidden justify-around h-full bg-white py-12">
                <div id='book-filp' className="flip-book relative w-full">
                    <div className="page page-cover page-cover-top" data-density="hard">
                        <div className="page-content">
                            <h2>Origins Of You</h2>
                        </div>
                        
                    </div>

                    {pages.map((page,index) => {
                        return (
                            <div className="page">
                                <div className="page-content">
                                <h2 className="page-header">{page.pageHeader}</h2>
                                {page.isImage ? 
                                    <img className="page-image" src={page.image} alt="bg image" />  
                                              : 
                                    page.paragraphs.map(((paragraph,index) => {
                                        return (
                                            <>
                                            <p className="page-text" key={index}>
                                                {paragraph}
                                            </p>
                                            <br/>
                                            </>
                                        )
                                    }))}
                                <div className="page-footer">{index + 1}</div>
                                </div>
                           </div>)
                    })}

                    <div className="page page-cover page-cover-bottom" data-density="hard">
                        <div className="page-content">
                            <h2>THE END</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}