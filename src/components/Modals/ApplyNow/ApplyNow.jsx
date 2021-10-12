import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ApplyNow = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className="Documents"
      className={
        props.lang === "ar"
          ? "ApplyNow agsModalDirArabic"
          : "ApplyNow agsModalDir"
      }
      style={{ paddingLeft: "0px" }}
    >
      {/* <Container> */}
      {/* <Row>
                    <Col sm="auto"> */}
      <span className={
        props.lang === "ar"
          ? "modalIconArabic modalIcon"
          : "modalIcon"} onClick={props.onHide}>
        <ArrowBackIcon />
      </span>
      {/* </Col> */}
      {/* <Col sm> */}
      <Modal.Body>
        <h2 className={"Title"}
        >
          The ideal candidates will have the following:
        </h2>
        <ul className={"UlStyle"}>
          <li>Must be native English speakers or have an IELTS of 8 or above</li>
          <li>Previous experience in an American/IB school preferred</li>
          <li>Must hold a relevant teaching degree</li>
          <li>Proven excellent track record of excellent classroom teaching and pedagogical practices</li>
          <li>Ability to integrate technology into teaching</li>
          <li>Strong ability to effectively engage with children, parents and staff</li>
          <li>A Creative and innovative thinker</li>
          <li>Hard working, dedicated and committed to the school to ensure Academic Excellence</li>
          <li>Copy of Family Card (Emirati students only)</li>
          <li>Copy of parent’s photos</li>
          <li>Previous school’s Transfer Certificate* (see below) </li>
          <li>Acceptance Form</li>
          <li>Completion of student’s Medical Form</li>
          <li>Completion of student’s Pick-up Authorization Form</li>
          <li>Completion of Emergency Contact Form</li>
          <li>Completion of Photography/Social Media Permission Form</li>
        </ul>
        <p className={"SubTitle"}>
          We are committed to the safeguarding and promoting the welfare of children and young people and expect all staff and volunteers to share this commitment. All post holders are subject to appropriate vetting procedures and satisfactory Criminal Background Checks.
        </p>
        <h2 className={"Title"}>
          Package:
        </h2>
        <ul className={"UlStyle"}>
          <li>Salary range: Competitive tax-free salary</li>
          <li>Annual flight allowance to home country will be provided</li>
          <li>Free tuition for up to 2 children</li>
          <li> Studio accommodation</li>
          <li>Professional development will be fully/partially funded</li>
        </ul>
        <p className={"SubTitle"}>
          If this role interest you, please send an email to careers@ags.ae with your latest CV.
        </p>
        <center>
          <button className={"applynow"}>
            APPLY NOW
          </button>
        </center>
      </Modal.Body>
      {/* </Col> */}
      {/* </Row> */}
      {/* </Container> */}
    </Modal>
  );
};

export default ApplyNow;