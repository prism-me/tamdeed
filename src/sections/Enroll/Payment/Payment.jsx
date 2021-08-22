import React, { useState } from "react";
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/Mask.jpg";
import GeneralPolicies from "../../../components/Modals/GeneralPolicies/GeneralPolicies";

function Payment(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div  className="Payment">
            <div className={"d-flex justify-content-center align-items-center"}>
                <button className={"FeesButton"}
                        onClick={() => setModalShow(true)}
                >
                    Kindly read the General Policies, Fee Details and Payment Methods carefully.
                </button>
                <GeneralPolicies show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        </div>

    );
}

export default Payment;
