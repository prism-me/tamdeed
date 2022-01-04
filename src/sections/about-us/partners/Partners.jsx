import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import partner1 from "../../../assets/images/partners/partner1.png"
import partner2 from "../../../assets/images/partners/partner2.png"
import partner3 from "../../../assets/images/partners/partner3.png"
import partner4 from "../../../assets/images/partners/partner4.png"
import partner5 from "../../../assets/images/partners/partner5.png"
import partner6 from "../../../assets/images/partners/partner6.png"
import partner7 from "../../../assets/images/partners/partner7.png"
import partner8 from "../../../assets/images/partners/partner8.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Partners() {

    return (
        <div className={"AboutPartners"}>
            <Container>
                <Row>
                    <Col sm={2} className={"d-flex justify-content-center align-items-center"}>
                        <h3 className={"Title"}> Partners</h3>
                    </Col>
                    <Col sm>
                        <Row className={"mb-3"}>
                            <Col sm>
                                <img src={partner1} alt="brand" className={"img-fluid"} />
                            </Col>
                            <Col sm>
                                <img src={partner2} alt="brand" className={"img-fluid"} />
                            </Col>
                            <Col sm>
                                <img src={partner3} alt="brand" className={"img-fluid"} />
                            </Col>
                            <Col sm>
                                <img src={partner4} alt="brand" className={"img-fluid"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <img src={partner5} alt="brand" className={"img-fluid"} />
                            </Col>
                            <Col sm>
                                <img src={partner6} alt="brand" className={"img-fluid"} />
                            </Col>
                            <Col sm>
                                <img src={partner7} alt="brand" className={"img-fluid"} />
                            </Col>
                            <Col sm>
                                <img src={partner8} alt="brand" className={"img-fluid"} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btnStyle">Learn more <ChevronRightIcon /></button>
                </div>
            </Container>
        </div>
    )
}