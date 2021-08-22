import React from 'react';
import header_bg from "../../../assets/images/academics/hd_bg.png";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../../assets/images/agslogo/Logo (1).png";

const AcademicHeader = () => {
    return (

        <div
            className="home-header wave-container ac-header"
            style={{ backgroundImage: `url(${header_bg})`}}
        >
            <img alt={"#"} className="home-header position-absolute" style={{visibility:"hidden",display:"inline-block",width:"100%"}} src={header_bg}/>
            <Container>
                <Row>
                    <Col sm={5}>
                        <div className="description-column">
                            <div className="header-logo-wrapper">
                                <img src={logo} alt="AGS Logo" className="header-logo" />
                            </div>
                            <h1 className="intro-title">
                                AMERICAN GULF SCHOOL
                            </h1>
                            <h2 className={"intro-title2"}>
                                EDUCATION DONE RIGHT
                            </h2>
                            <p className={"subtitle"}>
                                Take a look at what the CEO of the school
                                <br /> has to say about.
                            </p>
                        </div>
                    </Col>
                    <Col sm={{ span: 6}} className={"iconSpace"}>

                    </Col>
                </Row>
            </Container>
            <div className={"waves"}>
            </div>
        </div>

    );
};

export default AcademicHeader;