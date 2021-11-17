import React from "react";
import Container from "@material-ui/core/Container";
import { Col, Row } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


function FooterBottom(props) {
  return (
    <div className="footer-bottom">
      <Container>
        <Row className="">
          <Col sm={6} xs={12} md={6} lg >
            <p className={"copyRight text-left"} >
              Copyright &copy; 2021 Qliq. All Rights Reserved | Designed & Managed by Prism Digital
            </p>
          </Col>
          <Col sm={6} xs={12} md={6} lg>
            <p className={"socialIcon text-right"}>
              <span className="mt-2 socialText">Social Media</span>
              <a href="https://www.instagram.com/ags_shj/?hl=en" className={"footericonsize1"} target="_blank">
                <InstagramIcon />
              </a>
              <a href="#" className={"footericonsize2"} target="_blank">
                <TwitterIcon />
              </a>
              <a href="#" className={"footericonsize3"} target="_blank">
                <YouTubeIcon />
              </a>
              <a href="https://www.facebook.com/American-Gulf-School-Sharjah-106277764954110" className={"footericonsize4"} target="_blank">
                <FacebookIcon />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterBottom;