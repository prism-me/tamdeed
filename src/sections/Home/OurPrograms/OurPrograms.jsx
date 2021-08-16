import React, { useState } from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import header_bg from "../../../assets/images/agsbackgrounds/curriBg.jpg";

function OurPrograms() {

  return (
    <div className="our-programs">
      <div
          className="Programs"
          style={{ backgroundImage: `url(${header_bg})` }}
      >
        <div className="description-column">
          <Container>
            <Card shadow style={{borderRadius:"20px"}} className={"cardStyle"}>
              <Card.Body>
                <h2 className={" intro-title"}>
                  Join the waitlist for our 2022 programs.
                </h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Control type="text" placeholder="Enter your name" className={"formFields"} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter your email address" className={"formFields"}/>
                  </Form.Group>
                  <center>
                    <button className={"enroll"}>Enroll</button>
                  </center>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
