import React from 'react';
import {Grid} from "@material-ui/core";
import {Card, Col, Row} from "react-bootstrap";
import bg_img_e from "../../../assets/images/about/AGS_E_bg.jpg"

const AgsEthos = () => {
    return (
        <Grid container className="info-tabs justify-content-center">
            {/*<h3 className="InfoTitle">AGS` ETHOS</h3>*/}
        <Grid container className="justify-content-center ethos_bg">
            <img alt={'#'} className={"ethos_bg"} src={bg_img_e} style={{
                visibility: "hidden",
                display:"inline-block"
            }}/>
            <h3 className="InfoTitle-Ethos">AGS` ETHOS</h3>
            <Grid container sm={12} className="d-flex w-100 justify-content-center align-items-center position-absolute">
                <Card className={"cardStyle"}>
                    <Card.Body>
                        <Col>
                            <Row>
                                <Col>
                                    <Col xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                        <h2 className={"intro-title"}>
                                            OUR VISION
                                        </h2>
                                    </Col>
                                    <Col xs sm md lg>
                                        <p className={"subtitle"}>
                                            We create an environment where everyone aspires to build a peaceful world, to
                                            grow through intercultural understanding and respect, and to succeed in the 21st
                                            century.
                                        </p>
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Col xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                        <h2 className={"intro-title"}>
                                            OUR MISSION
                                        </h2>
                                    </Col>
                                    <Col xs sm md lg>
                                        <p className={"subtitle"}>
                                            To provide a safe, friendly learning environment where our learners follow an
                                            innovative evolving 21st century curriculum which promotes design thinking
                                            skills. We will focus on nurturing academic excellence through fun-engaging
                                            lessons that will encompass our values in our international-minded future
                                            leaders.
                                        </p>
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Col xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                        <h2 className={"intro-title"}>
                                            OUR MOTTO
                                        </h2>
                                    </Col>
                                    <Col xs sm md lg>
                                        <p className={"subtitle"}>
                                            Aspire, Grow, Succeed
                                        </p>
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Col xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                        <h2 className={"intro-title"}>
                                            OUR VALUES
                                        </h2>
                                    </Col>
                                    <Col xs sm md lg>
                                        <p className={"subtitle"}>
                                            Principled, Reflective, Open-Minded, Risk-takers, Caring, Balanced, Knowledgeable, Inquirers, Communicators, Thinkers.
                                        </p>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid>
        </Grid>
    );
};

export default AgsEthos;