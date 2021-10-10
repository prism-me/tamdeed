import React from 'react';

const Jointeam = (props) => {
    return (
        <div className="joinTeam container">
            <h3 className={"Title"}>
                {props.joinTeam?.title}
                {/* JOIN THE TEAM */}
            </h3>
            <p className="subTitle"
                dangerouslySetInnerHTML={{
                    __html:
                        props.joinTeam?.description,
                }}
            >
                {/* If you would like to apply for any vacancies and join our team, please send your C.V with a cover letter to <a href="mailto:careers@ags.ae">careers@ags.ae</a> Due to the volume of CVs and job applications received, we are unable to reply to any that are being emailed directly to the school. */}
            </p>
        </div>
    );
};

export default Jointeam;