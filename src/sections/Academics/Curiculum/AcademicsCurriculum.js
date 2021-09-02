import React from 'react';

import { Grid } from "@material-ui/core";
import kindergarten_img from "../../../assets/images/academics/kindergarten_img.jpg";
import middle_school from "../../../assets/images/academics/m_school.jpg";
import p_school from "../../../assets/images/academics/p_school.jpg";
import { useHistory } from "react-router-dom";

const AcademicsCurriculum = () => {
    const history = useHistory();

    return (
        <div className={"Academics"}>
            <h3 className={"InfoTitle"}>OUR CURRICULUM</h3>
            <Grid container className="d-flex w-100 justify-content-center">
                <Grid item className="curr-sec">
                    <p>The school curriculum is project-based, and student centered. It encourages, requires, and builds
                        critical thinking, driven by inquiry combined with both knowledge and comprehensive skills. This
                        allows learners to make authentic connections between different theories and be able to apply
                        this knowledge in unfamiliar real-life situations. The use of our STREAM, Media, Fabrication and
                        Design Labs, gives our learners the practice and experience to apply their knowledge and skills
                        they are being taught to succeed within the 21st century.</p>
                </Grid>
            </Grid>
            <Grid className="d-flex w-100 justify-content-center">
                <Grid className="d-flex w-100 justify-content-center flex-wrap">
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push('/KinderGarten');
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${kindergarten_img})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <h5 className={"overview-heading position-static text-nowrap"}>
                                    Kindergarten
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push('/primary-school');
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${p_school})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <h5 className={"overview-heading position-static text-nowrap"}>
                                    Primary School
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className={"mx-2 divstyle wc"} >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${middle_school})`, }}
                        >
                            <div className="video-promo-content mt-4 "
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    history.push('/Middle-school');
                                }}
                            >
                                <h5 className={"overview-heading position-static text-nowrap"}>
                                    Middle School
                                </h5>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid className="d-flex w-100 justify-content-center" >
                <Grid className="curr-footer-text" >
                    <p>“Coming together is a <strong>beginning</strong>, staying together is <strong>progress</strong>, and working together is <strong>success.</strong>” Henry Ford.</p>
                </Grid>
            </Grid>
        </div>
    )
};

export default AcademicsCurriculum;