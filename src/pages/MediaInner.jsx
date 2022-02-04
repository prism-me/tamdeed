import React, { Component } from "react";
import Banner from "../sections/media/media-banner/MediaBanner";
import { Col, Container, Row, Card,Form,Button } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Pagination from '@material-ui/lab/Pagination';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { API } from "../../src/http/API";
import ind from "../assets/images/mediaImages/testinner.png"
import elipse from "../assets/images/mediaImages/Ellipse 109.png"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Facebook from "@material-ui/icons/Facebook";

class MediaInner extends Component {


    
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { 
        this.getAllPartners();
     }

     getAllPartners = () => {
        const slug = this.props.match.params.slug;
        console.log(slug)
        console.log("slug")
        API.get(`/news`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {

                    let currentPage = response.data.data.find((x) => x.slug == slug);
                    console.log("===response.data.data",slug,currentPage );
                    // console.log(response.data.data);
                    this.setState({currentPage})
                    
                }
            })
            .catch((err) => console.log(err));

            API.get(`/media-type/Latest Updates`, {
            }).then((response) => {
                console.log("response",response.data.message)
                let data = {...response?.data?.message}
                this.setState({latetUpdates: data})
            });
    }

    render() {
        return (
            <div>
                <Banner />
                <div className={"latestUpdates"}>
                    <Container>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <Card className={"border-0"}>
                                    <Card.Img variant="top" src={this.state.currentPage?.banner_img} />
                                    <Card.Body className={"innerpage"}>
                                        <p className="latestUpdateTitle innerpageTitle">
                                            {this.state.currentPage?.name}
                                        </p>
                                        <p className="subtitle innerpagedescription">
                                            
                                        {this.state.currentPage?.long_description}
                                        </p>
                                        {/* <div className="d-flex justify-content-start align-items-center">
                                            <button className="btnStyle">Read More aaaaa<ChevronRightIcon /></button>
                                        </div> */}
                                    </Card.Body>
                                </Card>
                                <div className="readArticle">
                                <div className="readArticleLink">
                                    <a href={this.state.currentPage?.link}>Read the article in published platform </a>
                                </div>
                                <div className="readArticleLinkIcons">
                                    <div className="shareArticle">Share this article</div>
                                    <div className="iconsMediaInnerContainer">
                                            <span className="socialIcons iconsMediaInner">
                                                <a href="#">
                                                <Facebook className={"iconSize"} />
                                                </a>
                                            </span>
                                            <span className="socialIcons iconsMediaInner">
                                                <a href="#">
                                                <TwitterIcon className={"iconSize"} />
                                                </a>
                                            </span>
                                            <span className="socialIcons iconsMediaInner">
                                                <a href="#">
                                                <InstagramIcon className={"iconSize"} />
                                                </a>
                                            </span>
                                    </div>
                                </div>
                                </div>
                                <div className="commentSection">
                                    <Row key={"1"} className={"mb-3 mt-3 pt-3"}>
                                        <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                            <img src={elipse} alt="solution" className={"iconImg img-fluid"} />
                                        </Col>
                                        <Col sm>
                                            <p className="latestUpdateTitle innerpageTitle">
                                                {"Rosalina Kelain"}
                                            </p>
                                            <p className="latestUpdateTitle innerpagedescription">
                                                {"Today, 2021"}
                                            </p>
                                            <p className="subtitle innerpagedescription">
                                            Adipiscing nisl habitasse morbi ipsum volutpat. Enim vestibulum, turpis viverra arcu bibendum id odio donec lectus. In est, consequat ullamcorper id bibendum viverra at lobortis praesent. Sodales at.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row key={"1"} className={"mb-3"}>
                                        <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                            <img src={elipse} alt="solution" className={"iconImg img-fluid"} />
                                        </Col>
                                        <Col sm>
                                            <p className="latestUpdateTitle innerpageTitle">
                                                {"Rosalina Kelain"}
                                            </p>
                                            <p className="latestUpdateTitle innerpagedescription">
                                                {"Today, 2021"}
                                            </p>
                                            <p className="subtitle innerpagedescription">
                                            Adipiscing nisl habitasse morbi ipsum volutpat. Enim vestibulum, turpis viverra arcu bibendum id odio donec lectus. In est, consequat ullamcorper id bibendum viverra at lobortis praesent. Sodales at.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className="">
                                    
                                    <Row key={"1"} className={"mb-3 mt-3 pt-3"}>
                                        
                                        <Col sm>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formComment">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    style={{ height: '150px' }}
                                                />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formName">
                                                    <Form.Control type="textArea" placeholder="Enter Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>
                                                <Button className="submitButton formSubmitComment" type="submit">
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={1} md={0} sm={0} className="rightCard rightCardInner emptyDIv"></Col>
                             
                            <Col lg={5} md={12} sm={12} className="rightCard rightCardInner">
                                <div>
                                    {/* <div className={"title followUs"}>Follow Us</div> */}
                                    <h3 className={"title followUs"}>
                                        Follow Us
                                    </h3>
                                    <div className="iconsMediaInnerContainer">
                                        <span className="socialIcons iconsMediaInner">
                                            <a href="#">
                                            <Facebook className={"iconSize"} />
                                            </a>
                                        </span>
                                        <span className="socialIcons iconsMediaInner">
                                            <a href="#">
                                            <TwitterIcon className={"iconSize"} />
                                            </a>
                                        </span>
                                        <span className="socialIcons iconsMediaInner">
                                            <a href="#">
                                            <InstagramIcon className={"iconSize"} />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <h3 className={"title latestUpdateCards"}>
                                Our Latest Articles
                                </h3>
                                {
                                    this.state.latetUpdates?.data?.map((slides, index) => (
                                        <Row key={index} className={"mb-3 bg-color cardMarginInner"}>
                                            <Col sm={"auto"} className="d-flex justify-content-center align-items-center containerInnerImageLatestupadates">
                                                <img src={slides.img} alt="solution" className={"iconImg img-fluid innerImageLatestupadates"} />
                                            </Col>
                                            <Col sm>
                                                <p className="subtitle subtitleInner">
                                                    {slides.short_description}
                                                </p>
                                            </Col>
                                        </Row>
                                    ))
                                }
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default MediaInner;