import React, { useState ,useRef } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { API } from "../../../http/API";
import { Alert } from "react-bootstrap"

const ContactForm = (props) => {

    let initialObject = { name: "", email: "", phone: "", subject: "", message: "" }
    const [alertData, setAlertData] = useState({ varient: "success", alertText: "", show: false });
    const [formData, setFormData] = useState(initialObject);
    const [formError, setformError] = useState({ name: false, email: false, phone: false, message: false });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        let upFormError = { ...formError }
        if (!formData.name) {
            upFormError.name = true
        } else {
            upFormError.name = false
        }
        if (!formData.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            upFormError.email = true
        } else {
            upFormError.email = false
        }

        if (!formData.phone) {
            upFormError.phone = true
        } else {
            upFormError.phone = false
        }

        if (!formData.message) {
            upFormError.message = true
        } else {
            upFormError.message = false
        }

        setformError(upFormError)
        if (upFormError.email || upFormError.phone || upFormError.message || upFormError.name) {
            return false;
        }
        
        setIsLoading(true);
        
        API.post('/contact-us', formData).then((res) => {
            setAlertData({ varient: "success", show: true, alertText: "Data submitted Successfully" })
            setFormData(initialObject)
            setIsLoading(false);
        })
        .catch((err) => {
            setAlertData({ varient: "danger", show: true, alertText: "Something went wrong please try later" });
            
            setIsLoading(false);
            }
    );

    }

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
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    {/* <Col sm={6}>
                                        <Form.Group controlId="formName" className="mb-3">
                                            <Form.Control placeholder="Name*" />
                                        </Form.Group>
                                    </Col> */}
                                    <Col sm={6}>
                                        <Form.Group controlId="name" className="mb-3">
                                            <Form.Control className='contact-usForm' placeholder="Name*" name="name" value={formData.name} onChange={handleChange} style={formError.name ? { border: "1px solid red" } : {}} />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formEmail" className="mb-3">
                                            <Form.Control className='contact-usForm' placeholder="Email*" name="email" value={formData.email} onChange={handleChange} style={formError.email ? { border: "1px solid red" } : {}} />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formPhone" className="mb-3">
                                            <Form.Control className='contact-usForm' placeholder="Phone*" name="phone" value={formData.phone} onChange={handleChange} style={formError.phone ? { border: "1px solid red" } : {}} />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formSubject" className="mb-3">
                                            <Form.Control className='contact-usForm' placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group controlId="formMessage" className="mb-3">
                                            <Form.Control className='contact-usForm' as="textarea" rows={3}
                                                placeholder="Message*"
                                                // style={{ resize: "none" }}
                                                name="message" value={formData.message}
                                                onChange={handleChange}
                                                style={formError.message ? { border: "1px solid red", resize: "none" } : { resize: "none" }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                { isLoading && 
                                // (isLoading === true) ? "disabled" : ""   
                                    <div className="text-center">
                                    <div class="spinner-border" role="status"></div>
                                    </div>
                                } 
                                {alertData.show ?
                                    <Alert variant={alertData.varient} show={alertData.show} onClose={() => setAlertData({ ...alertData, show: false })} dismissible>
                                        {alertData.alertText}
                                    </Alert>
                                    :
                                    <div className="d-flex justify-content-center align-items-center">

                                         <button 
                                         className="btnStyle"
                                         >Submit <ChevronRightIcon /></button>
                                       
                                    </div>
                                }

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
                                            <a href="mailto:info@tamdeed.ae">
                                                Email: info@tamdeed.ae
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