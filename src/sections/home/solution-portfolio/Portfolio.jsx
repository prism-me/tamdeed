import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/icons/Color/Mask Group.png"
import icon2 from "../../../assets/images/icons/Color/Mask Group-1.png"
import icon3 from "../../../assets/images/icons/Color/Mask Group-2.png"
import icon4 from "../../../assets/images/icons/Color/Mask Group-3.png"
import icon5 from "../../../assets/images/icons/Color/Mask Group-4.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Portfolio() {
    const slidesData = [
        {
            icon: icon1,
            title: "Telecom",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
        },
        {
            icon: icon2,
            title: "NETWORKING",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
        },
        {
            icon: icon3,
            title: "ELV Systems",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
        },
        {
            icon: icon4,
            title: "Cyber Security ",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
        },
        {
            icon: icon5,
            title: "Data Center",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
        }
    ];

    return (
        <>
            <div className={"mainBGDIV"}>
            </div>
            <div className={"portfolio"}>
                <div className="aboutBG">
                    <p className={"title"}> Solutions to Power Possibility</p>
                    <h3 className={"subtitle"}>
                        Sales Solution Portfolio
                    </h3>
                    <Container>
                        {
                            slidesData.map((slides, index) => (
                                <Row key={index} className={"mb-3"}>
                                    <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                        <span className={"iconBg"}>
                                            <img src={slides.icon} alt="solution" className={"iconImg"} />
                                        </span>
                                    </Col>
                                    <Col sm={5}>
                                        <h4 className="portfolioTitle">
                                            {slides.title}
                                        </h4>
                                        <p className="portfoliosubtitle">
                                            {slides.subtitle}
                                        </p>
                                    </Col>
                                </Row>
                            ))
                        }
                        <div className="d-flex justify-content-start align-items-center">
                            <button className="btnStyle">See All <ChevronRightIcon /></button>
                        </div>
                    </Container>
                </div>
            </div>
            <div className={"mainBottomDIV"}>
            </div>
        </>
    )
}