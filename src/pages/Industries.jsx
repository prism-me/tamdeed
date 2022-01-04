import React, { Component } from "react";
import Banner from "../sections/industries/industries-banner/IndustriesBanner";
import IndustriesProjects from "../sections/industries/industries/Industries"

class Industries extends Component {
    render() {
        return (
            <div>
                <Banner />
                <IndustriesProjects />
            </div>
        );
    }
}

export default Industries;