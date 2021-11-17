import React from "react";
import brand1 from "../../../assets/images/usrtBanner/userlandingpage/brand1.png"
import brand2 from "../../../assets/images/usrtBanner/userlandingpage/brand2.png"
import brand3 from "../../../assets/images/usrtBanner/userlandingpage/brand3.png"
import brand4 from "../../../assets/images/usrtBanner/userlandingpage/brand4.png"
import brand5 from "../../../assets/images/usrtBanner/userlandingpage/brand5.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Brands() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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

    const slidesData = [
        {
            img: brand1
        },
        {
            img: brand2
        },
        {
            img: brand3
        },
        {
            img: brand4
        },
        {
            img: brand5
        },
    ];

    return (
        <div className={"brands"}>
            <h3 className={"Title"}>Our Brands</h3>
            <Carousel responsive={responsive}
                swipeable={true}
                showDots={false}
                arrows={false}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                draggable={true}
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
                    slidesData.map((slides, index) => (
                        <div>
                            <img src={slides.img} alt="brand" className={"img-fluid"} />
                        </div>
                    ))
                }

            </Carousel>
        </div>
    )
}