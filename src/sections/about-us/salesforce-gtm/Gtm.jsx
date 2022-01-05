import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap"
import img1 from "../../../assets/images/aboutImages/gtm/gtm1.png"
import img2 from "../../../assets/images/aboutImages/gtm/gtm2.png"
import img3 from "../../../assets/images/aboutImages/gtm/gtm3.png"
import img4 from "../../../assets/images/aboutImages/gtm/gtm4.png"
import img5 from "../../../assets/images/aboutImages/gtm/gtm5.png"
import img6 from "../../../assets/images/aboutImages/gtm/gtm6.png"

const Gtm = (props) => {
    const slidesData = [
        {
            icon: img1,
            title: "Saber Kamel",
            subtitle: "Client Director – Service Provider"
        },
        {
            icon: img2,
            title: "Saber Kamel",
            subtitle: "Client Director – Abu Dhabi Government"
        },
        {
            icon: img3,
            title: "Saber Kamel",
            subtitle: "Dubai & Northern Emirates Government"
        },
        {
            icon: img4,
            title: "Saber Kamel",
            subtitle: "Energy & Utilities"
        },
        {
            icon: img5,
            title: "Saber Kamel",
            subtitle: "FSI & Commercial"
        },
        {
            icon: img6,
            title: "Saber Kamel",
            subtitle: "Hospitality, Construction & MEP"
        }
    ];
    return (
        <div className="sales-gtm">
            <Container>
                <h3 className={"title"}>
                    Sales Force GTM
                </h3>
                <Row>
                    {
                        slidesData.map((slides, index) => (
                            <Col sm md={3} lg={2} key={index}>
                                <div className="card cardstyle">
                                    <Card.Img varient={"top"} className={"imgStyle"} src={slides.icon}></Card.Img>
                                    <div className="card-body">
                                        <h3 className="cardTitle">
                                            {slides.title}
                                        </h3>
                                        <p className="cardSubtitle">
                                            {slides.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div >
    )
}
export default Gtm;