import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import mentor from "../../../assets/images/agsMentors/mentor.png";
import mentor4 from "../../../assets/images/agsMentors/mentor2.png";
import mentor2 from "../../../assets/images/agsMentors/mentor3.png";
import mentor3 from "../../../assets/images/agsMentors/mentor4.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { withNamespaces } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function Mentors() {
    const { t } = useTranslation();
    const slidesData = [
        {
            thumbnail: mentor,
            title: "Aliquam fringilla",
            Subtitle: "Adipiscing at sem",
        },
        {
            thumbnail: mentor2,
            title: "Commodo aliquam",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor3,
            title: "Neque eu",
            Subtitle: "Dapibus tellus eros",
        },
        {
            thumbnail: mentor4,
            title: "Commodo male",
            Subtitle: "Aliquet nec nunc",
        },
        {
            thumbnail: mentor2,
            title: "Mi amet",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor3,
            title: "Commodo aliquam",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor2,
            title: "Mi amet",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor3,
            title: "Commodo aliquam",
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
        <div className={"Mentors"}>
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
                                    {slides.title}
                                </h5>
                                <p className={"subTitle"}>
                                    {slides.Subtitle}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </OwlCarousel>
        </div>
    )
}

export default Mentors;