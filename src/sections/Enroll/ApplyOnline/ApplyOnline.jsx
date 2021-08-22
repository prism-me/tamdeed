import React, { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
import ApplyOnlineForm from "../ApplyOnlineForm";

export default function ApplyOnline() {
    const [openForm, setOpenForm] = useState(false);

    const handleBYI = (menuItem) => {
        setOpenForm(true)
    };
    return(
        <div className="ApplyOnline" id={"applyOnline"}>
                <Container>
                    <div className={"applyBackground d-flex justify-content-between align-items-center"}>
                            <p className={"m-0"}>Apply Online by filling the form and submitting related documents </p>
                            <button className="btn btn-lg shadow btnstyleB"
                                    onClick={handleBYI}
                            >
                                Apply Online
                            </button>
                    </div>
                    <ApplyOnlineForm
                        open={openForm}
                        setOpen={setOpenForm}
                    />
                </Container>
        </div>
    )
}