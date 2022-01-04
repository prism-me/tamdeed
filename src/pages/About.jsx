import React, { Component } from "react";
import Banner from "../sections/about-us/about-banner/AboutBanner";
import Values from "../sections/about-us/core-values/Values";
import Overview from "../sections/about-us/overview/Overview";
import Management from "../sections/about-us/executive-management/Management";
import BusinessUnits from "../sections/about-us/b-units/Bunits"
import Gtm from "../sections/about-us/salesforce-gtm/Gtm";
import JoinTamdeed from "../sections/about-us/join-tamdeed/JoinTamdeed";
import Partners from "../sections/about-us/partners/Partners";

class About extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Overview />
                <Values />
                <Management />
                <BusinessUnits />
                <Gtm />
                <JoinTamdeed />
                <Partners />
            </div>
        );
    }
}

export default About;