import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import mentor1 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image1.png";
import mentor2 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image2.png";
import mentor3 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image3.png";
import mentor4 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image4.png";
import mentor5 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image5.png";
import mentor6 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image6.png";
import mentor7 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image7.png";
import mentor8 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image8.png";
import mentor9 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image9.png";
import mentor10 from "../../../assets/images/Meetthementors_ Second Batch/Second Batch _ 320x400/Image10.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function PrincipalSlider() {
    const slidesData = [
        {
            thumbnail: mentor1,
            title: "Sarah Qadir",
            Subtitle: "Adipiscing at sem",
        },
        {
            thumbnail: mentor2,
            title: "Samia Yassin",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor3,
            title: "Ross Moore",
            Subtitle: "Dapibus tellus eros",
        },
        {
            thumbnail: mentor4,
            title: "Rasha Abou Zaki",
            Subtitle: "Aliquet nec nunc",
        },
        {
            thumbnail: mentor5,
            title: "Michael Skillern",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor6,
            title: "Melissa Davis",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor7,
            title: "Leona Dowling",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor8,
            title: "Huda Omary",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor9,
            title: "Haneen Almushasha",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor10,
            title: "Connor Stanton",
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
        <div className={"PrincipalSlider"} dir="ltr">
            <h3 className={"InfoTitle"}>MEET THE MENTORS</h3>
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
