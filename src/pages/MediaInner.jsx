import React, { Component } from "react";
import Banner from "../sections/media/media-banner/MediaBanner";
import { Col, Container, Row, Card } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Pagination from '@material-ui/lab/Pagination';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { API } from "../../src/http/API";

class MediaInner extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { 
        this.getAllPartners()
     }

     getAllPartners = () => {
        const slug = this.props.match.params.slug;
        console.log(slug)
        console.log("slug")
        API.get(`/news`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {

                    let currentPage = response.data.data.find((x) => x.link == slug);
                    console.log("===response.data.data",slug,currentPage );
                    // console.log(response.data.data);
                    this.setState({currentPage})
                    
                }
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <Banner />
                <div className={"latestUpdates"}>
                    <Container>
                        <h3 className={"title"}>
                            Latest Updates
                        </h3>
                        <Row>
                            <Col lg={8} md={12} sm={12}>
                                <Row key={1} className={"mb-3 bg-color"}>
                                    <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                        <img src={"slides.img"} alt="solution" className={"iconImg img-fluid"} />
                                    </Col>
                                    <Col sm>
                                        <p className="latestUpdateTitle">
                                            {"Today, 2021"}
                                        </p>
                                        <p className="subtitle">
                                        Tamdeed Projects, an Etisalat Services Holding company – part of Etisalat Group
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                             
                            <Col lg={4} md={12} sm={12} className="rightCard">
                                <Card className={"border-0"}>
                                    <Card.Img variant="top" src={"ddd"} />
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
                    </Container>
                </div>
            </div>
        );
    }
}

export default MediaInner;