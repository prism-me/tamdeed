import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tn1 from "../../../assets/images/solutionservice/tn1.png"

export default function TelecomNetworking() {

    return (
        <div className={"telecom-networking"}>
            <Container>
                <h3 className={"subtitle"}>
                    Telecom Networking
                </h3>
                <p className={"Title"}>
                    Designing value in innovative Telecom & Enterprise Communications Solutions and Services
                </p>
                <Row>
                    <Col sm={5}>
                        <img src={tn1} alt="solution" className={"iconImg img-fluid"} />
                    </Col>
                    <Col sm={7}>
                        <p className="cardsubtitle">
                            Providing end to end Networking Infastructure and services covering Telecom, Edge to Cloud.
                        </p>
                        <ul className="cardsubtitle">
                            <li>Core Network</li>
                            <li>Fixed networks</li>
                            <li>Edge Networks & IoT</li>
                            <li>Optical Networks</li>
                            <li>Cloud Networks</li>
                            <li>Wireless Networks</li>
                            <li>DWDM/OTN/GPON</li>
                            <li>Collaboration</li>
                            <li>Telecom IP Networks</li>
                            <li>Aggregation Network</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}