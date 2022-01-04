import React, { Component } from "react";
import Banner from "../sections/insights/insights-banner/InsightsBanner";
import ReferenceProjects from "../sections/insights/refrence-projects/ReferenceProjects";

class Insights extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ReferenceProjects />
            </div>
        );
    }
}

export default Insights;