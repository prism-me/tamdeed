import React, { Component, lazy } from "react";
import KinderGartenSection from "../sections/KinderGarten";
import PhoneFixedSection from "../sections/PhoneFixedSection";

export default class KinderGarten extends Component {
    render() {
        return (
            <div className="home-page">
                <KinderGartenSection />
                {/* <PhoneFixedSection /> */}
            </div>
        );
    }
}
