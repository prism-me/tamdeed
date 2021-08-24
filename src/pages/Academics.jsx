import React, {Component} from "react";
import AcademicHeader from "../sections/Academics/Headers/header";
import Accreditation from "../sections/Academics/Accreditation/Accreditation";
import InfoTabs from "../sections/Home/InfoTabs";
import AcademicsCurriculum from "../sections/Academics/Curiculum/AcademicsCurriculum";
import ACTabs from "../sections/Academics/ACTabs";

export default class Academics extends Component {

    render() {
        return (
            <div className="home-page about-section">
                <AcademicHeader/>
                <Accreditation/>
                <ACTabs />
                <AcademicsCurriculum/>
            </div>
        );
    }
}
