import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import homeBanner from "../../../assets//images/banners/homebanner.jpg"
import { Hidden } from "@material-ui/core"

export default function Banner() {

    const slidesData = [
        {
            title: "Tamdeed Projects",
            subtitle: "Making communication happen."
        },
        {
            title: "Tamdeed Projects",
            subtitle: "Making communication happen."
        },
        {
            title: "Tamdeed Projects",
            subtitle: "Making communication happen."
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={"homeBanner"}>
            <Carousel
                autoPlay={true}
                dynamicHeight={false}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                stopOnHover={false}
                centerSlidePercentage={70}
                selectedItem={currentIndex}
                onChange={(index) => setCurrentIndex(index)}
                className="video-carousel center"
                interval={6000}
            >
                {
                    slidesData.map((slides, index) => (
                        <div className="hero-image"
                            style={{ backgroundImage: `url(${homeBanner})`, }}
                            key={index}
                        >
                            <Hidden smDown>
                                <div className="d-flex justify-content-end align-items-center">
                                    <button className="bannerBtn">Enquiries</button>
                                </div>
                            </Hidden>
                            <div className="hero-text">
                                <h1 className={"banner-title"}>
                                    {slides.title}
                                </h1>
                                <hr className="hrStyle" />
                                <p className={"banner-subtitle"}>
                                    {slides.subtitle}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="dots-section d-flex justify-content-center align-items-center">
                    {
                        slidesData.map((x, index) => (
                            <span key={index} onClick={() => setCurrentIndex(index)} className={`circle ${currentIndex === index ? 'active' : ''}`}> </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}