import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap"
import icon1 from "../../../assets/images/icons/White/Mask Group.png"
import icon2 from "../../../assets/images/icons/White/Mask Group-1.png"
import icon3 from "../../../assets/images/icons/White/Mask Group-2.png"
// import icon4 from "../../../assets/images/icons/White/Mask Group-3.png"
// import icon5 from "../../../assets/images/icons/White/Mask Group-4.png"

const TestimonialSlider = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
            icon: icon1,
            title: "Government & Semi-Government",
            subtitle: "Enterprise ELV & ICT Technology Solutions for Education, Turnkey Systems Integrations and Managed Services"
        },
        {
            icon: icon2,
            title: "Service Providers",
            subtitle: "Telecom Turnkey Infrastructure and Services, Enterprise ELV & ICT Technology Solutions for Service Providers"
        },
        {
            icon: icon3,
            title: "Energy & Utilities",
            subtitle: "Computing and Storage Infrastructure, Automation, AI, and IoT and Smart Metering Solutions for Utilities & Energy Sectors"
        }
    ];
    return (
        <div className="industries">
            <h3 className={"Title"}>
                Our projects
            </h3>
            <p className={"subtitle"}>
                Industries
            </p>
            <Container>
                <Carousel
                    responsive={responsive}
                    dynamicHeight={false}
                    arrows={false}
                    showDots={true}
                    swipeable={false}
                    draggable={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={700}
                    containerClass="carousel-container"
                >
                    {
                        slidesData.map((slides, index) => (
                            <div className={"carouselmargin container-fluid"}
                                key={index}
                            >
                                <div className="card cardstyle">
                                    <div className="card-body">
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={"iconBg"}>
                                                <img src={slides.icon} alt="solution" className={"iconImg"} />
                                            </span>
                                        </div>
                                        <h3 className="carouselTitle">
                                            {slides.title}
                                        </h3>
                                        <p className="carouselSubTitle">
                                            {slides.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </Container>
        </div >
    )
}
export default TestimonialSlider;