import React, { useState } from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/Mask.jpg";
import {Hidden} from "@material-ui/core";

function Curriculum(props) {
    return (
        <div  className="Curriculum-page">
            <h3 className={"Title"}>CURRICULUM COURSE AND SYLLABUS</h3>
            <Hidden smDown>
                <div
                    className="Curriculum"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    <div className="op-div">
                    </div>
                    <div className="wavy-div">
                    </div>
                    <div className="description-column">
                        <Container>
                            <Card className={"cardStyle"}>
                                <Card.Body>
                                    <Row>
                                        <Col xs={12} sm={3} md={12} lg={3} className={"d-flex justify-content-center align-items-center"}>
                                            <h2 className={" intro-title"}>
                                                OUR <br/> CURRICULUM
                                            </h2>
                                        </Col>
                                        <Col xs sm md lg>
                                            <p className={"subtitle"}>
                                                The school curriculum is project-based, and student centered. It
                                                encourages,
                                                requires, and builds critical thinking, driven by
                                                inquiry combined with both
                                                knowledge and comprehensive skills.
                                                This allows learners to make authentic
                                                connections between
                                                different theories and be able to apply this knowledge
                                                in
                                                unfamiliar real-life situations. The use of our STREAM, Media,
                                                Fabrication
                                                and Design Labs, gives our learners the practice and
                                                experience to apply their
                                                knowledge and skills they are being
                                                taught to succeed within the 21st century.
                                            </p>
                                            <button className={"viewButton"}>View in detail ></button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <Container>
                    <Card className={"cardStyleMBL"}>
                        <Card.Body>
                            <Row>
                                <Col xs={12} sm={3} md={12} lg={3} className={"d-flex justify-content-center align-items-center"}>
                                    <h2 className={" intro-title"}>
                                        OUR <br/> CURRICULUM
                                    </h2>
                                </Col>
                                <Col xs sm md lg>
                                    <p className={"subtitle"}>
                                        The school curriculum is project-based, and student centered. It
                                        encourages,
                                        requires, and builds critical thinking, driven by
                                        inquiry combined with both
                                        knowledge and comprehensive skills.
                                        This allows learners to make authentic
                                        connections between
                                        different theories and be able to apply this knowledge
                                        in
                                        unfamiliar real-life situations. The use of our STREAM, Media,
                                        Fabrication
                                        and Design Labs, gives our learners the practice and
                                        experience to apply their
                                        knowledge and skills they are being
                                        taught to succeed within the 21st century.
                                    </p>
                                    <button className={"viewButton"}>View in detail ></button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>
        </div>
    );
}

export default Curriculum;
