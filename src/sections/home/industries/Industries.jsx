import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap"
import icon6 from "../../../assets/images/icons/White/Mask Group.png"
import icon1 from "../../../assets/images/icons/White/Mask Group-1.png"
import icon2 from "../../../assets/images/icons/White/Mask Group-2.png"
import icon3 from "../../../assets/images/icons/White/Mask Group-3.png"
import icon4 from "../../../assets/images/icons/White/Mask Group-4.png"
import icon5 from "../../../assets/images/icons/White/Mask Group-5.png"
import icon8 from "../../../assets/images/icons/White/Mask Group-6.png"
import icon7 from "../../../assets/images/icons/White/Mask Group-7.png"
import { API } from "../../../http/API";


const Industries = (props) => {
    const [allIndustries, setAllIndustries] = useState([]);
    useEffect(() => {
        getAllIndustries()
    },[])

    const getAllIndustries = () => {
        API.get(`/industries`, {
        }).then((response) => {
            setAllIndustries(response.data.data)
        });
    } 

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
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
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
        },
        {
            icon: icon4,
            title: "Healthcare",
            subtitle: "Technology Solutions for efficient healthcare services with innovative network and data access infrastructure, communications and mobility solutions"
        },
        {
            icon: icon5,
            title: "Education",
            subtitle: "End to End Education Sector Infrastructure with agile networks and high levels of data security"
        },
        {
            icon: icon6,
            title: "FSI and Commercial",
            subtitle: "Providing Infrastructure Technology and Services that will support the financial and commercial enterprises employees– From infrastructure access robust and secured networks to IoT and data analytics to digital automations and AI/M based solutions"
        },
        {
            icon: icon7,
            title: "Hospitality, Engineering & Construction",
            subtitle: "End to End ELV and ICT Solutions for Malls, Hospitals, Enterprise Campuses and High Rising Towers, Commercial and Residentials, Facility and Systems Infrastructure that tailored for smarter buildings and facilities driving greater productivity."
        },
        {
            icon: icon8,
            title: "Transportation",
            subtitle: " Open Transport Network Solutions, Infrastructure and Services for Smart Aviation, Airports, Metro, Rail, Roads and Ports Transportation"
        },
    ];
    return (
        <div className="industries" id={"industries"}>
            <p className={"Title"}>
                Our projects
            </p>
            <h3 className={"subtitle"}>
                Industries
            </h3>
            <Container>
                <Carousel
                    responsive={responsive}
                    dynamicHeight={false}
                    arrows={false}
                    showDots={true}
                    swipeable={true}
                    draggable={true}
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
                        allIndustries && allIndustries.map((slides, index) => (
                            <div className={"carouselmargin container-fluid"}
                                key={index}
                            >
                                <div className="card cardstyle">
                                    <div className="card-body">
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={"iconBg"}>
                                                <img src={slides.avatar} alt="" className={"iconImg"} />
                                            </span>
                                        </div>
                                        <h3 className="carouselTitle">
                                            {slides.name}
                                        </h3>
                                        <p className="carouselSubTitle">
                                            {slides.description}
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
export default Industries;