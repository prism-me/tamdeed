import React from "react";
import { Col, Row, Form, Container } from 'react-bootstrap';
import header_bg from "./../../../assets/images/usrtBanner/userlandingpage/userlandingbanner.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Hidden from "@material-ui/core/Hidden";

export default function Banner() {

    return (
        <div className="brand-banner"
            style={{ backgroundImage: `url(${header_bg})` }}
        >
            <Container>
                <Row>
                    <Col sm={5}>
                        <div className='description-column'>
                            <h3 className={"bannerHeading1"}>
                                Welcome to the biggest influencer
                            </h3>
                            <h3 className={"bannerHeading1"}>
                                platform in the Middle East!
                            </h3>
                            <button className={"btn shadow bannerBtn"}>
                                Register now for free!
                            </button>
                        </div>
                    </Col>
                    <Hidden smDown>
                        <Col sm={{ span: 6 }} className={"iconSpace"}>
                            <div className='video-promo-content'>
                                <button className="btn About-video-play-icon"
                                >
                                    <PlayArrowIcon className={"AboutVideoplaySize"} />
                                </button>
                            </div>
                        </Col>
                    </Hidden>
                </Row>
            </Container>
        </div>
    )
}