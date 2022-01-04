import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/solutionservice/tamdeed-service/ts1.png"
import icon2 from "../../../assets/images/solutionservice/tamdeed-service/ts2.png"
import icon3 from "../../../assets/images/solutionservice/tamdeed-service/ts3.png"
import icon4 from "../../../assets/images/solutionservice/tamdeed-service/ts4.png"
import icon5 from "../../../assets/images/solutionservice/tamdeed-service/ts5.png"
import icon6 from "../../../assets/images/solutionservice/tamdeed-service/ts6.png"
import icon7 from "../../../assets/images/solutionservice/tamdeed-service/ts7.png"

export default function TamdeedService() {
    const slidesData = [
        {
            icon: icon1,
            title: "Deployment Services"
        },
        {
            icon: icon2,
            title: "Integration Services"
        },
        {
            icon: icon3,
            title: "On Site Technical Services and Staffing"
        },
        {
            icon: icon4,
            title: "Managed NOC"
        },
        {
            icon: icon5,
            title: "Managed ICT Operation"
        },
        {
            icon: icon6,
            title: "Managed Telecom Services"
        },
        {
            icon: icon7,
            title: "Engineering & Consultancy Services"
        }

    ];

    return (
        <div className={"tamdeed-service"}>
            <Container>
                <p className={"Title"}>
                    Solutions to Power Possibility
                </p>
                <h3 className={"subtitle"}>
                    Tamdeed Services
                </h3>
                <Row>
                    {
                        slidesData.map((slides, index) => (
                            <Col sm={4} key={index} className={"mb-3"}>
                                <Row>
                                    <Col sm={12} className="d-flex justify-content-center align-items-center" >
                                        <img src={slides.icon} alt="solution" className={"iconImg img-fluid"} />
                                    </Col>
                                    <Col sm={12}>
                                        <h3 className="cardsubtitle">
                                            {slides.title}
                                        </h3>
                                    </Col>
                                </Row>
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}