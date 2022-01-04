import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import emngmnt from "../../../assets/images/aboutImages/businessmngmnt/mng1.png"
import emngmnt2 from "../../../assets/images/aboutImages/businessmngmnt/mng2.png"

export default function Management() {

    return (
        <div className={"management"}>
            <h3 className={"title"}>
                Executive Management
            </h3>
            <div className="mngBgDiv">
                <Container>
                    <Row>
                        <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
                            <p className="subtitle">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”
                            </p>
                            <p className="subtitle1">
                                ~ Abdulla Hashim
                            </p>
                            <p className="subtitle2">
                                <small>CEO / Etisalat Services Holding CEO</small>
                            </p>
                        </Col>
                        <Col sm={6} className="d-flex justify-content-center align-items-center">
                            <img src={emngmnt} alt="img" className="img-fluid mgImg" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mngBgDiv2">
                <Container>
                    <Row>
                        <Col sm={6} className="d-flex justify-content-center align-items-center">
                            <img src={emngmnt2} alt="img" className="img-fluid mgImg" />
                        </Col>
                        <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
                            <p className="subtitle">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”
                            </p>
                            <p className="subtitle1">
                                ~ Tareq Salman, General Manager
                            </p>
                            <p className="subtitle2">
                                <small>GM / Tamdeed Projects</small>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}