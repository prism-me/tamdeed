import React, { Component } from "react";
import AboutHeader from "../sections/About/AboutHeader/AboutHeader";
import AGSExperience from "../sections/About/AGSExperience/AGSExperience";
// import PrincipleMessage from "../sections/About/PrincipleMessage/PrincipleMessage";
import PrincipleMessage from "../sections/About/PrincipleMessage/PrincipleMessage_2";
import AgsEthos from "../sections/About/AGSEthos/AGSEthos";
import AGSHealth from "../sections/About/AGSHealth/AGSHealth";
import Mentors from "../sections/Home/Mentors";
import PrincipalSlider from "../sections/About/PrincipalSlider";

export default class About extends Component {

    render() {
        return (
            <div className="home-page about-section">
                <AboutHeader />
                <AGSExperience />
                <PrincipleMessage />
                <AgsEthos />
                <AGSHealth />
                <PrincipalSlider />
            </div>
        );
    }
}
