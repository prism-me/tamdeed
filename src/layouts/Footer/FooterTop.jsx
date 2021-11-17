import React from "react";
import Container from "@material-ui/core/Container";
import { Col, Row } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


function FooterTop(props) {
    return (
        <div className="footer-top">
            <Container>
                <Row className="">
                    <Col sm={6} xs={12} md={6} lg >
                        <p className={"copyRight text-left"} >
                            Amet, sed amet bibendum cursus urna, erat quis nullam eu!
                        </p>
                    </Col>
                    <Col sm={6} xs={12} md={6} lg>
                        <p className={"socialIcon text-right"}>
                            <button className={"registerButton"}>
                                Register now for free!
                            </button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterTop;