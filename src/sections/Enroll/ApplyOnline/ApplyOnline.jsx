import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { STRINGS } from "../../../utils/base";
import { useHistory } from "react-router-dom";

export default function ApplyOnline() {
    // const [openForm, setOpenForm] = useState(false);
    //
    // const handleBYI = (menuItem) => {
    //     setOpenForm(true)
    // };
    function refreshPage() {
        window.location.reload(false);
    }
    const history = useHistory();
    return (
        <div className="ApplyOnline" id={"applyOnline"}>
            <Container>
                <div className={"applyBackground d-flex justify-content-between align-items-center"}>
                    <p className={"m-0"}>Apply Online by filling the form and submitting related documents </p>
                    <button className="btn btn-lg shadow btnstyleB"
                        // onClick={handleBYI}
                        onClick={() => {
                            history.push("/OnlineForm");
                            refreshPage()
                        }}
                    >
                        Apply Online
                    </button>
                </div>
                {/*<ApplyOnlineForm*/}
                {/*    open={openForm}*/}
                {/*    setOpen={setOpenForm}*/}
                {/*/>*/}
            </Container>
        </div>
    )
}