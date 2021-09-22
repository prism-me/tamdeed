import React from 'react';
import exp_bg_img from "../../../assets/images/about/AGSExperince.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
const AgsExperience = () => {
    return (
        <div className="AGSExperience">
            <h3 className="Title">ABOUT THE AGS EXPERIENCE</h3>
            <Container>
                <Row>
                    <Col sm={12} lg={5}>
                        <img alt={"#"} src={exp_bg_img} className="healtImg" />
                    </Col>
                    <Col sm={12} lg={7}>
                        <p className="subtitle">
                            At American Gulf School, an American Curriculum School in Sharjah, we believe that a diverse curriculum broadens not only minds but opportunities too. Our learners are encouraged to question and experiment to find answers to critical thinking questions, giving each learner confidence within their own ability to achieve their full potential. It is designed and delivered to bring out the best in our learners, both academically and personally. We pride ourselves on being one of the best international schools in the UAE.
                        </p>
                        <button className={"viewButton"}>View more > </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AgsExperience;