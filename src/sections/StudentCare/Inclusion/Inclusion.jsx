import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import img1 from "../../../assets/images/ug-images/450x350(5).jpg";
import img2 from "../../../assets/images/ug-images/450x350(5).jpg";
import img3 from "../../../assets/images/ug-images/450x350(5).jpg";
import img4 from "../../../assets/images/ug-images/450x350(5).jpg";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline/';

function Inclusion() {
    return (
        <div className="Inclusion">
            <Container>
                <div className={"HowToSellspacing"}>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <img src={img1} alt="" className={"img-fluid InclusionImg"}/>
                        </Col>
                        <Col sm md lg >
                            <h3 className="title">
                                INCLUSION
                            </h3>
                            <p className={"subTitle"}>
                                American Gulf School is an equal opportunities school and we
                                strongly believe in equality and diversity. We welcome learners
                                from any race, nationality or cultural background.
                            </p>
                            <p className={"subTitle"}>
                                We believe that a well-designed curriculum will result in learners
                                that are lifelong learners and will have the ability to become civic,
                                business and community leaders and advocates of the UAE in the
                                international community.
                            </p>
                            <p className={"subTitle"}>
                                Furthermore, our school believes that these learning beliefs are
                                applied to all learners including learners that are in need of
                                special assistance due to exceptional needs. This includes children
                                who are on the gifted end of the learning continuum and children
                                with learning challenges.
                            </p>
                            <button className={"LearnmoreButton"}>
                                Learn more
                            </button>
                        </Col>
                    </Row>
                </div>
                <div className={"HowToSellspacing"}>
                    <Row>
                        <Col sm md lg >
                            <h3 className="title">
                                ACADEMIC SUPPORT
                            </h3>
                                <p className={"subTitle"}>
                                    We believe that every learner deserves the same equal
                                    expectations from their learning. Therefore, we have in place
                                    extensive measures to ensure every learner reaches and fulfils their
                                    potential. Learners have the opportunity to stay one hour after
                                    school finishes, working with their teachers on topics that they
                                    were not able to understand or complete during their school day.
                                </p>
                                <p className={"subTitle"}>
                                    We ensure that all school administration staff dedicates one hour
                                    after school for academic support.
                                </p>
                                <p className={"subTitle"}>
                                    We offer one session during school hours for those learners who
                                    have been identified (through assessment, voluntary or discussion
                                    with parents) as needing intervention to ensure learners have the
                                    skills to access the curriculum.
                                </p>
                            <button className={"LearnmoreButton"}>
                                Learn more
                            </button>
                        </Col>
                        <Col sm={3} md={3} lg={3}>
                            <img src={img2} alt="" className={"img-fluid InclusionImg"}/>
                        </Col>
                    </Row>
                </div>
                <div className={"HowToSellspacing"}>
                <Row>
                    <Col sm={4} md={4} lg={4}>
                        <img src={img1} alt="" className={"img-fluid InclusionImg"}/>
                    </Col>
                    <Col sm md lg >
                        <h3 className="title">
                            SCHOOL CLINIC
                        </h3>
                        <p className={"subTitle"}>
                            At American Gulf School every child matters and their safety is
                            paramount. We have ensured that our clinic is child friendly, with a
                            fully qualified nurse on hand to administer first aid, medication or
                            just a little tender, love and care "TLC".
                        </p>
                    </Col>
                </Row>
                </div>
                <div className={"HowToSellspacing"}>
                <Row>
                    <Col sm md lg >
                        <h3 className="title">
                            ACADEMIC GUIDANCE
                        </h3>
                        <p className={"subTitle"}>
                            We pride ourselves at AGS on enabling our learners to have a
                            happy and confident educational journey. In order to fulfil this, not
                            only do we employ the best of the best educators but also a
                            comprehensive guidance team, from social worker, guidance
                            counselor, and a Head of Inclusion who are on hand to give help
                            and guidance to any fears or questions they may have about any
                            aspect of their learning or social, emotional wellbeing.
                        </p>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                        <img src={img2} alt="" className={"img-fluid InclusionImg"}/>
                    </Col>
                </Row>
                </div>
                <div className={"HowToSellspacing"}>
                <Row>
                    <Col sm={4} md={4} lg={4}>
                        <img src={img1} alt="" className={"img-fluid InclusionImg"}/>
                    </Col>
                    <Col sm md lg >
                        <h3 className="title">
                            WELLBEING
                        </h3>
                        <p className={"subTitle"}>
                            The care, wellbeing and safety of each learner are paramount at
                            American Gulf School. All our staff, from maintenance through to
                            the principal are aware of Child Safety and all risk assessment
                            policies.
                        </p>
                        <p className={"subTitle"}>
                            Teachers constantly assess any risk (physical or emotional) either
                            inside or outside the classroom or online and if need be, act swiftly
                            and accordingly. Having a safe and caring environment to learn
                            and play enables staff to ensure all needs, be it emotionally,
                            physically or learning to be identified quickly and dealt with in a
                            positive manner.
                        </p>
                        <p className={"subTitle"}>
                            We want our learners to have the confidence to speak out if they
                            feel uncomfortable or need to speak to an adult about any
                            aspect of their lives and so AGS employs a fully qualified counselor
                            who is always available for learners to talk to.
                        </p>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}
export default Inclusion;
