import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import video from "../../../assets/video/Earth Rotaion_Compress.mp4"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export default function Portfolio(props) {
    const { portfolio } = props
    
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
                            portfolio && portfolio.map((slides, index) => (
                                <Row key={index} className={"mb-3"}>
                                    <Col lg={'auto'} md={3} sm={3} className="d-flex justify-content-center align-items-center">
                                        <span className={"iconBg"}>
                                            <img src={slides.image} alt="solution" className={"iconImg"} />
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