import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import {Card, Col, Row} from "react-bootstrap";
import bg_img_e from "../../../assets/images/academics/BG.png";
import CalendarView from "../CalendarView/CalenderView";

const defaultState = {
    modalShow: false
}

const AgsEthos = () => {

    const [init, setInit] = useState(defaultState);
    let {modalShow} = init;

    return (
        <Grid container className="info-tabs justify-content-center accreditation-paths">
            <Grid className="v-calendar-sec">
                <Grid className="txt-w">
                    <h2 className={"CalenderTitle"}>View our Academic Calendar to learn about the schedule in advance</h2>
                </Grid>
                <Grid className="btn-w">
                    <div className="d-flex w-100">
                        <button className="view-c-btn" onClick={() => setInit({
                            ...init,
                            modalShow: true
                        })}>View Calender
                        </button>
                    </div>
                    <CalendarView show={modalShow} onHide={() => setInit({
                        ...init,
                        modalShow: false
                    })}/>
                </Grid>
            </Grid>
            <div className="d-flex w-100 justify-content-center small-calendar-view">
                <button className="view-c-btn" onClick={() => setInit({
                    ...init,
                    modalShow: true
                })}>View Calender
                </button>
            </div>
            <div className="ac-main">
                <div className="ac-bg">
                    <img alt={'#'} className={"ac-bg"} src={bg_img_e} style={{
                        visibility: "hidden",
                        display: "inline-block"
                    }}/>
                    <h3 className="InfoTitle-Ethos">ACCREDITATIONS</h3>
                    <Grid container sm={12}
                          className="d-flex w-100 justify-content-center align-items-center position-absolute">
                        <Card className={"cardStyle"}>
                            <Card.Body >
                                <Col>
                                    <Row>
                                        <Col>
                                            <Col xs sm md lg>
                                                <p className={"subtitle"}>
                                                    <strong>American Gulf School</strong> is a candidate school for
                                                    the <strong>International
                                                    Baccalaureate (IB) Primary Years Programme </strong> and <strong> Middle
                                                    Years Programme </strong>and pursuing <strong>authorization</strong> as
                                                    an <strong>IB World School.</strong>
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
                </div>
            </div>
            <Grid className="sm-ac-cont">
                <h3 className={"InfoTitle"}>ACCREDITATIONS</h3>
                <Grid container className="sm-ac-body">
                    <Grid item className="b-para">
                        <p><strong>American Gulf School</strong> is a candidate school for the <strong>International
                            Baccalaureate (IB) Primary Years Programme </strong> and <strong> Middle Years
                            Programme </strong>and pursuing <strong>authorization</strong> as an <strong>IB World
                            School.</strong></p>
                        <p>IB World Schools share
                            a common philosophy—a commitment to improve the teaching and learning of
                            a diverse and inclusive community of students by delivering challenging,
                            high quality programmes of international education that share a powerful
                            vision.
                        </p>
                        <p>American Gulf School also applied for Cognia accreditation for
                            American Curriculum Schools.</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AgsEthos;