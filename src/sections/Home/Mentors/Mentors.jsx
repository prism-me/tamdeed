import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { constants } from "../../../utils/constants"

function Mentors(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className={"Mentors"} dir="ltr">
            <h3 className={"InfoTitle"}>
                {
                    constants?.site_content?.meet_mentor[
                    props.language
                    ]
                }
                {/* MEET THE MENTORS */}
            </h3>

            <Carousel responsive={responsive}
                swipeable={false}
                draggable={true}
                showDots={false}
                arrows={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="listStyle"
            >
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
                                                    ? slides?.arabic?.description
                                                    : slides.description
                                        }}
                                    ></span>
                                </h5>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Mentors;