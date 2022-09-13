import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import mc1 from "../../../assets/images/mediacenter/md1.png"
import mc2 from "../../../assets/images/mediacenter/md2.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import $ from 'jquery';
import { API } from "../../../http/API";
import { useHistory } from "react-router-dom";

export default function MediaCenter() {

    const history = useHistory();
    const [inTheNews, setInTheNews] = useState({data:[]});
    const [hostedEvents, setHostedEvents] = useState({data:[]});
    const [latetUpdates, setLatetUpdates] = useState({data:[]});
    const [media, setMedia] = useState();


    useEffect(() => {
        getAllMedia()
    },[])

    const getAllMedia = () => {

        API.get(`/media-type/latest-updates`).then((response) => {
            let data = {...response?.data?.message}
            setLatetUpdates(data?.data)
            setMedia(data?.data)

        });

        API.get(`/media-type/In-the-News`).then((response) => {
            let data = {...response?.data?.message}
            setInTheNews(data?.data)

        });
        
        API.get(`/media-type/Hosted-Events`).then((response) => {
            let data = {...response?.data?.message}
            setHostedEvents( data?.data )

        });
    }


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
            <p className={"Title"}>Media Center</p>
            <div className="d-flex justify-content-center align-items-center btnDiv">
                <button className="btnStyle active"
                    onClick={() => setMedia(latetUpdates)}
                >
                    Latest Updates
                </button>
                <button className="btnStyle"
                    onClick={() => setMedia(hostedEvents)}
                >
                    Hosted Events
                </button>
                <button className="btnStyle"
                    onClick={() => setMedia(inTheNews)}
                >
                    In the News
                </button>
            </div>
            <div className={"aboutBG"}>
                <Container>
                    <Row>
                        {
                            media?.map((slides, index) => (
                                index < 2 &&
                                <Col sm={6} key={index} className={"mb-3"}>
                                    <Card className="cardStyle">
                                        <Card.Img variant="top" src={slides.img} />
                                        <Card.Body>
                                            <p className="date">
                                                {slides.date}
                                            </p>
                                            <p className="cardsubtitle">
                                                {slides.short_description}
                                            </p>
                                            <button className="btnStyle" onClick={() => history.push(`/media-center/${slides.slug}`)} >Read more<ChevronRightIcon /></button>
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