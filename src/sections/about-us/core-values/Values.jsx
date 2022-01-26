import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/icons/White/Mask Group.png"
import icon2 from "../../../assets/images/icons/White/Mask Group-1.png"

export default function Values() {

    return (
        <div className={"values"}>
            <p className={"Title"}>Core values</p>
            <h3 className={"subtitle"}>
                Our Business Values
            </h3>
            <div className="aboutBG">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={3} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                                    <span className={"iconBg"}>
                                        <img src={icon1} alt="solution" className={"iconImg"} />
                                    </span>
                                </Col>
                                <Col lg={9} md={12} sm={12}>
                                    <h4 className="valueTitle">
                                        Our Vision
                                    </h4>
                                    <p className="valuesubtitle">
                                        To be the preferred strategic partner in value driven communications networks.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm>
                            <Row>
                                <Col lg={3} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                                    <span className={"iconBg"}>
                                        <img src={icon2} alt="solution" className={"iconImg"} />
                                    </span>
                                </Col>
                                <Col lg={9} md={12} sm={12}>
                                    <h4 className="valueTitle">
                                        Our Mission
                                    </h4>
                                    <p className="valuesubtitle">
                                        Enhance customers’ experience by offering professional, competitive and innovative technology solutions and services; backed up by outstanding talents.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}