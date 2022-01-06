import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import img1 from "../../../assets/images/mediaImages/latest-updates/lup1.png"
import img2 from "../../../assets/images/mediaImages/latest-updates/lup2.png"
import img3 from "../../../assets/images/mediaImages/latest-updates/lup3.png"
import img4 from "../../../assets/images/mediaImages/latest-updates/lup4.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Pagination from '@material-ui/lab/Pagination';


export default function LatestUpdates() {
    const slidesData = [
        {
            icon: img1,
            title: "Today, 2021",
            subtitle: "Tamdeed Projects an Etisalat Services Holding company and Huawei, have announced a strategic partnership on the development of cloud-managed network services."
        },
        {
            icon: img2,
            title: "Today, 2021",
            subtitle: "Tamdeed Projects, an Etisalat Services Holding company – part of Etisalat Group and Xerox has signed an MOU during Gitex Global 2021 for Partnership in Workplace Solutions and Managed Services."
        },
        {
            icon: img3,
            title: "Today, 2021",
            subtitle: "Tareq Salman, General Manager at Tamdeed Projects / Etisalat and our very own Sean Collins signing the MoU agreement for wired and wireless LAN access infrastructure and cloud managed networking partnership at GITEX Technology Week this morning!"
        }
    ];

    return (
        <div className={"latestUpdates"}>
            <Container>
                <h3 className={"title"}>
                    Latest Updates
                </h3>
                <Row>
                    <Col sm={7}>
                        {
                            slidesData.map((slides, index) => (
                                <Row key={index} className={"mb-3 bg-color"}>
                                    <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                        <img src={slides.icon} alt="solution" className={"iconImg img-fluid"} />
                                    </Col>
                                    <Col sm>
                                        <p className="latestUpdateTitle">
                                            {slides.title}
                                        </p>
                                        <p className="subtitle">
                                            {slides.subtitle}
                                        </p>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                    <Col sm>
                        <Card className={"border-0"}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body className={"bg-color2"}>
                                <p className="latestUpdateTitle">
                                    Today, 2021
                                </p>
                                <p className="subtitle">
                                    Tamdeed Projects, an Etisalat Services Holding company – part of Etisalat Group and StarLink - Trusted Cyber & Cloud Advisor, have entered a strategic alliance to collaborate in the Intelligent Automation, Cyber, Cloud and Degital Edge domains by signing an MoU at GITEX Global 2021
                                </p>
                                <div className="d-flex justify-content-start align-items-center">
                                    <button className="btnStyle">Read More<ChevronRightIcon /></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <Pagination count={5} />
                </div>
            </Container>
        </div>
    )
}