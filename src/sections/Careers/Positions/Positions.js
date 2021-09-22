import React from 'react';
import { Grid } from "@material-ui/core";
import { Card, Col, Row, Container } from "react-bootstrap";
import bg_img_e from "./../../../assets/images/agsbackgrounds/agscareer.jpg";
import { Hidden } from "@material-ui/core";

const Positions = () => {
    return (
        <>
            <div className="Position">
                <h3 className={"Title"}>
                    OPEN POSITIONS
                </h3>
                <Hidden smDown>
                    <div
                        className="PositionDiv"
                        style={{ backgroundImage: `url(${bg_img_e})` }}
                    >
                        <div className="description-column d-flex justify-content-center align-items-center">
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
                                                        <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-center align-items-center">
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
                                                    <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-center align-items-center">
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
                                                    <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-center align-items-center">
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
                </Hidden>
                <Hidden mdUp>
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
                </Hidden>
            </div>
        </>
    );
};

export default Positions;