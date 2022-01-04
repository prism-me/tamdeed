import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/icons/Color/Mask Group.png"
import icon2 from "../../../assets/images/icons/Color/Mask Group-1.png"
import icon3 from "../../../assets/images/icons/Color/Mask Group-2.png"
import icon4 from "../../../assets/images/icons/Color/Mask Group-3.png"

export default function SolutionPillars() {
    const slidesData = [
        {
            icon: icon1,
            title: "Adapting Dynamic Technologies, Trends & Business Economics"
        },
        {
            icon: icon2,
            title: "Aspiration of Business Growth, Value & Market Share"
        },
        {
            icon: icon3,
            title: "Leveraging Capabilities Coverage, Competitiveness & Customer Reach"
        },
        {
            icon: icon4,
            title: "Partnerships, Consortiums and Alliances with Key Technology Vendors"
        }
    ];

    return (
        <div className={"solution-pillars"}>
            <Container>
                <p className={"Title"}>
                    Solutions to Power Possibility
                </p>
                <h3 className={"subtitle"}>
                    Tamdeed Solution Pillars
                </h3>
                <Row>
                    {
                        slidesData.map((slides, index) => (
                            <Col sm={3} key={index} className={"mb-3"}>
                                <Row>
                                    <Col sm={12} className="d-flex justify-content-center align-items-center" >
                                        <span className={"iconBg"}>
                                            <img src={slides.icon} alt="solution" className={"iconImg"} />
                                        </span>
                                    </Col>
                                    <Col sm={12}>
                                        <p className="cardsubtitle">
                                            {slides.title}
                                        </p>
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