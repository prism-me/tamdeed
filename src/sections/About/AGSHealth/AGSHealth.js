import React from 'react';
import {Grid} from "@material-ui/core";
import health_bg_img from "../../../assets/images/about/health_.png";

const AGSHealth = () => {
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} className="info-tabs justify-content-center" style={{
            paddingTop:"0"
        }}>
            <h3 className="InfoTitle">HEALTH AND SAFETY</h3>
            <Grid item xs={12} justifyContent={"center"} sm={12} md={12} lg={12} xl={12}
                  className="d-flex w-100 flex-wrap justify-content-center">
                <Grid item justifyContent={'center'} xs={12} sm={12} md={6} lg={5} xl={5}
                      className="d-flex justify-content-center w-100">
                    <img alt={"#"} src={health_bg_img}
                         className="exp-img d-flex justify-content-center align-items-center"/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={7} className="d-flex w-100 flex-column align-items-center">
                    <div className="d-flex" style={{
                        padding: "5rem",
                        textAlign: "start",
                    }}>
                        <p>American Gulf School believes that the safety of every child is paramount and as such, places
                            great importance on the health, safety and wellbeing of all its learners. AGS has created a
                            learning environment that ensures all staff are well aware in child protection, health, and
                            safety. A full time nurse is on site with a fully functional school clinic which is child
                            friendly to help all our learners should they feel ill or in need of medical attention. Our
                            facilities are inspected daily to ensure they are in safe working order and we have
                            intensive risk assessments in place to ensure the safety of the learners both inside and
                            outside the classroom. We have detailed and comprehensive policies in place to protect
                            learners, staff and visitors. We pride ourselves on being fully compliant with the UAE
                            government's directives on Covid to ensure our learners, staff and parents are
                            protected..</p>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AGSHealth;