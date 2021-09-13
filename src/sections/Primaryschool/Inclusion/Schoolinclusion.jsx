import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import schoolleft from "../../../assets/images/Primaryschool/primaryschool.png";
import ModalVideo from 'react-modal-video'
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Schoolinclusion() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="Inclusion">
            <Container>
                <div className={"SchoolTopspacing"} id={"INCLUSION"}>
                    <Row className={"justify-content-center align-items-center"}>
                        <Col sm={5} md={5} lg={5}>
                            <div className="d-flex justify-content-center align-items-center imgheight"
                                style={{ backgroundImage: `url(${schoolleft})` }}
                            >
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpen(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={7} md={7} lg={7} >
                            <h3 className="title">
                                PRIMARY SCHOOL
                            </h3>
                            <p className={"subTitle"}>
                                The AGS Primary School is a cross-curriculum program for learners aged between 6 and 11 years old. It combines 6 academic subjects:
                            </p>
                            <p className={"subTitle"}>
                                <ul>
                                    <li>Arts</li>
                                    <li>Science</li>
                                    <li>Mathematics</li>
                                    <li>Social Studies (including UAE)</li>
                                    <li>Language</li>
                                    <li>Physical, Social and Personal Education</li>
                                </ul>
                            </p>
                            <p className={"subTitle"}>
                                Integrated with six transdisciplinary themes:
                                <ol>
                                    <li>How we organize ourselves</li>
                                    <li>Sharing the planet </li>
                                    <li>Where we are in place and time </li>
                                    <li>How we express ourselves</li>
                                    <li>How the world works</li>
                                    <li>Who we are</li>
                                </ol>
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className={"SchoolMiddlespacing"} id={"ACADEMIC"}>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <p className={"subTitle"}>
                                Although the transdisciplinary themes are the same each year, the focus, content, central ideas, and lines of inquiry change. The PYP   program is a framework that is learner centered, inquiry and concept based, and is a technologically driven way of learning
                            </p>
                            <p className={"subTitle"}>
                                Being inquiry based, the PYP program allows our learners ample opportunities to personalize their learning experiences, with the support and guidance of our highly skilled teaching and support staff.
                            </p>
                            <p className={"subTitle"}>
                                Children are naturally inquisitive, and the PYP program allows the encouragement of this curiosity in our children’s learning.
                            </p>
                            <p className={"subTitle"}>
                                The goal of the PYP program is to make all learning experiences authentic and allow our learners to make sense of the world they live in.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Schoolinclusion;
