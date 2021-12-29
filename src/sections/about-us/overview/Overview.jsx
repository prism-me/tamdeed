import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import overview from "../../../assets/images/aboutImages/overview.png"

export default function Overview() {

    return (
        <div className={"overview"}>
            <Container>
                <Row>
                    <Col sm={6} className="d-flex justify-content-center align-items-center">
                        <img src={overview} alt="img" className="img-fluid" />
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
                        <p className="title">
                            Overview
                        </p>
                        <p className="subtitle">
                            Tamdeed Projects an Etisalat Services Holding Company - Part of Etisalat Group
                        </p>
                        <p className="description">
                            Tamdeed Projects was established in 1996 to provide high – end turnkey solutions for all aspects of the cabling infrastructure business. Evolved over the years to offer an end to end passive and active telecom solutions with its profound expertise, reliability and professionalism to cater to a number of projects in the UAE and the region.
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                            <button className="btnStyle">Read more <ChevronRightIcon /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}