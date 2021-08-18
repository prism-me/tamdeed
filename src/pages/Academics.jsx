import React, {Component} from "react";
import "../sections/About/about.css";
import AcademicHeader from "../sections/Academics/Headers/header";
import Accreditation from "../sections/Academics/Accreditation/Accreditation";
import InfoTabs from "../sections/Home/InfoTabs";
import AcademicsCurriculum from "../sections/Academics/Curiculum/AcademicsCurriculum";

export default class Academics extends Component {

    render() {
        return (
            <div className="home-page">
                <AcademicHeader/>
                <Accreditation/>
                <InfoTabs />
                <AcademicsCurriculum/>
            </div>
        );
    }
}
