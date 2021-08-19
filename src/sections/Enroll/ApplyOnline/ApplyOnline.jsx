import React, { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
// import BookInterestDialog from "../../BookInterest/BookInterest";

export default function ApplyOnline() {
    // const [openBooking, setOpenBooking] = useState(false);

    // const handleBYI = (menuItem) => {
    //     setOpenBooking(true)
    // };
    return(
        <div className="ApplyOnline">

            <Container fluid>
                <Row>
                    <Col sm md="auto" lg>
                        <p>Apply Online by filling the form and submitting related documents </p>
                    </Col>
                    <Col sm md="auto" lg>
                        <button className="btn btn-lg shadow btnstyleB"
                                // onClick={handleBYI}
                        >
                            Book Now!
                        </button>
                    </Col>
                </Row>
            </Container>
            <BookInterestDialog
                open={openBooking}
                setOpen={setOpenBooking}/>
        </div>
    )
}