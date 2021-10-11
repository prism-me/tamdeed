import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../../utils/constants"

function OurTeam(props) {

    return (
        <div className="ourteam">
            <h3 className={"InfoTitle"}>
                {
                    constants?.site_content?.our_team[
                    props.language
                    ]
                }
                {/* OUR TEAM */}
            </h3>
            <Container>
                <Row>
                    {
                        props.mentors.map((slides, index) => (
                            <Col sm={3} lg={3} md={6}>
                                <div className={"divstyle"}>
                                    <div className="imgheight"
                                        style={{ backgroundImage: `url(${slides.avatar})` }}
                                    >
                                        <h5 className={"overview-heading"}>
                                            {/* {slides.name} */}
                                            {
                                                props.isArabic
                                                    ? slides?.arabic?.name
                                                    : slides.name
                                            }
                                            <br />
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        props.isArabic
                                                            ? slides?.arabic?.description
                                                            : slides.description
                                                }}
                                            ></span>
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>

            </Container>
        </div>
    );
}
export default OurTeam;
