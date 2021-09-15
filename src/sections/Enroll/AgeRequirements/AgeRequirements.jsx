import React from "react";
import Ages from "../../../components/Modals/Ages/Ages";


function AgeRequirements(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="AgeRequirements">
            <h1 className="Title">
                AGE REQUIREMENT AND GRADE LEVEL PLACEMENT
            </h1>
            <p className={"subTitle"}>
                American Gulf School will place students in age-appropriate grade levels in accordance with the Ministry of Education/SPEA regulations. To assist families coming from various curriculums, please refer to the table below as a guideline for which grade to apply to. Further clarification will be available by the Admissions and Educational teams. We are currently open from Pre-K to Grade 8.
            </p>
            <div className={"d-flex justify-content-center align-items-center"}>
                <button className={"agereqButton"}
                    onClick={() => setModalShow(true)}
                >
                    Click here to view the detailed Age Requirement and Grade Level Placement.
                </button>
                <Ages show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        </div>
    );
}

export default AgeRequirements;