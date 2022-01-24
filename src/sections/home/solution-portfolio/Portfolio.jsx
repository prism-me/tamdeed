import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/icons/Color/Mask Group.png"
import icon2 from "../../../assets/images/icons/Color/Mask Group-1.png"
import icon3 from "../../../assets/images/icons/Color/Mask Group-2.png"
import icon4 from "../../../assets/images/icons/Color/Mask Group-3.png"
import icon5 from "../../../assets/images/icons/Color/Mask Group-4.png"
import video from "../../../assets/video/Earth Rotaion_Compress.mp4"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export default function Portfolio() {
    const slidesData = [
        {
            icon: icon1,
            title: "Telecom infrastructure",
            subtitle: "Industry leading Telecom Infrastructure Services."
        },
        {
            icon: icon2,
            title: "Telecom Networking",
            subtitle: "Designing value in innovative Telecom & Enterprise Communications Solutions and Services."
        },
        {
            icon: icon3,
            title: "ELV Systems",
            subtitle: "Where connectivity, security and access fits in."
        },
        {
            icon: icon4,
            title: "Cyber Security ",
            subtitle: "We provide security solutions that is adaptive, context-aware, and synchronized."
        },
        {
            icon: icon5,
            title: "Data Center",
            subtitle: "Solutions for Data Center Modernization."
        }
    ];

    return (
        <>
            <div className={"mainBGDIV"}>
            </div>
            <div className={"portfolio"}>
                <div className="aboutBG">
                <video
                  id={"background-video"}
                  autoPlay="autoplay"
                  loop="loop"
                  muted
                >
                  <source src={video} type="video/mp4" />
                  {/* <source src="movie.ogg" type="video/ogg"/> */}
                </video>

                
                {/* <video id="background-video" src={video}  controls="controls" autoplay="true" loop="true" /> */}
                <div className="dataOverVideo">

                    
                    <Container>
                    <p className={"title"}> Solutions to Power Possibility</p>
                    <h3 className={"subtitle"}>
                        Sales Solution Portfolio
                    </h3>
                        {
                            slidesData.map((slides, index) => (
                                <Row key={index} className={"mb-3"}>
                                    <Col lg={'auto'} md={3} sm={3} className="d-flex justify-content-center align-items-center">
                                        <span className={"iconBg"}>
                                            <img src={slides.icon} alt="solution" className={"iconImg"} />
                                        </span>
                                    </Col>
                                    <Col lg={5} md={9} sm={9} className="portfolio-text">
                                        <h4 className="portfolioTitle">
                                            {slides.title}
                                        </h4>
                                        <p className="portfoliosubtitle">
                                            {slides.subtitle}
                                        </p>
                                    </Col>
                                </Row>
                            ))
                        }
                        <div className="d-flex justify-content-start align-items-center">
                            <LinkContainer to="/solution-service">
                                <Nav.Link className="btnStyle">
                                    See All <ChevronRightIcon />
                                </Nav.Link>
                            </LinkContainer>
                        </div>
                    </Container>
                </div>
                   
                </div>
            </div>
            <div className={"mainBottomDIV"}>
            </div>
        </>
    )
}