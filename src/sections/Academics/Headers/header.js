import React from 'react';
import header_bg from "../../../assets/images/agsbanners/SchoolMain.png";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../assets/images/agslogo/Logo (1).png";

const AcademicHeader = (props) => {
    return (

        <div
            className="home-header"
            style={{ backgroundImage: `url(${header_bg})` }}
        >
            {/*<img alt={"#"} className="home-header position-absolute" style={{visibility:"hidden",display:"inline-block",width:"100%"}} src={header_bg}/>*/}
            <Container>
                {/* <Row>
                    <Col sm={12} md={12} lg={5} xs={12}> */}
                <div className="description-column">
                    <div className="header-logo-wrapper">
                        <img src={logo} alt="AGS Logo" className="header-logo" />
                    </div>
                    <h1 className="intro-title">
                        {props.banner?.title}
                        {/* AMERICAN GULF SCHOOL */}
                    </h1>
                    <h2 className={"intro-title2"}>
                        {props.banner?.subtitle}
                        {/* EDUCATION DONE RIGHT */}
                    </h2>
                    {/* <p className={"subtitle"}>
                                Take a look at what the CEO of the school
                                <br /> has to say.
                            </p> */}
                </div>
                {/* </Col>
                </Row> */}
            </Container>
        </div>

    );
};

export default AcademicHeader;