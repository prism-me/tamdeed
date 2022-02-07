import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Col, Nav, Row, Form, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FooterBottom from "./FooterBottom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Facebook from "@material-ui/icons/Facebook";
import { API } from "../../http/API"


function Footer(props) {

  const [footerContent, setFooterContent] = useState({});

  useEffect(() => {
    API.get(`/pages`)
        .then((response) => {
            // debugger;
            if (response.status === 200 || response.status === 201) {
                let currentPage = response.data.data.find((x) => x.slug === "footer");

                API.get(`/all_sections/${currentPage._id}`)
                    .then((res) => {

                        if(res.data.data.length > 0){
                          setFooterContent(res.data.data[0]);
                        }
                        
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={"footer-Wrape"}>
        <footer>
          <Container fluid>
            <Row>
              <Col sm={6} xs={12} md={6} lg={4}>
                <h5 className={"font-weight-bold FooterHeading"}>
                  About
                </h5>
                <p className="detail">
                  Tamdeed Projects was established in 1996 to provide high – end turnkey solutions for all aspects of the cabling infrastructure business.
                </p>
                <p>
                  <a href="/about" class="contact-pannel-btn text-decoration-none fdeco FooterContact">
                    Know More<ChevronRightIcon />
                  </a>
                </p>
                <h5 className={"font-weight-bold FooterHeading mt-2"}>
                  Follow us on
                </h5>
                <div className="d-flex justify-content-start align-items-center">
                  <span className="socialIcons">
                    <a href={footerContent?.content?.facebook} target="_blank">
                      <Facebook className={"iconSize"} />
                    </a>
                  </span>
                  <span className="socialIcons">
                    <a href={footerContent?.content?.twitter} target="_blank">
                      <TwitterIcon className={"iconSize"} />
                    </a>
                  </span>
                  <span className="socialIcons">
                  <a href={footerContent?.content?.instagram} target="_blank">
                      <InstagramIcon className={"iconSize"} />
                    </a>
                  </span>
                </div>
              </Col>
              <Col sm={6} xs={12} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Information
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="/solution-service">
                    <Nav.Link className=" fdeco">
                      Our Services
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/media-center">
                    <Nav.Link className=" fdeco">
                      Upcoming Events
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/career">
                    <Nav.Link className=" fdeco">
                      Careers
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link className=" fdeco">
                      Contact
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/insights">
                    <Nav.Link className=" fdeco">
                      Insights
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={12} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Privacy Policy
                </h5>
                <Nav className="flex-column">
                  {/* <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Privacy Policy
                    </Nav.Link>
                  </LinkContainer> */}
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Copyright
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={12} md={6} lg={"auto"}>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Enquire more information
                </h5>
                <Form>
                  <Form.Group controlId="formBasicmail">
                    <InputGroup>
                      <Form.Control type="email"
                        // placeholder="Type Your Email"
                        style={{
                          background: "#FFFFFF",
                          borderRadius: "6px 0px 0px 6px"
                        }}
                        className={"border-left-0"}
                      />
                      <InputGroup.Prepend>
                        <InputGroup.Text className={"border-left-0"}
                          style={{
                            background: "#5AC4CB",
                            borderRadius: "0px 6px 6px 0px",
                            border: "0",
                            color: "#FFFFFF",
                            cursor: "pointer"
                          }}
                        >
                          Send
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to receive emails from Tamdeed" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
          <FooterBottom
          />
        </footer>
      </div >
    </>
  );
}

export default Footer;
