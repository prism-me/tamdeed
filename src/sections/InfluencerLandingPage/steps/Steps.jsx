import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';
import qliq1 from "../../../assets/images/vendorimgs/step1.png"
import step1 from "../../../assets/images/vendorimgs/Step1icon.png"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function Steps() {

    const slidesData = [
        {
            title: step1,
            Subtitle: "Claim your profile",
            Subtitle1: "Search your profile in our extensive influencers directory and claim it by submitting the required documents. Once you’ve claimed your profile, you will open doors to unlimited opportunities to discover and collaborate with Middle East’s premium brands.",
            thumbnail: qliq1,
        },
        {
            title: step1,
            Subtitle: "Claim your profile",
            Subtitle1: "Search your profile in our extensive influencers directory and claim it by submitting the required documents. Once you’ve claimed your profile, you will open doors to unlimited opportunities to discover and collaborate with Middle East’s premium brands.",
            thumbnail: qliq1,
        },
        {
            title: step1,
            Subtitle: "Claim your profile",
            Subtitle1: "Search your profile in our extensive influencers directory and claim it by submitting the required documents. Once you’ve claimed your profile, you will open doors to unlimited opportunities to discover and collaborate with Middle East’s premium brands.",
            thumbnail: qliq1,
        },
        {
            title: step1,
            Subtitle: "Claim your profile",
            Subtitle1: "Search your profile in our extensive influencers directory and claim it by submitting the required documents. Once you’ve claimed your profile, you will open doors to unlimited opportunities to discover and collaborate with Middle East’s premium brands.",
            thumbnail: qliq1,
        },
        {
            title: step1,
            Subtitle: "Claim your profile",
            Subtitle1: "Search your profile in our extensive influencers directory and claim it by submitting the required documents. Once you’ve claimed your profile, you will open doors to unlimited opportunities to discover and collaborate with Middle East’s premium brands.",
            thumbnail: qliq1,
        },
    ];
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    const indicatorStyles = {
        background: '#fff',
        width: 8,
        height: 8,
        display: 'inline-block',
        margin: '0 8px',
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={"brand-steps"}>
            <h3 className={"Title"}>Steps to get started</h3>
            <Carousel
                autoPlay={true}
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                stopOnHover={false}
                centerSlidePercentage={70}
                selectedItem={currentIndex}
                className={"carousel"}
                onChange={(index) => setCurrentIndex(index)}
                interval={6000}

                statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }} className={"Carouselbutton"}>
                            <ArrowBackIosIcon className={"iconcarouselsize"} />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }} className={"Carouselbutton"}>
                            <ArrowForwardIosIcon className={"iconcarouselsize"} />
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#000' }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {
                    slidesData.map((slides, index) => (
                        <div>
                            <Container>
                                <Row>
                                    <Col sm>
                                        <img src={slides.thumbnail} alt="brand1" className={"img-fluid"} />
                                    </Col>
                                    <Col sm>
                                        <div className={"d-flex justify-content-start align-items-center"}>
                                            <img src={slides.title} alt="brand1" className={"stepImg"} />
                                        </div>
                                        <h2 className={"title"}>
                                            {slides.Subtitle}
                                        </h2>
                                        <p className={"subtitle"}>
                                            {slides.Subtitle1}
                                        </p>
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