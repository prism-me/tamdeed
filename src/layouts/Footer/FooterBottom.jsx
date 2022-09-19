import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Col, Row } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


function FooterBottom(props) {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])
  return (
    <div className="footer-bottom">
      <Container>
        <Row className="">
          <Col sm={6} xs={12} md={6} lg >
            <p className={"copyRight text-left"} >
              Copyright &copy; {date} by Tamdeed Projects
            </p>
          </Col>
          <Col sm={6} xs={12} md={6} lg>
            <p className={"socialIcon text-right"}>
              Designed & Developed by <a target="_blank" href="https://www.prism-me.com">Prism</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterBottom;