import React, { useEffect } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const GeneralPolicies = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="GeneralPolicies"
            style={{ paddingLeft: "0px" }}
        >
            <span className={"modalIcon"} onClick={props.onHide}>
                <ArrowBackIcon />
            </span>
            <Modal.Body>
                <p className={"SubTitle"}
                    dangerouslySetInnerHTML={{
                        __html:
                            props.genrPolicyData?.description
                    }}
                >
                </p>

                {/* <h2 className={"Title"}>
                    GENERAL POLICIES
                </h2>
                <p className={"SubTitle"}>
                    Please note, our fees <b> do not </b> include food services, student’s device, uniform, or
                    transportation. It includes books, notebooks, and resources only.
                </p>
                <h2 className={"Title"}>
                    APPLICATION FEE
                </h2>
                <p className={"SubTitle"}>
                    A one-time non-refundable/non-deductible/non-transferable application fee of AED 525 inclusive
                    of VAT payable at the time of application.
                </p>
                <h2 className={"Title"}>
                    REGISTRATION FEE
                </h2>
                <p className={"SubTitle"}>
                    Students granted a seat at American Gulf School will be required to remit an admission <b>registration
                        fee of AED 2,500 </b> payable within 10 days of the date on the offer letter to secure their seat.This
                    fee is non-refundable and is adjustable against the first term’s tuition fees.The first term tuition is
                    due prior to the student’s first day of school.
                </p>
                <h2 className={"Title"}>
                    RE-REGISTRATION FEE
                </h2>
                <p className={"SubTitle"}>
                    The school will charge AED 2,500 as a re-registration deposit to confirm the return of existing
                    students in the new academic year. This deposit will be deducted from the total tuition fee for the
                    academic year in which the admission is being sought. Re-registration for continuing students will
                    not be accepted unless all outstanding fees due have been paid in full.
                </p>
                <h2 className={"Title"}>
                    TUITION FEE REFUND
                </h2>
                <p className={"SubTitle"}>
                    As per SPEA’s regulations.
                </p>
                <h2 className={"Title"}>
                    NON-PAYMENT OF FEES
                </h2>
                <ul className={"UlStyle"}>
                    Failure to pay tuition fees may result in:
                    <li>withholding of the student’s school reports, references, and/or exam results.</li>
                    <li>temporary or permanent expulsion or exclusion from school.</li>
                </ul>
                <h2 className={"Title"}>
                    Payment Methods
                </h2>
                <Container fluid>
                    <Row>
                        <Col>
                            <ul className={"UlStyle pl-4"}>
                                <li>Online Payment</li>
                                <li>Bank Transfer</li>
                                <li>Debit/Credit Card</li>
                                <li>Cash</li>
                                <li>Cheques</li>
                            </ul>
                        </Col>
                        <Col>
                            <h2 className={"Title"}>
                                Contact Details:
                            </h2>
                            <p className="mb-0"><a href="tel:056-9990871" className={"SubTitle text-decoration-none"}>
                                Mob: 056-9990871
                            </a></p>
                            <a href="mailto:admissions@ags.ae" className={"SubTitle text-decoration-none"}>
                                Email: admissions@ags.ae
                            </a>
                        </Col>
                    </Row>
                </Container> */}
            </Modal.Body>
        </Modal>
    );
};

export default GeneralPolicies;
