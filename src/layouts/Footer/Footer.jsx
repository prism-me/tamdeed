import React from "react";
import Container from "@material-ui/core/Container";
import {Col, Nav, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

function Footer() {
  return (
      <div className={"footer-Wrape"}>
        <footer>
          <Container>
            <Row>
              <Col sm={6} xs={6} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  AMERICAN<br/>
                  GULF SCHOOL
                </h5>
                <p>
                  SOCIAL
                  <a href="#" className={"footericonsize"}>
                    <FacebookIcon/>
                  </a>
                  <a href="#" className={"footericonsize"}>
                    <YouTubeIcon/>
                  </a>
                  <a href="#" className={"footericonsize"}>
                    <TwitterIcon/>
                  </a>
                  <a href="#" className={"footericonsize"}>
                    <InstagramIcon/>
                  </a>
                </p>
                <div>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14423.484524133519!2d55.56093361751506!3d25.342105034139998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f40e118ee9a9%3A0x322230539da7a8e3!2sAl%20RahmaniyaShaghrafah%204%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1629034203974!5m2!1sen!2s"
                      width="100%" style={{border:"0"}}  loading="lazy"></iframe>
                </div>
              </Col>
              <Col sm={6} xs={6} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  OUR SCHOOL
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> About us </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> Campus Location </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">  Our Team </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> Join Our Team </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">  FAQs </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={6} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  ADMISSIONS
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">  Virtual Admissions </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">Enroll Online</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> Tuition Fees</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> Request for a callback </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> School Tours</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={6} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  ACADEMICS
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco"> Academic Calendar </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">  Our Curriculum </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">  Student Care support  </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={6} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Contact Us
                </h5>
                <p>
                  Al RahmaniyaShaghrafah 4 - Sharjah -
                  United Arab Emirates
                </p>
                <a href="mailto:Info@ags.ae" className=" text-white fdeco">
                  <MailOutlineIcon/> Info@ags.ae
                </a>
                <p>
                  <PhoneIcon/> 06 000000
                </p>
                <p>
                  Working Hours : 9am-5pm Mon-Fri
                </p>
                {/*<h5 className={"mb-3 font-weight-bold FooterHeading "}>*/}
                {/*  Follow Us on*/}
                {/*</h5>*/}
                {/*<a href="#">*/}
                {/*  <img src={facebook} alt="Facebook-Icon" className={"footericonsize"}/>*/}
                {/*  /!*<FacebookIcon className={"footericonsize"}/>*!/*/}
                {/*</a>*/}
                {/*<a href="#">*/}
                {/*  <img src={instagram} alt="Instagram-Icon" className={"footericonsize"}/>*/}
                {/*  /!*<InstagramIcon className={"footericonsize"}/>*!/*/}
                {/*</a>*/}
                {/*<a href="#">*/}
                {/*  <img src={linkedin} alt="Linkedin-ICON" className={"footericonsize"}/>*/}
                {/*  /!*<LinkedInIcon className={"footericonsize"}/>*!/*/}
                {/*</a>*/}
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
  );
}

export default Footer;
