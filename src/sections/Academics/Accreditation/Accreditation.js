import React from 'react';
import {Grid} from "@material-ui/core";
import {Card, Col, Row} from "react-bootstrap";
import bg_img_e from "../../../assets/images/about/AGS_E_bg.jpg"

const AgsEthos = () => {
    return (
        <Grid container className="info-tabs justify-content-center accreditation-paths">
            <Grid className="v-calendar-sec">
                <Grid className="txt-w">
                    <p>View our Academic Calendar to learn about the schedule in advance</p>
                </Grid>
                <Grid className="btn-w">
                    <div className="d-flex w-100">
                        <button className="view-c-btn">View Calender</button>
                    </div>
                </Grid>
            </Grid>
            <Grid container className="justify-content-center ethos_bg">
                <img alt={'#'} className={"ethos_bg"} src={bg_img_e} style={{
                    visibility: "hidden",
                    display: "inline-block"
                }}/>
                <h3 className="InfoTitle-Ethos">ACCREDITATIONS</h3>
                <Grid container sm={12}
                      className="d-flex w-100 justify-content-center align-items-center position-absolute">
                    <Card className={"cardStyle"}>
                        <Card.Body>
                            <Col>
                                <Row>
                                    <Col>
                                        <Col xs sm md lg>
                                            <p className={"subtitle"}>
                                                American Gulf School is a candidate school for the International
                                                Baccalaureate (IB) Primary Years Programme and Middle Years Programme
                                                and pursuing authorization as an IB World School.
                                            </p>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Col xs sm md lg>
                                            <p className={"subtitle"}>
                                                IB World Schools share
                                                a common philosophy—a commitment to improve the teaching and learning of
                                                a diverse and inclusive community of students by delivering challenging,
                                                high quality programmes of international education that share a powerful
                                                vision.
                                            </p>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Col xs sm md lg>
                                            <p className={"subtitle"}>
                                                American Gulf School also applied for Cognia accreditation for
                                                American Curriculum Schools.
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