import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Documents = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // className="Documents"
            className={
                props.lang === "ar"
                    ? "Documents agsModalDirArabic"
                    : "Documents agsModalDir"
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
                <p className={"SubTitle"}
                    dangerouslySetInnerHTML={{
                        __html:
                            props.documentData?.description
                    }}
                >
                </p>
                {/*<h2 className={"Title"}
                            >
                                Documents to be submitted once a student has been accepted and enrolled:
                            </h2>
                            <ul className={"UlStyle"}>
                                <li>Copy of student’s Emirates ID (both sides)</li>
                                <li>Copy of student’s Residency Visa</li>
                                <li>Copy of student’s Immunization Card</li>
                                <li>Copy of student’s Birth Certificate</li>
                                <li>Copy of student’s photo</li>
                                <li>Copy of parent’s passports</li>
                                <li>Copy of parent’s Emirates ID (both sides)</li>
                                <li>Copy of parent’s Residency Visa</li>
                                <li>Copy of Family Card (Emirati students only)</li>
                                <li>Copy of parent’s photos</li>
                                <li>Previous school’s Transfer Certificate* (see below) </li>
                                <li>Acceptance Form</li>
                                <li>Completion of student’s Medical Form</li>
                                <li>Completion of student’s Pick-up Authorization Form</li>
                                <li>Completion of Emergency Contact Form</li>
                                <li>Completion of Photography/Social Media Permission Form</li>
                            </ul>
                            <h2 className={"Title"}> *Transfer Certificate</h2>
                            <p className={"SubTitle"}>
                                The Transfer Certificate (TC) is a document required by the UAE Ministry of
                                Education to register a student in any school in the UAE. The form should be
                                completed on your child’s current school's letterhead and signed and stamped by
                                the school. This is done close to the withdrawal date to reflect your child’s last day of
                                school.
                            </p>
                            <p className={"SubTitle"}>
                                Note: Depending on the school's location (not curriculum), the TC needs the
                                following attestation:
                            </p>
                            <ul className={"UlStyle"}>
                                <li> United States, Canada, Western Europe, Australia or New Zealand: only the stamp
                                    and signature of the school</li>
                                <li>
                                    Gulf Cooperation Council (GCC) countries: stamp and signature of the school and
                                    Ministry of Education of the GCC country
                                </li>
                                <li>
                                    All other countries: stamp and signature of the school, the country's Ministry of
                                    Education and Foreign Affairs, and the UAE Embassy in that country.
                                </li>
                            </ul>
                            <h2 className={"Title"}>
                                Payment Methods and Bank Details
                            </h2>
                            <ul className={"UlStyle"}>
                                <li>Online payment</li>
                                <li>Bank Transfer</li>
                                <li>Debit/Credit Card</li>
                                <li>Cash</li>
                                <li>Cheques</li>
                            </ul> */}
            </Modal.Body>
            {/* </Col> */}
            {/* </Row> */}
            {/* </Container> */}
        </Modal>
    );
};

export default Documents;
