import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export default function AboutTamdeed() {

    return (
        <div className={"aboutTamdeed aboutBG"}>
            <div className={"aboutBG"}>
                <Container>
                    <h3 className={"Title"}>About Tamdeed Projects</h3>
                    <Row>
                        <Col sm>
                            <p className="subtitle">
                                Tamdeed Projects was established in 1996 to provide high – end turnkey solutions for all aspects of the cabling infrastructure business. Evolved over the years to offer an end to end passive and active telecom solutions with its profound expertise, reliability and professionalism to cater to a number of projects in the UAE and the region.
                            </p>
                        </Col>
                        <Col sm>
                            <p className="subtitle">
                                Today, Tamdeed business model is having two main segments covering Telecom Network Solutions and ELV/ICT Solutions, standing as a leader in the UAE for outdoor fiber network solutions and is the key player and integrator for indoor structured networks and in-building solutions.
                            </p>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-start align-items-center">
                        <LinkContainer to="/about">
                            <Nav.Link className="btnStyle">
                                Read more <ChevronRightIcon />
                            </Nav.Link>
                        </LinkContainer>
                    </div>
                </Container>
            </div>
        </div>
    )
}