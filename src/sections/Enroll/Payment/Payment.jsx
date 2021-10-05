import React, { useState } from "react";
import GeneralPolicies from "../../../components/Modals/GeneralPolicies/GeneralPolicies";

function Payment(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="Payment">
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
