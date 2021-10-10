import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import schoolleft from "../../../assets/images/primary/PYPPhoto.jpg";
import ModalVideo from 'react-modal-video'
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { constants } from "../../../utils/constants"

function Schoolinclusion(props) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="SchoolTopspacing">
            <h3 className="Title">
                {props.secOne?.title}
                {/* PRIMARY SCHOOL */}
            </h3>
            <Container>
                <div>
                    <Row className={"justify-content-center align-items-center"}>
                        <Col sm={5} md={5} lg={5}>
                            <div className="d-flex justify-content-center align-items-center imgheight"
                                style={{ backgroundImage: `url(${props.secOneVideo?.image})` }}
                            >
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='vimeo'
                                        autoplay={true} isOpen={isOpen} videoId={props.secOneVideo?.video_link?.split("/")[3]} onClose={() => setOpen(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpen(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={7} md={7} lg={7} >
                            <p className={"subTitle"}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        props.secOne?.description
                                }}
                            >
                                {/* The AGS Primary School is a cross-curriculum program for learners aged between 6 and 11 years old. It combines 6 academic subjects: */}
                            </p>
                            {/* <p className={"subTitle"}>
                                <ul>
                                    <li>Arts</li>
                                    <li>Science</li>
                                    <li>Mathematics</li>
                                    <li>Social Studies (including UAE)</li>
                                    <li>Language</li>
                                    <li>Physical, Social and Personal Education</li>
                                </ul>
                            </p> */}
                            {/* <p className={"subTitle"}>
                                Integrated with six transdisciplinary themes:
                            </p>
                            <p className={"subTitle"}>
                                <ul>
                                    <li>How we organize ourselves</li>
                                    <li>Sharing the planet </li>
                                    <li>Where we are in place and time </li>
                                    <li>How we express ourselves</li>
                                    <li>How the world works</li>
                                    <li>Who we are</li>
                                </ol>
                            </p> */}
                        </Col>
                    </Row>
                </div>
                <div className={"SchoolMiddlespacing"} id={"ACADEMIC"}>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <p className={"subTitle"}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        props.secTwo?.description
                                }}
                            >
                                {/* Although the transdisciplinary themes are the same each year, the focus, content, central ideas, and lines of inquiry change. The PYP   program is a framework that is learner centered, inquiry and concept based, and is a technologically driven way of learning */}
                            </p>
                            <p className={"subTitle"}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        props.secThree?.description
                                }}
                            >
                                {/* Being inquiry based, the PYP program allows our learners ample opportunities to personalize their learning experiences, with the support and guidance of our highly skilled teaching and support staff. */}
                            </p>
                            <p className={"subTitle"}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        props.secFour?.description
                                }}
                            >
                                {/* Children are naturally inquisitive, and the PYP program allows the encouragement of this curiosity in our children’s learning. */}
                            </p>
                            <p className={"subTitle"}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        props.secFive?.description
                                }}
                            >
                                {/* The goal of the PYP program is to make all learning experiences authentic and allow our learners to make sense of the world they live in. */}
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="card-foot">
                    <div className="address-label">
                        <div className="icon">
                            <a href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618" className="text-decoration-none PmIcon" target="_blank">
                                <LocationOnIcon />{/* <img alt={"#"} src={location_icon} /> */}
                            </a>
                        </div>
                        <div className="text">
                            <p>
                                {
                                    constants?.site_content?.contact_us?.addr[
                                    props.language
                                    ]
                                }
                                {/* Al Rahmaniya Shaghrafah 4 - Sharjah - United Arab Emirates */}
                            </p>
                        </div>
                    </div>
                    <div className="info-group">
                        <div className="info-item">
                            <div className="txt">
                                <p>
                                    {
                                        constants?.site_content?.contact_us?.admission[
                                        props.language
                                        ]
                                    }
                                    {/* For Admissions */}
                                </p>
                            </div>
                            <div className="icon-txt-hld">
                                <div className="icon">
                                    <PhoneOutlinedIcon />
                                </div>
                                <div className="txt">
                                    <a href="tel: 05-69990871" className="text-decoration-none PmIcon">  05-69990871</a>
                                </div>
                            </div>
                            <div className="icon-txt-hld">
                                <div className="icon">
                                    <MailOutlineIcon />
                                </div>
                                <div className="txt">
                                    <a href="mailto:admissions@ags.ae" className="text-decoration-none PmIcon"> admissions@ags.ae</a>
                                </div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="txt">
                                <p>
                                    {
                                        constants?.site_content?.contact_us?.help_desk[
                                        props.language
                                        ]
                                    }
                                    {/* Help Desk & Queries */}
                                </p>
                            </div>
                            <div className="icon-txt-hld">
                                <div className="icon">
                                    <PhoneOutlinedIcon />
                                </div>
                                <div className="txt">
                                    <a href="tel:06-5061111" className="text-decoration-none PmIcon"> 06-5061111</a>
                                </div>
                            </div>
                            <div className="icon-txt-hld">
                                <div className="icon">
                                    <MailOutlineIcon />
                                </div>
                                <div className="txt">
                                    <a href="mailto:info@ags.ae" className="text-decoration-none PmIcon">info@ags.ae</a>
                                </div>
                            </div>
                        </div>
                        <div className="info-item ic">
                            <div className="icon-txt-hld ic">
                                <div className="icon">
                                    {/* <img alt={"#"} src={youtube_icon} /> */}
                                    <a href="https://www.facebook.com/American-Gulf-School-Sharjah-106277764954110" className={"PmIcon"} target="_blank">
                                        <FacebookIcon />
                                    </a>
                                </div>
                                <div className="icon">
                                    {/* <img alt={"#"} src={insta_icon} /> */}
                                    <a href="mailto:admissions@ags.ae" className={"PmIcon"}>
                                        <MailOutlineIcon />
                                    </a>
                                </div>
                                <div className="icon">
                                    {/* <img alt={"#"} src={fb_icon} /> */}
                                    <a href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618" className={"PmIcon"} target="_blank">
                                        <LocationOnIcon />
                                    </a>
                                </div>
                                <div className="icon">
                                    {/* <img alt={"#"} src={twitter_icon} /> */}
                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFmCcDlQ1gXZAAAAXwsFxY43sOt4cYab_4gAvY6oE1xWq3uaDQKZNL_mZjiN84VWH918aUvSOxZvlRF3Tcw8L-OTOg52iUs6gq9t3IX9h8f4seCgDit8xUABkKWId9PhKDaTNI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Famerican-gulf-school-sharjah%2F" className={"PmIcon"} target="_blank">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                                <div className="icon">
                                    {/* <img alt={"#"} src={twitter_icon} /> */}
                                    <a href="https://www.instagram.com/ags_shj/?hl=en" className={"PmIcon"} target="_blank">
                                        <InstagramIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </Container>
        </div >
    );
}
export default Schoolinclusion;
