import axios from "axios";
import React, {Component, lazy} from "react";
import AboutHeader from "../sections/About/AboutHeader/AboutHeader";
import AGSExperience from "../sections/About/AGSExperience/AGSExperience";
import PrincipleMessage from "../sections/About/PricipleMessage/PrincipleMessage";


export default class About extends Component {

    render() {
        return (
            <div className="home-page">
                <AboutHeader/>
                <AGSExperience/>
                <PrincipleMessage/>
            </div>
        );
    }
}
