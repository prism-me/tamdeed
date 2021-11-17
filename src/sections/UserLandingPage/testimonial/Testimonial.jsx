import React, { useState } from "react";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';
import testimonial1 from "../../../assets/images/usrtBanner/userlandingpage/testimonial1.png"
import testimonial2 from "../../../assets/images/usrtBanner/userlandingpage/testimonial2.png"

export default function Testimonial() {

    return (
        <div className={"testimonial"}>
            <h3 className={"InfoTitle"}>Real customers’ real experiences</h3>
            <Container fluid={true}>
                <Row>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center testimonialDiv "}>
                            <img src={testimonial1} alt="brand1" className={"img-fluid"} />
                            <p className={"title"}>
                                Customer 1
                            </p>
                            <p className={"subtitle"}>
                                In malesuada volutpat sodales eget. Cras semper massa
                            </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className={"d-flex flex-column justify-content-center align-items-center testimonialDiv "}>
                            <img src={testimonial2} alt="brand1" className={"img-fluid"} />
                            <p className={"title"}>
                                Customer 2
                            </p>
                            <p className={"subtitle"}>
                                In malesuada volutpat sodales eget. Cras semper massa
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <center>
                <button className={"btn productBtn"}>
                    View all Success Stories
                </button>
            </center>
        </div>
    )
}