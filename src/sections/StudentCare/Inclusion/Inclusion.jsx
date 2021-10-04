import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import std1 from "../../../assets/images/studentcare/inclusion.jpg";
import std2 from "../../../assets/images/studentcare/acadamicsupport.jpg";
import std3 from "../../../assets/images/studentcare/schoolclinic.jpg";
import std4 from "../../../assets/images/studentcare/Academic.jpg";
import std5 from "../../../assets/images/studentcare/Academic.jpg";

import ModalVideo from 'react-modal-video'
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Inclusion(props) {
    const [isOpenI, setOpenI] = useState(false)
    const [isOpenAS, setOpenAS] = useState(false)
    const [isOpenA, setOpenA] = useState(false)
    const [isOpenSC, setOpenSC] = useState(false)
    const [isOpenW, setOpenW] = useState(false)
    return (
        <div className="Inclusion">
            <Container>
                {props.studentCareData?.map((x, index) => (
                    <div className={"HowToSellspacing"} id={"INCLUSION"} key={index + x.title}>
                        <Row>
                            <Col sm={4} md={4} lg={4}>
                                <div className="d-flex justify-content-center align-items-center imgheight"
                                    style={{ backgroundImage: `url(${x.thumbnail})` }}
                                >
                                    <div className="video-promo-content mt-4 ">
                                        <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpenI} videoId={x?.video_link?.split("/")[3]} onClose={() => setOpenI(false)} />
                                        <button className="btn video-play-icon" onClick={() => setOpenI(true)}>
                                            <PlayArrowIcon className={"playSize"} />
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm md lg >
                                <h2 className="title">
                                    {
                                        props.isArabic
                                            ? x?.arabic?.title
                                            : x.title
                                    }
                                    {/* INCLUSION */}
                                </h2>
                                <p className={"subTitle"}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            props.isArabic
                                                ? x.description
                                                : x.description
                                    }}
                                >
                                    {/* American Gulf School is an equal opportunities school, and we strongly believe in equality and diversity. We welcome learners from any race, nationality or cultural background. */}
                                </p>
                                {/* <p className={"subTitle"}>
                                    We believe that a well-designed curriculum will result in learners that are lifelong learners and who will have the ability to become civic, business and community leaders and advocates of the UAE in the international community.
                                </p>
                                <p className={"subTitle"}>
                                    Furthermore, our school believes that these learning beliefs are applied to all learners including learners that are in need of special assistance due to exceptional needs. This includes children who are on the gifted end of the learning continuum and children with learning challenges.
                                </p> */}
                                <button className={"LearnmoreButton"}>
                                    Learn more
                                </button>
                            </Col>
                        </Row>
                    </div>
                ))}
                {/* <div className={"HowToSellspacing"} id={"ACADEMIC "}>
                    <Row>
                        <Col sm md lg >
                            <h3 className="title">
                                ACADEMIC SUPPORT
                            </h3>
                            <p className={"subTitle"}>
                                We believe that every learner deserves the same equal expectations from their learning. Therefore, we have in place extensive measures and use up to date academic support strategies to ensure every learner reaches and fulfils their potential. Learners have the opportunity to stay one hour after school finishes, working with their teachers on topics that they were not able to understand or complete during their school day.
                            </p>
                            <p className={"subTitle"}>
                                We ensure that all school administration staff dedicate one hour after school for academic support.
                            </p>
                            <p className={"subTitle"}>
                                We offer one session during school hours for those learners who have been identified (through assessment, voluntary, or discussion with parents) as needing intervention to ensure learners have the skills to access the curriculum.
                            </p>
                            <button className={"LearnmoreButton"}>
                                Learn more
                            </button>
                        </Col>
                        <Col sm={4} md={4} lg={4}>
                            <div className="d-flex justify-content-center align-items-center imgheight"
                                style={{ backgroundImage: `url(${std2})` }}
                            >
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpenAS} videoId="Ta5wnA7-X-o" onClose={() => setOpenAS(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpenAS(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={"HowToSellspacing"} id={"SCHOOL"}>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <div className="d-flex justify-content-center align-items-center imgheight"
                                style={{ backgroundImage: `url(${std3})` }}
                            >
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpenSC} videoId="UwVUxm0PilM" onClose={() => setOpenSC(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpenSC(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col sm md lg >
                            <h3 className="title">
                                SCHOOL CLINIC
                            </h3>
                            <p className={"subTitle"}>
                                At American Gulf School every child matters and their safety is paramount. We have ensured that our clinic is child friendly, with a fully qualified nurse on hand to administer first aid, medication, or just a little tender love and care, "TLC".
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className={"HowToSellspacing"} id={"GUIDANCE"}>
                    <Row>
                        <Col sm md lg >
                            <h3 className="title">
                                ACADEMIC GUIDANCE
                            </h3>
                            <p className={"subTitle"}>
                                We pride ourselves at AGS on enabling our learners to have a happy and confident educational journey. In order to fulfil this, not only do we employ the best of the best educators but also a comprehensive guidance team, from a Social Worker, Guidance Counselor, to a Head of Inclusion who are on hand to give help and guidance to any fears or questions they may have about any aspect of their learning or social, emotional wellbeing.
                            </p>
                        </Col>
                        <Col sm={4} md={4} lg={4}>
                            <div className="d-flex justify-content-center align-items-center imgheight"
                                style={{ backgroundImage: `url(${std4})` }}
                            >
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpenA} videoId="JltBgY3eeis" onClose={() => setOpenA(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpenA(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={"HowToSellspacing"} id={"WELLBEING"}>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <div className="d-flex justify-content-center align-items-center imgheight"
                                style={{ backgroundImage: `url(${std5})` }}
                            >
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpenW} videoId="ngB-1yju0zs" onClose={() => setOpenW(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpenW(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col sm md lg >
                            <h3 className="title">
                                WELLBEING
                            </h3>
                            <p className={"subTitle"}>
                                The care, wellbeing, and safety of each learner are paramount at American Gulf School. All our staff, from maintenance through to the principal are aware of Child Safety and all risk assessment policies.
                            </p>
                            <p className={"subTitle"}>
                                Teachers constantly assess any risk (physical or emotional) either inside or outside the classroom or online and if need be, act swiftly and accordingly. Having a safe and caring environment to learn and play, enables staff to ensure all learner needs, be it emotionally, physically, or learning to be identified quickly and dealt with in a positive manner.
                            </p>
                            <p className={"subTitle"}>
                                We want our learners to have the confidence to speak out if they feel uncomfortable or need to speak to an adult about any aspect of their lives and so AGS employs a fully qualified counselor who is always available for learners to talk to.
                            </p>
                        </Col>
                    </Row>
                </div> */}
            </Container>
        </div>
    );
}
export default Inclusion;
