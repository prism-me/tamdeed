import React, { Component } from "react";
import Banner from "../sections/about-us/about-banner/AboutBanner";
import Values from "../sections/about-us/core-values/Values";
import Overview from "../sections/about-us/overview/Overview";

class About extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Overview />
                <Values />
            </div>
        );
    }
}

export default About;