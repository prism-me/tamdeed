import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Col, Row, Form, Container } from 'react-bootstrap';
import header_bg from "./../../../assets/images/usrtBanner/userlandingpage/userlandingbanner.jpg";

export default function Banner() {

    const handleInputChange = ({ currentTarget: input }) => {

    };

    const slidesData = [
        {
            title: "Become a QLIQ Delivery Partner and Change your Life... Forever",
            Subtitle: "Sign up now for free and start earning!",
            button: "Register now for free!",
        },
        {
            title: "Become a QLIQ Delivery Partner and Change your Life... Forever",
            Subtitle: "Sign up now for free and start earning!",
            button: "Register now for free!",
        },
        {
            title: "Become a QLIQ Delivery Partner and Change your Life... Forever",
            Subtitle: "Sign up now for free and start earning!",
            button: "Register now for free!",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={"delivery-banner"}>
            <Carousel
                autoPlay={true}
                dynamicHeight={false}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                stopOnHover={false}
                centerSlidePercentage={70}
                selectedItem={currentIndex}
                onChange={(index) => setCurrentIndex(index)}
                className="video-carousel center"
                interval={6000}
            >
                {
                    slidesData.map((slides, index) => (
                        <div className="home-header"
                            style={{ backgroundImage: `url(${header_bg})` }}>
                            <Container fluid>
                                <Row>
                                    <Col sm={6}>
                                        <div className={"description-column"}>
                                            <h3 className={"bannerHeading1"}>
                                                {slides.title}
                                            </h3>
                                            <h3 className={"bannerHeading2"}>
                                                {slides.Subtitle}
                                            </h3>
                                        </div>
                                    </Col>
                                    <Col sm={{ span: 5, offset: 1 }}>
                                        <Form className="registerform">
                                            <Form.Group controlId="first_name">
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value=""
                                                    placeholder="Full name*"
                                                    className={"formcolor"}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="email">
                                                <Form.Control
                                                    type="text"
                                                    name="email"
                                                    value=""
                                                    className={"formcolor "}
                                                    placeholder="Mail ID"
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="contact_number">
                                                <Form.Control
                                                    type="text"
                                                    name="phone_number"
                                                    value=""
                                                    className={"formcolor "}
                                                    placeholder="WhatsApp number*"
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="Country">
                                                <Form.Control as="select"
                                                    className={"formcolor"}
                                                >
                                                    <option>Country*</option>
                                                    <option>Pakistan</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <center>
                                                <button className={"btn shadow bannerBtn"}>
                                                    {slides.button}
                                                </button>
                                            </center>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    ))
                }
            </Carousel>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="dots-section d-flex justify-content-center align-items-center">
                    {
                        slidesData.map((x, index) => (
                            <span key={index} onClick={() => setCurrentIndex(index)} className={`circle ${currentIndex === index ? 'active' : ''}`}> </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}