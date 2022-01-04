import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import img1 from "../../../assets/images/mediaImages/news/news1.png"
import img2 from "../../../assets/images/mediaImages/news/news2.png"
import img3 from "../../../assets/images/mediaImages/news/news3.png"
import img4 from "../../../assets/images/mediaImages/news/news4.png"
import img5 from "../../../assets/images/mediaImages/trending/trending1.png"
import img6 from "../../../assets/images/mediaImages/trending/trending2.png"
import img7 from "../../../assets/images/mediaImages/trending/trending3.png"
import img8 from "../../../assets/images/mediaImages/trending/trending4.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function News() {
    const slidesData = [
        {
            icon: img1,
            title: "Latest",
            date: "Sept 2020",
            subtitle: "Tamdeed Projects has recieved at GITEX 2020 from Huawei Enterprise the Gold Channel Partnership Certificate with Huawei"
        },
        {
            icon: img2,
            title: "Latest",
            date: "Sept 2020",
            subtitle: "Tamdeed Projects at GITEX 2020 have signed with Hewlett Packard Enterprise (HPE) Strategic Partnership Agreement and achieved the HPE Partner Ready Gold Status"
        },
        {
            icon: img3,
            title: "Latest",
            date: "Sept 2020",
            subtitle: "The #Huawei ME Carrier & MSP Partners’ Cloud Managed Network Launch, held alongside GITEX GLOBAL, brought together industry leaders from IDC | MEA, solutions by stc, Tamdeed Projects..."
        },
        {
            icon: img4,
            title: "Latest",
            date: "Sept 2020",
            subtitle: "Dubai, UAE – StarLink, the fastest growing specialized cyber and cloud VAD in the META region and Tamdeed Projects, an Etisalat Services Holding company – part of Etisalat Group..."
        }
    ];
    const slidesData2 = [
        {
            icon: img5,
            subtitle: "Building strong partnerships at #gitex2021 StarLink and Tamdeed Projects (Etisalat Services), an Etisalat..."
        },
        {
            icon: img6,
            subtitle: "The #Huawei ME Carrier & MSP Partners’ Cloud Managed Network Launch..."
        },
        {
            icon: img7,
            subtitle: "At the #Huawei ME Carrier and MSP Partners’ Cloud Managed Network Launch, speakers from Tamdeed explored technologies..."
        },
        {
            icon: img8,
            subtitle: "StarLink and Tamdeed Projects signs partnership at GITEX..."
        }
    ];
    return (
        <div className={"news"}>
            <Container>
                <Row>
                    <Col sm={7}>
                        <h3 className={"title"}>
                            In the News
                        </h3>
                        <Row>

                            {
                                slidesData.map((slides, index) => (
                                    <Col sm={6} key={index} className={"mb-3"}>
                                        <Card className={"cardStyle"}>
                                            <Card.Img variant="top" src={slides.icon} />
                                            <Card.Body>
                                                <p className="cardTitle">
                                                    {slides.title} <span>{slides.date}</span>
                                                </p>
                                                <p className="cardsubtitle">
                                                    {slides.subtitle}
                                                </p>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <button className="cardbtnStyle">Read More<ChevronRightIcon /></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btnStyle">Load more<ChevronRightIcon /></button>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <h3 className={"title"}>
                            Trending
                        </h3>
                        {
                            slidesData2.map((slides, index) => (
                                <Row key={index} className={"mb-3 bg-color"}>
                                    <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                        <img src={slides.icon} alt="solution" className={"iconImg img-fluid"} />
                                    </Col>
                                    <Col sm>
                                        <p className="subtitle">
                                            {slides.subtitle}
                                        </p>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                </Row>
            </Container >
        </div >
    )
}