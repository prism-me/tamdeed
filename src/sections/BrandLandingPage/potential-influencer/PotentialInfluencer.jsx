import React from "react";
import influencer1 from "../../../assets/images/brandimg/influencer1.png"
import influencer2 from "../../../assets/images/brandimg/influencer2.png"
import influencer3 from "../../../assets/images/brandimg/influencer3.png"
import influencer4 from "../../../assets/images/brandimg/influencer4.png"
import influencer5 from "../../../assets/images/brandimg/influencer5.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PotentialInfluencer() {
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
            img: influencer1
        },
        {
            img: influencer2
        },
        {
            img: influencer3
        },
        {
            img: influencer4
        },
        {
            img: influencer5
        },
    ];

    return (
        <div className={"potential-infuencer"}>
            <h3 className={"Title"}>Potential Influencers you could partner with</h3>
            <Carousel responsive={responsive}
                swipeable={true}
                showDots={true}
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
                            <img src={slides.img} alt="brand" className={"img-fluid imgStyle"} />
                        </div>
                    ))
                }

            </Carousel>
        </div>
    )
}