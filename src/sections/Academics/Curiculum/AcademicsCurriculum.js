import React from 'react';
import { Grid } from "@material-ui/core";
import kindergarten_img from "../../../assets/images/Curriculum/Kindergarten.png";
import middle_school from "../../../assets/images/Curriculum/MiddleSchool.png";
import p_school from "../../../assets/images/Curriculum/PrimarySchool.png";
import { useHistory } from "react-router-dom";

const AcademicsCurriculum = (props) => {
    const history = useHistory();
    return (
        <div className={"Academics"} id={"Our_Curriculum"}>
            <h3 className={"InfoTitle"}>
                {props.curriSection?.title}
                {/* OUR CURRICULUM */}
            </h3>
            <Grid container className="d-flex w-100 justify-content-center">
                <Grid item className="curr-sec">
                    <p
                        dangerouslySetInnerHTML={{
                            __html:
                                props.curriSection?.description
                        }}
                    >
                        {/* The American Gulf School curriculum is project-based, and learner centered. It encourages, requires, and builds critical thinking, driven by inquiry combined with both knowledge and comprehensive skills. This allows learners to make authentic connections between different theories and be able to apply this knowledge in unfamiliar real-life situations. The use of our STREAM, Media, Fabrication, and Design Labs, give our learners the practice and experience to apply the knowledge and skills they are being taught to succeed within the 21st century. */}
                    </p>
                </Grid>
            </Grid>
            <Grid className="d-flex w-100 justify-content-center">
                <Grid className="d-flex w-100 justify-content-center flex-wrap">
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push(
                                `/${props.language
                                }/KinderGarten`
                            );
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${props?.kinderImg})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <h5 className={"overview-heading position-static text-nowrap"}>
                                    {props.kinderSection?.title}
                                    {/* Kindergarten */}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push(
                                `/${props.language
                                }/Primary-school`
                            );
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${props?.primImg})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <h5 className={"overview-heading position-static text-nowrap"}>
                                    {props.primSection?.title}
                                    {/* Primary School */}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push(
                                `/${props.language
                                }/Middle-school`
                            );
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${props?.midImg})`, }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <h5 className={"overview-heading position-static text-nowrap"}>
                                    {props.midSection?.title}
                                    {/* Middle School */}
                                </h5>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid className="d-flex w-100 justify-content-center" >
                <Grid className="curr-footer-text" >
                    <p
                        dangerouslySetInnerHTML={{
                            __html:
                                props.quote?.description
                        }}
                    >
                        {/* “Coming together is a <strong>beginning</strong>, staying together is <strong>progress</strong>, and working together is <strong>success.</strong>” Henry Ford. */}
                    </p>
                </Grid>
            </Grid>
        </div>
    )
};

export default AcademicsCurriculum;