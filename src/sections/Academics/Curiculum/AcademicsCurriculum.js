import React from 'react';
import { Grid } from "@material-ui/core";
import kindergarten_img from "../../../assets/images/Curriculum/Kindergarten.png";
import middle_school from "../../../assets/images/Curriculum/MiddleSchool.png";
import p_school from "../../../assets/images/Curriculum/PrimarySchool.png";
import { useHistory } from "react-router-dom";
import cookies from 'js-cookie'
import { STRINGS } from "../../../utils/base";

const AcademicsCurriculum = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const history = useHistory();

    return (
        <div className={"Academics"} id={"Our_Curriculum"}>
            <h3 className={"InfoTitle"}>OUR CURRICULUM</h3>
            <Grid container className="d-flex w-100 justify-content-center">
                <Grid item className="curr-sec">
                    <p>The American Gulf School curriculum is project-based, and learner centered. It encourages, requires, and builds critical thinking, driven by inquiry combined with both knowledge and comprehensive skills. This allows learners to make authentic connections between different theories and be able to apply this knowledge in unfamiliar real-life situations. The use of our STREAM, Media, Fabrication, and Design Labs, give our learners the practice and experience to apply the knowledge and skills they are being taught to succeed within the 21st century.</p>
                </Grid>
            </Grid>
            <Grid className="d-flex w-100 justify-content-center">
                <Grid className="d-flex w-100 justify-content-center flex-wrap">
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push(`/${currentLanguageCode}${STRINGS.ROUTES.KINDERGARTEN}`);
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
                            history.push(`/${currentLanguageCode}${STRINGS.ROUTES.PRIMARYSCHOOL}`);
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
                    <div className={"mx-2 divstyle wc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push(`/${currentLanguageCode}${STRINGS.ROUTES.MIDDLE_SCHOOL}`);
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center imgheight ch"
                            style={{ backgroundImage: `url(${middle_school})`, }}
                        >
                            <div className="video-promo-content mt-4 ">
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