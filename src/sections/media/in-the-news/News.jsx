import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { API } from "../../../http/API";
import { useHistory } from "react-router-dom";

export default function News() {
    const history = useHistory();
    const [inTheNews, setInTheNews] = useState({data:[],currentPage:0,lastPage:0});
    const [hostedEvents, setHostedEvents] = useState({data:[],currentPage:0,lastPage:0});

    useEffect(() => {
        getAllMedia();
    },[])

    const getAllMedia = () => {

        API.get(`/media-type/In the News`, {
        }).then((response) => {
            let data = {...response?.data?.message}
            setInTheNews( { ...inTheNews, data:data?.data, currentPage: data?.current_page, lastPage: data?.last_page } )

        });
        
        API.get(`/media-type/Hosted Events`, {
        }).then((response) => {
            let data = {...response?.data?.message}
            setHostedEvents( { ...hostedEvents, data:data?.data, currentPage: data?.current_page, lastPage: data?.last_page } )

        });

    }

    const getMedia = (type) => {
        let page= 1
        if(type == "In the News"){
            page = inTheNews.currentPage + 1
        } else {
            page = hostedEvents.currentPage + 1
        }

        API.get(`/media-type/${type}?page=${page}`, {
        }).then((response) => {
            let data = {...response?.data?.message}
            if(type == "In the News"){
                setInTheNews( { ...inTheNews, data:[ ...inTheNews.data, ...data?.data ], currentPage: data?.current_page, lastPage: data?.last_page } )
            } else {
                setHostedEvents( { ...hostedEvents, data:[ ...hostedEvents.data, ...data?.data ], currentPage: data?.current_page, lastPage: data?.last_page } )
            }
        });
    }

    const handlePageChange = (type) => {
        getMedia(type)
    }
    const goToInnerPage = (slug) => {
    }

    return (
        <div className={"news"}>
            <Container>
                <Row>
                    <Col lg={7} md={12} sm={12}>
                        <h3 className={"title"}>
                            In the News
                        </h3>
                        <Row>

                            {
                                inTheNews?.data?.map((slides, index) => (
                                    <Col sm={6} key={index} className={"mb-3"}>
                                        <Card className={"cardStyle"}>
                                            <Card.Img variant="top" src={slides.img} />
                                            <Card.Body>
                                                <p className="cardTitle">
                                                    {"Latest"} <span>{"Today, 2021"}</span>
                                                </p>
                                                <p className="cardsubtitle">
                                                    {slides.short_description}
                                                </p>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <button onClick={() => history.push(`/media-center/${slides.slug}`)} className="cardbtnStyle">Read More<ChevronRightIcon /></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                        <div className="d-flex justify-content-center align-items-center">
                            {inTheNews.currentPage != inTheNews.lastPage && <button onClick={() => handlePageChange("In the News")} className="btnStyle">Load more<ChevronRightIcon /></button> }
                        </div>
                    </Col>
                    <Col lg={5} md={12} sm={12}>
                        <h3 className={"title"}>
                            Trending
                        </h3>
                        {
                            hostedEvents?.data?.map((slides, index) => (
                                <Row key={index} className={"mb-3 bg-color"} onClick={() => history.push(`/media-center/${slides.slug}`)} style={{cursor:"pointer"}}>
                                    <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                        <img src={slides.img} alt="solution" className={"iconImg img-fluid trendingImg"} />
                                    </Col>
                                    <Col sm>
                                        <p className="subtitle">
                                            {slides.short_description}
                                        </p>
                                    </Col>
                                </Row>
                            ))
                        }
                        <div className="d-flex justify-content-center align-items-center">
                            {hostedEvents.currentPage != hostedEvents.lastPage && <button onClick={() => handlePageChange("Hosted Events")} className="btnStyle">Load more<ChevronRightIcon /></button> }
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}