import React from "react";
import partner1 from "../../../assets/images/vendorimgs/partner1.png"
import partner2 from "../../../assets/images/vendorimgs/partner2.png"
import partner3 from "../../../assets/images/vendorimgs/partner3.png"
import partner4 from "../../../assets/images/vendorimgs/partner4.png"
import partner5 from "../../../assets/images/vendorimgs/partner5.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Partner() {
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

    const slidesData = [
        {
            img: partner1
        },
        {
            img: partner2
        },
        {
            img: partner3
        },
        {
            img: partner4
        },
        {
            img: partner5
        },
    ];

    return (
        <div className={"partner"}>
            <h3 className={"Title"}>Retail partners & Mall partners</h3>
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