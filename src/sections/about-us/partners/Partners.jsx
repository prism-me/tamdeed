import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import partner1 from "../../../assets/images/partners/partner1.png"
import partner2 from "../../../assets/images/partners/partner2.png"
import partner3 from "../../../assets/images/partners/partner3.png"
import partner4 from "../../../assets/images/partners/partner4.png"
import partner5 from "../../../assets/images/partners/partner5.png"
import partner6 from "../../../assets/images/partners/partner6.png"
import partner7 from "../../../assets/images/partners/partner7.png"
import partner8 from "../../../assets/images/partners/partner8.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Partners() {

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
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btnStyle">See All <ChevronRightIcon /></button>
                </div>
            </Container>
        </div>
    )
}