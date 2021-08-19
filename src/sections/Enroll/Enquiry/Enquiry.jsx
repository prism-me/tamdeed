import React, { useState } from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import header_bg from "../../../assets/images/agsbackgrounds/curriBg.jpg";
import {Hidden} from "@material-ui/core";

function Enquiry() {

    return (
        <div className="Enquiry-page">
            <h1 className="Title">
                ENQUIRY
            </h1>
            <Hidden smDown>
                <div
                    className="Enquiry"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    <div className="op-div">
                    </div>
                    <div className="wavy-div">
                    </div>
                    <div  className="description-column">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <Card shadow style={{borderRadius:"20px"}} className={"cardStyle"}>
                                        <Card.Body>
                                            <h2 className={" intro-title"}>
                                                Request A Call Back
                                            </h2>
                                            <p className={"subTitle"}>
                                                For more information about admissions and tours, request a call back from our
                                                team by filling in the form below.
                                            </p>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formGroupName">
                                                    <Form.Control type="text" placeholder="Parent/Guardian’s Name" className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <Form.Control type="text" placeholder="Parent/Gurdian’s Mobile Number" className={"formFields"}/>
                                                </Form.Group>
                                                <center>
                                                    <button className={"enroll"}>SUBMIT</button>
                                                </center>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm>
                                    <Card shadow style={{borderRadius:"20px"}} className={"cardStyle"}>
                                        <Card.Body>
                                            <h2 className={" intro-title"}>
                                                Book a School Tour
                                            </h2>
                                            <p className={"subTitle"}>
                                                Book a tour with our Admissions team to visit American Gulf School Sharjah,
                                                located in Al Rahmaniya 4, Sharjah.
                                                To book a tour of American Gulf School, please fill out the form below and a
                                                member of our Admissions team will contact you to arrange a suitable time
                                            </p>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formGroupName">
                                                    <Form.Control type="text" placeholder="Parent/Guardian’s Full Name" className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Control type="email" placeholder="Parent/Gurdian’s Email" className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <Form.Control type="text" placeholder="Parent/Gurdian’s Mobile Number" className={"formFields"}/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <Form.Control type="text" placeholder="Child’s Date Of Birth" className={"formFields"}/>
                                                </Form.Group>
                                                <center>
                                                    <button className={"enroll"}>SUBMIT</button>
                                                </center>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Hidden>
           <Hidden mdUp>
               <Container fluid>
                   <Row>
                       <Col sm>
                           <Card shadow style={{borderRadius:"20px"}} className={"cardStyleMBL"}>
                               <Card.Body>
                                   <h2 className={" intro-title"}>
                                       Request A Call Back
                                   </h2>
                                   <p className={"subTitle"}>
                                       For more information about admissions and tours, request a call back from our
                                       team by filling in the form below.
                                   </p>
                                   <Form>
                                       <Form.Group className="mb-3" controlId="formGroupName">
                                           <Form.Control type="text" placeholder="Parent/Guardian’s Name" className={"formFields"} />
                                       </Form.Group>
                                       <Form.Group className="mb-3" controlId="formGroupNumber">
                                           <Form.Control type="text" placeholder="Parent/Gurdian’s Mobile Number" className={"formFields"}/>
                                       </Form.Group>
                                       <center>
                                           <button className={"enroll"}>SUBMIT</button>
                                       </center>
                                   </Form>
                               </Card.Body>
                           </Card>
                       </Col>
                       <Col sm>
                           <Card shadow style={{borderRadius:"20px"}} className={"cardStyleMBL"}>
                               <Card.Body>
                                   <h2 className={" intro-title"}>
                                       Book a School Tour
                                   </h2>
                                   <p className={"subTitle"}>
                                       Book a tour with our Admissions team to visit American Gulf School Sharjah,
                                       located in Al Rahmaniya 4, Sharjah.
                                       To book a tour of American Gulf School, please fill out the form below and a
                                       member of our Admissions team will contact you to arrange a suitable time
                                   </p>
                                   <Form>
                                       <Form.Group className="mb-3" controlId="formGroupName">
                                           <Form.Control type="text" placeholder="Parent/Guardian’s Full Name" className={"formFields"} />
                                       </Form.Group>
                                       <Form.Group className="mb-3" controlId="formGroupEmail">
                                           <Form.Control type="email" placeholder="Parent/Gurdian’s Email" className={"formFields"} />
                                       </Form.Group>
                                       <Form.Group className="mb-3" controlId="formGroupNumber">
                                           <Form.Control type="text" placeholder="Parent/Gurdian’s Mobile Number" className={"formFields"}/>
                                       </Form.Group>
                                       <Form.Group className="mb-3" controlId="formGroupNumber">
                                           <Form.Control type="text" placeholder="Child’s Date Of Birth" className={"formFields"}/>
                                       </Form.Group>
                                       <center>
                                           <button className={"enroll"}>SUBMIT</button>
                                       </center>
                                   </Form>
                               </Card.Body>
                           </Card>
                       </Col>
                   </Row>
               </Container>
           </Hidden>
        </div>
    );
}

export default Enquiry;
