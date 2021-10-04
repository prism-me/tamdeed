import React from "react";

function Covid(props) {
    return (
        <div className="Covid container">
            <h1 className="Title">
                {props.covidSec?.title}
                {/* COVID 19 SAFETY AND PRECAUTIONS */}
            </h1>
            <p className={"subTitle"}
                dangerouslySetInnerHTML={{
                    __html:
                        props.covidSec?.description
                }}
            >
                {/* American Gulf School follows and abides by the Covid-19 guidelines provided by the Ministry of Health and the Sharjah Private Education Authority “SPEA”. American Gulf School administration is pleased to announce that almost all of the staff are vaccinated and soon to be 100% vaccinated. We offer full time on-campus learning for all learners every day with full health and safety measures implemented to keep our community safe. */}
            </p>
        </div>
    );
}

export default Covid;