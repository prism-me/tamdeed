import React from 'react';
import health_bg_img from "../../../assets/images/about/health_.png";
import { Card, Col, Container, Row } from "react-bootstrap";

const AGSHealth = () => {
    return (
        <div className="agsHealth">
            <h3 className="Title">HEALTH AND SAFETY</h3>
            <Container>
                <Row>
                    <Col sm={12} lg={5}>
                        <img alt={"#"} src={health_bg_img} className="healtImg" />
                    </Col>
                    <Col sm={12} lg={7}>
                        <p className="subtitle">American Gulf School believes that the safety of every child is paramount and as such, places immense importance on the health, safety, and wellbeing of all its learners.
                            Here at AGS we have high safety expectations,  which ensure all staff are well aware of child protection, health, and safety.
                            A full-time nurse is on site with a fully functional child friendly, school clinic to help all our learners should they feel ill or in need of medical attention.
                            Our facilities are inspected daily to ensure they are in safe working order, and we have intensive risk assessments in place to ensure the safety of the learners both inside and outside the classroom.
                            We also have detailed and comprehensive policies in place to protect learners, staff, and visitors.We pride ourselves on being fully compliant with the UAE government's Covid directives to ensure our learners, staff, and parents are protected.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AGSHealth;