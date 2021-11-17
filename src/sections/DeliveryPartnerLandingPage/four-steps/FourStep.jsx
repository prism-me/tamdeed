import React from "react";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';


export default function FourStep() {

    return (
        <div className={"four-steps"}>
            <h3 className={"Title"}>Join with 4 easy steps</h3>
            <Container fluid>
                <Row>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsheadingStyle"}>
                                STEP 1
                            </p>
                            <p className={"stepsTextStyle"}>
                                Download food delivery app
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsheadingStyle"}>
                                STEP 2
                            </p>
                            <p className={"stepsTextStyle"}>
                                Complete online training
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsheadingStyle"}>
                                STEP 3
                            </p>
                            <p className={"stepsTextStyle"}>
                                Start delivering & start earning
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsheadingStyle"}>
                                STEP 4
                            </p>
                            <p className={"stepsTextStyle"}>
                                Earn through referrals
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}