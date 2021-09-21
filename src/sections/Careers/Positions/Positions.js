import React from 'react';
import { Grid } from "@material-ui/core";
import { Card, Col, Row } from "react-bootstrap";
import bg_img_e from "./../../../assets/images/agsbackgrounds/AGSCareersPhoto.jpg";

const Positions = () => {
    return (
        <Grid container className="info-tabs justify-content-center accreditation-paths position-main">
            <div className="ac-main school-main">
                <div className="ac-bg">
                    <img alt={'#'} className={"ac-bg"} src={bg_img_e} style={{
                        visibility: "hidden",
                        display: "inline-block"
                    }} />
                    <h3 className="Position-Title">OPEN POSITIONS</h3>
                    <Grid container sm={12}
                        className="d-flex w-100 justify-content-center align-items-center position-absolute">
                        <Row className="d-flex w-100 justify-content-center align-items-center">
                            <Col xs={4} sm={4} md={4} lg={4}>
                                <div>
                                    <Card className={"cardStyle"}>
                                        <Card.Body >
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p className={"subtitle"}>
                                                        Reading Specialist
                                                    </p>
                                                </Col>
                                                <br />
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <button class="schoolbtn btn-lg">APPLY NOW</button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4}>
                                <Card className={"cardStyle"}>
                                    <Card.Body >
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className={"subtitle"}>
                                                    Academic Counselor
                                                </p>
                                            </Col>
                                            <br />
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <button class="schoolbtn btn-lg">APPLY NOW</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4}>
                                <Card className={"cardStyle"}>
                                    <Card.Body >
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className={"subtitle"}>
                                                    Social Worker
                                                </p>
                                            </Col>
                                            <br />
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <button class="schoolbtn btn-lg">APPLY NOW</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            <Grid className="sm-ac-cont">
                <h3 className={"InfoTitle"}>OPEN POSITIONS</h3>
                <Grid container className="sm-ac-body">
                    <Grid container sm={12}
                        className="">
                        <Row className="d-flex w-100 justify-content-center align-items-center m-row">
                            <Col xs={12} >
                                <div>
                                    <Card className={"cardStyle"}>
                                        <Card.Body >
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p className={"subtitle"}>
                                                        Reading Specialist
                                                    </p>
                                                </Col>
                                                <br />
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <button class="schoolbtn btn-lg">APPLY NOW</button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Card className={"cardStyle"}>
                                    <Card.Body >
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className={"subtitle"}>
                                                    Academic Counselor
                                                </p>
                                            </Col>
                                            <br />
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <button class="schoolbtn btn-lg">APPLY NOW</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Card className={"cardStyle"}>
                                    <Card.Body >
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className={"subtitle"}>
                                                    Social Worker
                                                </p>
                                            </Col>
                                            <br />
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <button class="schoolbtn btn-lg">APPLY NOW</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Positions;