import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/icons/White/Mask Group.png"
import icon2 from "../../../assets/images/icons/White/Mask Group-1.png"

export default function Values() {

    return (
        <div className={"values"}>
            <h3 className={"Title"}>Core values</h3>
            <p className={"subtitle"}>
                Our Business Values
            </p>
            <div className="aboutBG">
                <Container>
                    <Row>
                        <Col sm>
                            <Row>
                                <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                    <span className={"iconBg"}>
                                        <img src={icon1} alt="solution" className={"iconImg"} />
                                    </span>
                                </Col>
                                <Col sm>
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
                                <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                    <span className={"iconBg"}>
                                        <img src={icon2} alt="solution" className={"iconImg"} />
                                    </span>
                                </Col>
                                <Col sm>
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