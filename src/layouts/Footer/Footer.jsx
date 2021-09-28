import React from "react";
import Container from "@material-ui/core/Container";
import { Col, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { STRINGS } from "../../utils/base";
import { HashLink } from "react-router-hash-link"
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import logo from "./../../assets/images/agslogo/Logo (1).png";
import { useHistory } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const history = useHistory();
  {
    console.log("language", currentLanguageCode)
  }

  const { t } = useTranslation();
  const scrollToBottom1 = () => {
    const bottomEle = document.getElementById("calenderDiv");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={"footer-Wrape"}>
      <footer>
        <Container>
          <Row>
            <Col sm={6} xs={6} md={6} lg>
              <div className="d-flex justify-contennt-start align-items-center">
                <img src={logo} alt="AGS-logo"
                  onClick={() => history.push("/")}
                  className="footerlogo" />
                <h5 className={"font-weight-bold FooterHeading ml-1"}>
                  AMERICAN<br />
                  GULF SCHOOL
                </h5>
              </div>
              <p className="socialIcon">
                SOCIAL
                <a href="https://www.facebook.com/American-Gulf-School-Sharjah-106277764954110" className={"footericonsize"} target="_blank">
                  <FacebookIcon />
                </a>
                <a href="mailto:admissions@ags.ae" className={"footericonsize"}>
                  <MailOutlineIcon />
                </a>
                <a href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618" className={"footericonsize"} target="_blank">
                  <LocationOnIcon />
                </a>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFmCcDlQ1gXZAAAAXwsFxY43sOt4cYab_4gAvY6oE1xWq3uaDQKZNL_mZjiN84VWH918aUvSOxZvlRF3Tcw8L-OTOg52iUs6gq9t3IX9h8f4seCgDit8xUABkKWId9PhKDaTNI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Famerican-gulf-school-sharjah%2F" className={"footericonsize"} target="_blank">
                  <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/ags_shj/?hl=en" className={"footericonsize"} target="_blank">
                  <InstagramIcon />
                </a>
              </p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9867160428666!2d55.562873115012394!3d25.338226783830823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5ef006a4c83%3A0xcf95030e29d9fb7!2sAmerican%20Gulf%20School!5e0!3m2!1sen!2s!4v1632827655730!5m2!1sen!2s"
                  width="100%" style={{ border: "0" }} loading="lazy"></iframe>
              </div>
            </Col>
            <Col sm={6} xs={6} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                OUR SCHOOL
              </h5>
              <Nav className="flex-column">
                <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ABOUT_US}`}>
                  <Nav.Link className=" fdeco"> About us </Nav.Link>
                </LinkContainer>
                <LinkContainer to="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618?shorturl=1">
                  <Nav.Link className=" fdeco"> Campus Location </Nav.Link>
                </LinkContainer>
                <LinkContainer to="#">
                  <Nav.Link className=" fdeco">  Our Team </Nav.Link>
                </LinkContainer>
                <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.CAREERS}`}>
                  <Nav.Link className=" fdeco"> Join Our Team </Nav.Link>
                </LinkContainer>
                <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.FAQ}`}>
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
                <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}>
                  <Nav.Link className=" fdeco">Enroll Online</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}> */}
                <HashLink to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}` + "#Tuition_Fees"} className={"hashLinkStyling"}>
                  Tuition Fees
                </HashLink>
                {/* <Nav.Link className=" fdeco"> Tuition Fees</Nav.Link>
                </LinkContainer> */}
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}> */}
                <HashLink to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}` + "#Request_for_a_callback"} className={"hashLinkStyling"}>
                  Request for a callback
                </HashLink>
                {/* <Nav.Link className=" fdeco"> Request for a callback </Nav.Link>
                </LinkContainer> */}
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}> */}
                <HashLink to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}` + "#School_Tour"} className={"hashLinkStyling"}>
                  School Tours
                </HashLink>
                {/* <Nav.Link className=" fdeco"> School Tours</Nav.Link>
                </LinkContainer> */}
              </Nav>
            </Col>
            <Col sm={6} xs={6} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                ACADEMICS
              </h5>
              <Nav className="flex-column">
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ACADEMICS}`}
                  onClick={scrollToBottom1}
                > */}
                <HashLink to={`/${currentLanguageCode}${STRINGS.ROUTES.ACADEMICS}` + "#Academic_Calendar"} className={"hashLinkStyling"}>
                  Academic Calendar
                </HashLink>
                {/* <Nav.Link className=" fdeco"> Academic Calendar </Nav.Link> */}
                {/* </LinkContainer> */}
                {/* <LinkContainer to="#"> */}
                <HashLink to={`/${currentLanguageCode}${STRINGS.ROUTES.ACADEMICS}` + "#Our_Curriculum"} className={"hashLinkStyling"}>
                  Our Curriculum
                </HashLink>
                {/* <Nav.Link className=" fdeco">  Our Curriculum </Nav.Link> */}
                {/* </LinkContainer> */}
                <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.STUDENT_CARE}`}>
                  <Nav.Link className=" fdeco">  Student Care support  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
            <Col sm={6} xs={6} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                Contact Us
              </h5>
              <p>
                Al Rahmaniya Shaghrafah 4 - Sharjah -
                United Arab Emirates
              </p>
              <a href="mailto:Info@ags.ae" className=" text-white fdeco">
                <MailOutlineIcon className="iconSize" /> Info@ags.ae
              </a>
              <p>
                <a href='tel:06-5061111' class="contact-pannel-btn text-decoration-none text-white fdeco"><PhoneIcon className="iconSize" /> 06-5061111</a>
              </p>
              <p>
                Working Hours : 7:45 AM - 3:45 PM ( Sunday - Thursday )
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div >
  );
}

export default Footer;
