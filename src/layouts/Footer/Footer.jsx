import React from "react";
import Container from "@material-ui/core/Container";
import { Col, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

function Footer(props) {
  return (
    <>
      <FooterTop />
      <div className={"footer-Wrape"}>
        <footer>
          <Container fluid>
            <Row>
              <Col sm={6} xs={12} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Contact Us
                </h5>
                <p>
                  Call us 24/7
                </p>
                <p>
                  <a href='tel:1800 97 97 69' class="contact-pannel-btn text-decoration-none fdeco FooterContact">
                    1800 97 97 69
                  </a>
                </p>
                <p>
                  Dis volutpat nisl urna gravida eu tempus. Nunc consectetur imperdiet auctor.
                </p>
              </Col>
              <Col sm={6} xs={12} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Company
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      About Us
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Affilate
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Contact
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={12} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  I’m a
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Vendor
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Delivery partner
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Social media influencer
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      User
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Col>
              <Col sm={6} xs={12} md={6} lg>
                <h5 className={"font-weight-bold FooterHeading"}>
                  Quick links
                </h5>
                <Nav className="flex-column">
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Privacy policy
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Term & Condition
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Shipping
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      Return
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link className=" fdeco">
                      FAQs
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
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
