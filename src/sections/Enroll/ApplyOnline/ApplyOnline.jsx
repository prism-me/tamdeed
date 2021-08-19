import React, { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
// import BookInterestDialog from "../../BookInterest/BookInterest";

export default function ApplyOnline() {
    // const [openBooking, setOpenBooking] = useState(false);

    // const handleBYI = (menuItem) => {
    //     setOpenBooking(true)
    // };
    return(
        <div className="ApplyOnline" id={"#applyOnline"}>
                <Container>
                    <div className={"applyBackground d-flex justify-content-between align-items-center"}>
                    {/*<Row>*/}
                    {/*    <Col sm md="auto" lg>*/}
                            <p className={"m-0"}>Apply Online by filling the form and submitting related documents </p>
                        {/*</Col>*/}
                        {/*<Col sm md="auto" lg>*/}
                            <button className="btn btn-lg shadow btnstyleB"
                                // onClick={handleBYI}
                            >
                                Apply Online
                            </button>
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    </div>
                </Container>
            {/*<BookInterestDialog*/}
            {/*    open={openBooking}*/}
            {/*    setOpen={setOpenBooking}/>*/}
        </div>
    )
}