import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import mc1 from "../../../assets/images/mediacenter/md1.png"
import mc2 from "../../../assets/images/mediacenter/md2.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import $ from 'jquery';

export default function MediaCenter() {

    $(document).ready(function () {
        $('.btnStyle').click(function () {
            $('.btnStyle.active').removeClass("active");
            $(this).addClass("active");
        });
    });

    const slidesData = [
        {
            icon: mc1,
            date: "September 2020",
            subtitle: "Tamdeed Projects at GITEX 2020 have signed with Hewlett Packard Enterprise (HPE) Strategic Partnership Agreement and achieved the HPE Partner Ready Gold Status",
            button: "Read More",
            cat: "latest-updates"
        },
        {
            icon: mc2,
            date: "September 2020",
            subtitle: "Tamdeed Projects has recieved at GITEX 2020 from Huawei Enterprise the Gold Channel Partnership Certificate with Huawei",
            button: "Read More",
            cat: "hosted-events"
        }
    ];

    const [items, setItems] = useState(slidesData);

    const filterItem = (categItem) => {
        // debugger;
        const updatedItems = slidesData?.filter((currElement) => {
            return currElement.cat === categItem;
        });
        setItems(updatedItems);
    }

    // useEffect(() => {
    //     setItems(slidesData);
    // }, [slidesData]);

    return (
        <div className={"media-center"}>
            <h3 className={"Title"}>Media Center</h3>
            <div className="d-flex justify-content-center align-items-center btnDiv">
                <button className="btnStyle active"
                    onClick={() => filterItem('latest-updates')}
                >
                    Latest Updates
                </button>
                <button className="btnStyle"
                    onClick={() => filterItem('hosted-events')}
                >
                    Hosted Events
                </button>
                <button className="btnStyle"
                    onClick={() => filterItem('in-the-news')}
                >
                    In the News
                </button>
            </div>
            <div className={"aboutBG"}>
                <Container>
                    <Row>
                        {
                            items.map((slides, index) => (
                                <Col sm={6} key={index} className={"mb-3"}>
                                    <Card className="cardStyle">
                                        <Card.Img variant="top" src={slides.icon} />
                                        <Card.Body>
                                            <p className="date">
                                                {slides.date}
                                            </p>
                                            <p className="cardsubtitle">
                                                {slides.subtitle}
                                            </p>
                                            <button className="btnStyle">{slides.button}<ChevronRightIcon /></button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}