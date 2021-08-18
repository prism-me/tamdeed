import React, { useState } from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import header_bg from "../../../assets/images/agsbackgrounds/curriBg.jpg";
import {Grid} from "@material-ui/core";
import vid_bg_img from "../../../assets/images/about/vid_img.jpg";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function OurPrograms() {

  return (
    <div className="our-programs">
      <div
          className=" cont-hld"
          style={{ backgroundImage: `url(${header_bg})` }}
      >
        <div className="op-div">
        </div>
        <div className="wavy-div">
        </div>
        <div  className="vid-cont">
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
        {/*<div className="description-column">*/}
        {/*  <Container>*/}
        {/*    <Card shadow style={{borderRadius:"20px"}} className={"cardStyle"}>*/}
        {/*      <Card.Body>*/}
        {/*        <h2 className={" intro-title"}>*/}
        {/*          Join the waitlist for our 2022 programs.*/}
        {/*        </h2>*/}
        {/*        <Form>*/}
        {/*          <Form.Group className="mb-3" controlId="formGroupName">*/}
        {/*            <Form.Control type="text" placeholder="Enter your name" className={"formFields"} />*/}
        {/*          </Form.Group>*/}
        {/*          <Form.Group className="mb-3" controlId="formGroupEmail">*/}
        {/*            <Form.Control type="email" placeholder="Enter your email address" className={"formFields"}/>*/}
        {/*          </Form.Group>*/}
        {/*          <center>*/}
        {/*            <button className={"enroll"}>Enroll</button>*/}
        {/*          </center>*/}
        {/*        </Form>*/}
        {/*      </Card.Body>*/}
        {/*    </Card>*/}
        {/*  </Container>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default OurPrograms;
