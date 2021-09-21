import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import mentor1 from "../../../assets/images/MeetMentorsFirstbatch/AliObeidat.png";
import mentor2 from "../../../assets/images/MeetMentorsFirstbatch/BrittanyWood.png";
import mentor3 from "../../../assets/images/MeetMentorsFirstbatch/DinaTahabsen.png";
import mentor4 from "../../../assets/images/MeetMentorsFirstbatch/EdricPascoe.png";
import mentor5 from "../../../assets/images/MeetMentorsFirstbatch/EmmaPascoe.png";
import mentor6 from "../../../assets/images/MeetMentorsFirstbatch/JordanBrooks.png";
import mentor7 from "../../../assets/images/MeetMentorsFirstbatch/KirstyHoward.png";
import mentor8 from "../../../assets/images/MeetMentorsFirstbatch/ManarAbouHamdan.png";
import mentor9 from "../../../assets/images/MeetMentorsFirstbatch/SalmaHafez.png";
import mentor10 from "../../../assets/images/MeetMentorsFirstbatch/TaleenAkijian.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { withNamespaces } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function Mentors(props) {
    {
        console.log("MentorsData", props.mentors)
    }
    const { t } = useTranslation();
    const slidesData = [
        {
            thumbnail: mentor1,
            title: "Ali Obeidat",
            Subtitle: "Adipiscing at sem",
        },
        {
            thumbnail: mentor2,
            title: "Brittany Wood",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor3,
            title: "Dina Tahabsen",
            Subtitle: "Dapibus tellus eros",
        },
        {
            thumbnail: mentor4,
            title: "Edric Pascoe",
            Subtitle: "Aliquet nec nunc",
        },
        {
            thumbnail: mentor5,
            title: "Emma Pascoe",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor6,
            title: "Jordan Brooks",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor7,
            title: "Kirsty Howard",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor8,
            title: "Manar Abou Hamdan",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor9,
            title: "Salma Hafez",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor10,
            title: "Taleen Akijian",
            Subtitle: "Nunc eu massa",
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
        <div className={"Mentors"} dir="ltr">
            <h3 className={"InfoTitle"}>
                {t('MentorsTitle')}
                {/* MEET THE MENTORS */}
            </h3>
            <OwlCarousel className="owl-theme" {...options}>
                {
                    slidesData.map((slides, index) => (
                        <div className={"divstyle"}>
                            <div className="imgheight"
                                style={{ backgroundImage: `url(${slides.thumbnail})` }}
                            >
                                <h5 className={"overview-heading"}>
                                    {slides.title}<br />
                                    {slides.Subtitle}
                                </h5>
                                {/* <p className={"subTitle"}>
                                    {slides.Subtitle}
                                </p> */}
                            </div>
                        </div>
                    ))
                }
            </OwlCarousel>
        </div>
    )
}

export default Mentors;