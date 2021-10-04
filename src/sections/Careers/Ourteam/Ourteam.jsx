import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import mentor1 from "../../../assets/images/MeetMentorsThirdBatch/AyaKred.png";
import mentor2 from "../../../assets/images/MeetMentorsThirdBatch/DarrenBaxter.png";
import mentor3 from "../../../assets/images/MeetMentorsThirdBatch/EllenMiles.png";
import mentor4 from "../../../assets/images/MeetMentorsThirdBatch/MichaelaSchmidt.png";
import mentor5 from "../../../assets/images/MeetMentorsThirdBatch/OmaimaSawalha.png";
import mentor6 from "../../../assets/images/MeetMentorsThirdBatch/ParisBradfield.png";
import mentor7 from "../../../assets/images/MeetMentorsThirdBatch/RachelFarrel.png";
import mentor8 from "../../../assets/images/MeetMentorsThirdBatch/VivieneGrobler.png";
import mentor9 from "../../../assets/images/MeetMentorsThirdBatch/YasinKol.png";
import mentor10 from "../../../assets/images/MeetMentorsThirdBatch/YazanNebso.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Ourteam() {
    const slidesData = [
        {
            thumbnail: mentor1,
            title: "Aya Kred",
            Subtitle: "Support Teacher",
        },
        {
            thumbnail: mentor2,
            title: "Darren Baxter",
            Subtitle: "PYP Coordinator",
        },
        {
            thumbnail: mentor3,
            title: "Ellen Miles",
            Subtitle: "MYP English Teacher",
        },
        {
            thumbnail: mentor4,
            title: "Michaela Schmidt",
            Subtitle: "MYP English Teacher",
        },
        {
            thumbnail: mentor5,
            title: "Omaima Sawalha",
            Subtitle: "Head of Inclusion",
        },
        {
            thumbnail: mentor6,
            title: "Paris Bradfield",
            Subtitle: "Grade 5 Teacher",
        },
        {
            thumbnail: mentor7,
            title: "Rachel Farrel",
            Subtitle: "PE Teacher",
        },
        {
            thumbnail: mentor8,
            title: "Viviene Grobler",
            Subtitle: "Grade 3 Teacher",
        },
        {
            thumbnail: mentor9,
            title: "Yasin Kol",
            Subtitle: "Math Teacher",
        },
        {
            thumbnail: mentor10,
            title: "Yazan Nebso",
            Subtitle: "Substitute Teacher",
        },
    ];
    const options = {
        loop: true,
        margin: 10,
        items: 4,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        }
    };
    return (
        <div className={"Colleagues"} dir={"ltr"}>
            <h3 className={"InfoTitle"}>MEET YOUR  COLLEAGUES</h3>
            <OwlCarousel className="owl-theme" {...options}>
                {
                    slidesData.map((slides, index) => (
                        <div className={"divstyle"}>
                            <div className="imgheight"
                                style={{ backgroundImage: `url(${slides.thumbnail})` }}
                            >
                                <h5 className={"overview-heading"}>
                                    {slides.title} <br />
                                    {slides.Subtitle}
                                </h5>
                            </div>
                        </div>
                    ))
                }
            </OwlCarousel>
        </div>
    )
}
