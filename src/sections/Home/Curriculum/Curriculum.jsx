import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/curriculumcourse.jpg";
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants"
import { HashLink } from "react-router-hash-link";

function Curriculum(props) {
    return (
        <div className="Curriculum-page">
            <h3 className={"Title"}>
                {props.Curriculum?.title}
                {/* CURRICULUM COURSE AND SYLLABUS */}
            </h3>
            <Hidden smDown>
                <div
                    className="Curriculum"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    <div className="description-column">
                        <Container>
                            <Card className={"cardStyle"}>
                                <Card.Body>
                                    <Row>
                                        <Col xs={12} sm={3} md={12} lg={3} className={"d-flex justify-content-center align-items-center"}>
                                            <h4 className={" intro-title"}>
                                                {

                                                    props.Curriculum?.subtitle.split(" ")[0]
                                                }
                                                <br />
                                                {

                                                    props.Curriculum?.subtitle.split(" ")[1]
                                                }
                                                {/* OUR
                                                <br />
                                                CURRICULUM */}
                                            </h4>
                                        </Col>
                                        <Col xs sm md lg>
                                            <p className={"subtitle"}
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        props.Curriculum?.description,
                                                }}
                                            >
                                                {/* The school curriculum is project-based, and student centered. It
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
                                                taught to succeed within the 21st century. */}
                                            </p>
                                            <HashLink to={`/${props.language}/academics` + "#Our_Curriculum"} className={"hashLinkStyling"}>
                                                <button className={"viewButton"}>
                                                    {
                                                        constants?.site_content?.read_more[
                                                        props.language
                                                        ]
                                                    }
                                                </button>
                                            </HashLink>
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
                                    <h4 className={" intro-title"}>
                                        {props.Curriculum?.subtitle}
                                        {/* OUR
                                        <br />
                                        CURRICULUM */}
                                    </h4>
                                </Col>
                                <Col xs sm md lg>
                                    <p className={"subtitle"}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                props.Curriculum?.description,
                                        }}
                                    >
                                        {/* The school curriculum is project-based, and student centered. It
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
                                        taught to succeed within the 21st century. */}
                                    </p>
                                    <HashLink to={`/${props.language}/academics` + "#Our_Curriculum"} className={"hashLinkStyling"}>
                                        <button className={"viewButton"}>
                                            {
                                                constants?.site_content?.read_more[
                                                props.language
                                                ]
                                            }
                                        </button>
                                    </HashLink>
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
