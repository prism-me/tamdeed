import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import icon1 from "../../../assets/images/icons/White/Mask Group.png"
import icon2 from "../../../assets/images/icons/White/Mask Group-1.png"
import icon3 from "../../../assets/images/icons/White/Mask Group-2.png"
import icon4 from "../../../assets/images/icons/White/Mask Group-3.png"
import icon5 from "../../../assets/images/icons/White/Mask Group-4.png"

const Industries = (props) => {

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
            title: "Energy & Utilities",
            subtitle: "Computing and Storage Infrastructure, Automation, AI, and IoT and Smart Metering Solutions for Utilities & Energy Sectors"
        },
        {
            icon: icon5,
            title: "Energy & Utilities",
            subtitle: "Computing and Storage Infrastructure, Automation, AI, and IoT and Smart Metering Solutions for Utilities & Energy Sectors"
        }
    ];
    return (
        <div className="industriesProject">
            <p className={"Title"}>
                Our projects
            </p>
            <h3 className={"subtitle"}>
                Industries
            </h3>
            <Container>
                <Row>

                    {
                        slidesData.map((slides, index) => (
                            <Col sm={4} key={index} className={"mb-4"}>
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
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div >
    )
}
export default Industries;