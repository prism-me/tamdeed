import React from "react";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';


export default function SixStep() {

    return (
        <div className={"six-steps"}>
            <h3 className={"Title"}>6 Steps to get started</h3>
            <Container fluid>
                <Row>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsTextStyle"}>
                                Look for a referral link from a brand or a friend
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsTextStyle"}>
                                Register with your referral Links and Download The QLIQ App
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsTextStyle"}>
                                Choose your favourite brands that you want to follow
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsTextStyle"}>
                                Start Inviting friends and Family into your QLIQ
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsTextStyle"}>
                                Start Earning Referral Commission ( QASH )  from the People and Brands You already Love
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center"}>
                            <div className={"circleStyle"}>

                            </div>
                            <p className={"stepsTextStyle"}>
                                Unlock your Wallet and start buying all your favourite brands at discounted prices
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}