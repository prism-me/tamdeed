import React, { Component, lazy } from "react";
import HomeHeader from "../sections/Home/HomeHeader";
import Inclusion from "../sections/StudentCare/Inclusion";

const InfoTabs = lazy(() => import("../sections/Home/InfoTabs"));
const VideoSlider = lazy(() => import("../sections/Home/VideoSlider"));
const OurPrograms = lazy(() => import("../sections/Home/OurPrograms"));


export default class StudentCare extends Component {

    render() {
        return (
            <div className="home-page">
                <Inclusion/>
            </div>
        );
    }
}
