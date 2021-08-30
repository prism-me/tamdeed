import React from 'react';
import {Grid} from "@material-ui/core";

const Jointeam = () => {
    return (
        <div className="carrers-join AgsSlider">
            <h3 className={"InfoTitle"}>JOIN THE TEAM</h3>
            <Grid container className="d-flex w-100 justify-content-center">
                <Grid item className="curr-sec">
                    <p>If you would like to apply for any vacancies and join our team, please send your C.V with a cover letter to <a href="mailto:careers@ags.ae">careers@ags.ae</a> Due to the volume of CVs and job applications received, we are unable to reply to any that are being emailed directly to the school. 
                    </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Jointeam;