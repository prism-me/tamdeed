import React, { useEffect } from "react";
import {Modal} from "react-bootstrap";
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
                        <ArrowBackIcon/>
                    </span>
                        <Modal.Body>
                            <h2 className={"Title"}>
                                GENERAL POLICIES
                            </h2>
                            <p className={"SubTitle"}>
                                For the Academic Year 2021/2022, parents will benefit from a discounted fee
                                of 30% off for the 1st child, 35% off for the 2nd child+ and 5% for family
                                referrals (admissions should be notified prior registration and a criteria should
                                be followed).
                            </p>
                            <p className={"SubTitle"}>
                                Please note, our fees do not include food services, student’s device, uniform or
                                transportation.
                            </p>
                            <h2 className={"Title"}>
                                APPLICATION FEE
                            </h2>
                            <p className={"SubTitle"}>
                                A one-time non-refundable/non-deductible/non-transferable application fee
                                of AED 525 inclusive of VAT payable at the time of application.
                            </p>
                            <h2 className={"Title"}>
                                REGISTRATION FEE
                            </h2>
                            <p className={"SubTitle"}>
                                Students granted a seat at American Gulf School will be required to remit an
                                admission registration fee of AED 2,500 payable within 10 days of the date
                                on the offer letter to secure their seat. This fee is non-refundable and is
                                adjustable against the first term’s tuition fees. The first term tuition is due
                                prior to the student’s first day of school.
                            </p>
                            <h2 className={"Title"}>
                                RE-REGISTRATION FEE
                            </h2>
                            <p className={"SubTitle"}>
                                The school will charge AED 2,500 as a re-registration deposit to confirm the
                                return of existing students in the new academic year. This deposit will be
                                deducted from the total tuition fee for the academic year in which the
                                admission is being sought. Re-registration for continuing students will not be
                                accepted unless all outstanding fees due have been paid in full.
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
                            <p className={"SubTitle"}>
                                Failure to pay tuition fees may result in:
                                Withholding of the student’s school reports, references, and/or exam
                                results.
                            </p>
                            <p className={"SubTitle"}>
                                Temporary or permanent expulsion or exclusion from school.
                            </p>
                            <h2 className={"Title"}>
                                Payment Methods and Bank Details
                            </h2>
                            <ul className={"UlStyle"}>
                                <li>Online payment</li>
                                <li>Bank Transfer</li>
                                <li>Debit/Credit Card</li>
                                <li>Cash</li>
                                <li>Cheques</li>
                            </ul>
                        </Modal.Body>
        </Modal>
    );
};

export default GeneralPolicies;
