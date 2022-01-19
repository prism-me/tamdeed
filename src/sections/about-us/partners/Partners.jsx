import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import partner1 from "../../../assets/images/partners/partner1.png"
import partner2 from "../../../assets/images/partners/partner2.png"
import partner3 from "../../../assets/images/partners/partner3.png"
import partner4 from "../../../assets/images/partners/partner4.png"
import partner5 from "../../../assets/images/partners/partner5.png"
import partner6 from "../../../assets/images/partners/partner6.png"
import partner7 from "../../../assets/images/partners/partner7.png"
import partner8 from "../../../assets/images/partners/partner8.png"
import partner9 from "../../../assets/images/partners/partner9.png"
import partner10 from "../../../assets/images/partners/partner10.png"
import partner11 from "../../../assets/images/partners/partner11.png"
import partner12 from "../../../assets/images/partners/partner12.png"
import partner13 from "../../../assets/images/partners/partner13.png"
import partner14 from "../../../assets/images/partners/partner14.png"
import partner15 from "../../../assets/images/partners/partner15.png"
import partner16 from "../../../assets/images/partners/partner16.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Partners() {

    const [showAllPartners, setShowAllPartners] = useState(false);

    const slidesData = [
        {
            icon: partner1
        },
        {
            icon: partner2
        },
        {
            icon: partner3
        },
        {
            icon: partner4
        },
        {
            icon: partner5
        },
        {
            icon: partner6
        },
        {
            icon: partner7
        },
        {
            icon: partner8
        }
    ];

    const slidesData2 = [
        {
            icon: partner9
        },
        {
            icon: partner10
        },
        {
            icon: partner11
        },
        {
            icon: partner12
        },
        {
            icon: partner13
        },
        {
            icon: partner14
        },
        {
            icon: partner15
        },
        {
            icon: partner16
        }
    ];

    return (
        <div className={"AboutPartners"}>
            <Container>
                <Row>
                    <Col sm={2} className={"d-flex justify-content-center align-items-center"}>
                        <h3 className={"Title"}> Partners</h3>
                    </Col>
                    <Col sm>
                        <Row className={"mb-3"}>
                            {
                                slidesData.map((slides, index) => (
                                    <Col sm={3} xs={6} md={3} lg={3} className={"colmblspace partnerLogoDiv"} key={index}>
                                        <img src={slides.icon} alt="brand" className={"img-fluid mblImg partnerLogoImg"} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                {showAllPartners &&
                <Row>
                    <Col sm={2} className={"d-flex justify-content-center align-items-center"}>
                        <h3 className={"Title"}></h3>
                    </Col>
                    <Col sm>
                        <Row className={"mb-3"}>
                            {
                                slidesData2.map((slides, index) => (
                                    <Col sm={3} xs={6} md={3} lg={3} className={"colmblspace partnerLogoDiv"} key={index}>
                                        <img src={slides.icon} alt="brand" className={"img-fluid mblImg partnerLogoImg"} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                }
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btnStyle" onClick={() => setShowAllPartners(!showAllPartners)}> {showAllPartners ? "See Less" : "See All"} <ChevronRightIcon /></button>
                </div>
            </Container>
        </div>
    )
}