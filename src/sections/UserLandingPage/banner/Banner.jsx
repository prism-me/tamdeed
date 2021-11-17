import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Banner() {

    const slidesData = [
        {
            title: "The first social ecommerce",
            Subtitle: "platform in the world that pays",
            Subtitle2: "you to",
            Subtitle3: "SHOP!",
            button: "Register now for free!",
        },
        {
            title: "The first social ecommerce",
            Subtitle: "platform in the world that pays",
            Subtitle2: "you to",
            Subtitle3: "SHOP!",
            button: "Register now for free!",
        },
        {
            title: "The first social ecommerce",
            Subtitle: "platform in the world that pays",
            Subtitle2: "you to",
            Subtitle3: "SHOP!",
            button: "Register now for free!",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
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
                        <div className="hero-image d-flex justify-content-start align-items-start">
                            <div className="hero-text">
                                <h3 className={"bannerHeading1"}>
                                    {slides.title}
                                </h3>
                                <h3 className={"bannerHeading2"}>
                                    {slides.Subtitle}
                                </h3>
                                <h3 className={"bannerHeading2"}>
                                    {slides.Subtitle2} <span className={"shopspanstyle"}> {slides.Subtitle3} </span>
                                </h3>
                                <button className={"btn shadow bannerBtn"}>
                                    {slides.button}
                                </button>
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