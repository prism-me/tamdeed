import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const ContactForm = (props) => {

    return (
        <div className="contact-form">
            <Container>
                <p className={"Title"}>
                    Tamdeed projects
                </p>
                <h3 className={"subtitle"}>
                    Call us anytime for enquiry
                </h3>
                <p className={"description"}>
                    <snall>Use the form below to get in touch with us</snall>
                </p>
            </Container>
            <div className={"bgDiv"}>
                <Container>
                    <Row>
                        <Col sm>
                            <Form>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group controlId="formName" className="mb-3">
                                            <Form.Control placeholder="Name*" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formEmail" className="mb-3">
                                            <Form.Control placeholder="Email*" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formPhone" className="mb-3">
                                            <Form.Control placeholder="Phone*" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formSubject" className="mb-3">
                                            <Form.Control placeholder="Subject" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group controlId="formMessage" className="mb-3">
                                            <Form.Control as="textarea" rows={3}
                                                placeholder="Message*"
                                                style={{ resize: "none" }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button className="btnStyle">Submit <ChevronRightIcon /></button>
                                </div>
                            </Form>
                        </Col>
                        <Col sm>
                            <Row>
                                <Col sm>
                                    <div className="contactDiv">
                                        <p className={"subtitle"}>
                                            Etisalat Services Holding, Etisalat Academy, Muhaisnah 2,
                                            P.O.Box 99100
                                        </p>
                                        <hr className='hrStyle' />
                                        <p className={"phone"}>
                                            <a href="tel:+971 4 204 3300">
                                                Tel: +971 4 204 3300
                                            </a>
                                        </p>
                                        <p className={"email"}>
                                            <a href="mailto:info@tamdeed.ae">
                                                Email: info@tamdeed.ae
                                            </a>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className="contactDiv">
                                        <p className={"subtitle"}>
                                            Etisalat T&A Building, 13th Floor, <br />
                                            P.O.Box 3838
                                        </p>
                                        <hr className='hrStyle' />
                                        <p className={"phone"}>
                                            <a href="tel:+971 2 616 2141">
                                                Tel: +971 2 616 2141
                                            </a>
                                        </p>
                                        <p className={"email"}>
                                            <a href="mailto:ict@tamdeed.ae">
                                                Email: ict@tamdeed.ae
                                            </a>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <p className={"bottomInfo"}>
                                        <a href="mailto:www.tamdeed.ae">
                                            www.tamdeed.ae
                                        </a>
                                        <a href="mailto:info@tamdeed.ae">
                                            info@tamdeed.ae
                                        </a>
                                        <a href="href://linkedin.com/company/tamdeedprojects">
                                            linkedin.com/company/tamdeedprojects
                                        </a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
export default ContactForm;