import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import emngmnt from "../../../assets/images/aboutImages/businessmngmnt/mng1.png"
import emngmnt2 from "../../../assets/images/aboutImages/businessmngmnt/mng2.png"

export default function Management(props) {
    const { executiveManagement } = props

    return ( 
        executiveManagement &&
        <div className={"management"}>
            <h3 className={"title"}>
                Executive Management
            </h3>
            <div className="mngBgDiv">
                <Container>
                    <Row>
                        <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
                            <p className="subtitle">
                            “{executiveManagement[0]?.quotation}”
                                {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat” */}
                            </p>
                            <p className="subtitle1">
                                ~ {executiveManagement[0]?.name}
                            </p>
                            <p className="subtitle2">
                                <small>{executiveManagement[0]?.designation}</small>
                            </p>
                        </Col>
                        <Col sm={6} className="d-flex justify-content-center align-items-center">
                            <img src={executiveManagement[0]?.image} alt="img" className="img-fluid mgImg" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mngBgDiv2">
                <Container>
                    <Row>
                        <Col sm={6} className="d-flex justify-content-center align-items-center">
                            <img src={executiveManagement[1]?.image} alt="img" className="img-fluid mgImg" />
                        </Col>
                        <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
                            <p className="subtitle">
                                “{executiveManagement[1]?.quotation}”
                                {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat” */}
                            </p>
                            <p className="subtitle1">
                                ~ {executiveManagement[1]?.name}
                            </p>
                            <p className="subtitle2">
                                <small>{executiveManagement[1]?.designation}</small>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}