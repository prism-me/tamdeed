import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { constants } from "../../../utils/constants"

export default function PrincipalSlider(props) {
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
            <h3 className={"InfoTitle"}>
                {
                    constants?.site_content?.meet_mentor[
                    props.language
                    ]
                }
                {/* MEET THE MENTORS */}
            </h3>
            <OwlCarousel className="owl-theme" {...options}>
                {
                    props.mentors.map((slides, index) => (
                        <div className={"divstyle"}>
                            <div className="imgheight"
                                style={{ backgroundImage: `url(${slides.avatar})` }}
                            >
                                <h5 className={"overview-heading"}>
                                    {/* {slides.name} */}
                                    {
                                        props.isArabic
                                            ? slides?.arabic?.name
                                            : slides.name
                                    }
                                    <br />
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                props.isArabic
                                                    ? slides.description
                                                    : slides.description
                                        }}
                                    ></span>
                                </h5>
                            </div>
                        </div>
                    ))
                }
            </OwlCarousel>
        </div>
    )
}
