import React, { Component, lazy } from "react";
import MiddleSchoolSection from "../sections/MiddleSchool";
import PhoneFixedSection from "../sections/PhoneFixedSection";

export default class MiddleSchool extends Component {
    render() {
        return (
            <div className="home-page">
                <MiddleSchoolSection />
                {/* <PhoneFixedSection /> */}
            </div>
        );
    }
}
