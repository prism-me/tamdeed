import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ms1 from "../../../assets/images/solutionservice/ms1.png"

export default function ManagedService() {

    return (
        <div className={"managed-service"}>
            <Container>
                <h3 className={"subtitle"}>
                    Managed Services
                </h3>
                <p className={"Title"}>
                    Unleash your business potential by leveraging our expert professionals.
                </p>
                <Row>
                    <Col sm={7}>
                        <p className="cardsubtitle">
                            Tamdeed Projects' workforce possesses the necessary expertise and resources to cater in-house to all scales of Telecom and ELV/ICT projects in the UAE and across the region, Managed Services from the ground to the cloud, equipped with the tools, expertise, and delivery framework to provide business-aligned managed solutions
                        </p>
                        <ul className="cardsubtitle">
                            <li>Managed Deployment Solutions</li>
                            <li>Integration Services</li>
                            <li>Network Monitoring & Management</li>
                            <li>Managing CPE (Router, Firewall, Edge Devices)</li>
                            <li>Operation Outsourcing</li>
                            <li>Network Operation Center Services (Managed NOC)</li>
                            <li> On Site Technical Services and Staffing</li>
                            <li>Consultancy & Assessment Services</li>
                        </ul>
                    </Col>
                    <Col sm={5}>
                        <img src={ms1} alt="solution" className={"iconImg img-fluid"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}