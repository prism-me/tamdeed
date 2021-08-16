import React from 'react';
import exp_bg_img from "../../../assets/images/about/exp_bg_img.jpg";
import "../about.css";
import {Grid} from "@material-ui/core";

const AgsExperience = () => {
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} className="ex-paths info-tabs justify-content-center">
            <h3 className="InfoTitle">ABOUT THE AGS EXPERIENCE</h3>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex w-100 flex-wrap">
                <Grid item xs={12} sm={12} md={6} lg={5} xl={5} >
                    <img alt={"#"} src={exp_bg_img}
                         className="exp-img d-flex justify-content-center align-items-center"/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={7} className="d-flex w-100 flex-column align-items-center">
                    <div className="d-flex" style={{
                        padding: "5rem",
                        textAlign: "start",
                    }}>
                        <p>At American Gulf School, we believe that a diverse curriculum broadens not only minds but
                            opportunities too. Our learners are encouraged to question and experiment to find answers to
                            critical thinking questions, giving each student confidence within their own ability to
                            achieve their full potential. It is designed and delivered to bring out the best in our
                            learners, both academically and personally. Our curriculum is standard driven delivered
                            through project-based learning that has been adapted to incorporate Arabic and Islamic
                            studies. We believe that learners should develop life skills in conjunction with their
                            academic skills.</p>
                    </div>
                    <div className="d-flex btn-h">
                        <button className={"viewButton"}>View in detail ></button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AgsExperience;