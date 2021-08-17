import axios from "axios";
import React, {Component, lazy} from "react";
// import LazyLoad from "react-lazy-load";
import BackToTop from "../components/BackToTop";
// import HomeFooter from "../sections/Home/HomeFooter/HomeFooter";
import AboutHeader from "../sections/About/AboutHeader/AboutHeader";
import AGSExperience from "../sections/About/AGSExperience/AGSExperience";
import PrincipleMessage from "../sections/About/PricipleMessage/PrincipleMessage";

// import InfoTabs from "../sections/Home/InfoTabs";
// import OurPrograms from "../sections/Home/OurPrograms";
// import VideoSlider from "../sections/Home/VideoSlider";
// import Welcome from "../sections/Home/Welcome";
// import Curriculum from "../sections/Home/Curriculum";
// import Mentors from "../sections/Home/Mentors";
// import CovidSafety from "../sections/Home/CovidSafety";
// import AgsSlider from "../sections/Home/AgsSlider";
// import CovidSafety from "../sections/Home/CovidSafety";

// const InfoTabs = lazy(() => import("../sections/Home/InfoTabs"));
// const VideoSlider = lazy(() => import("../sections/Home/VideoSlider"));
// const OurPrograms = lazy(() => import("../sections/Home/OurPrograms"));


export default class About extends Component {

    render() {
        return (
            <div className="home-page">
                <AboutHeader/>
                <AGSExperience/>
                <PrincipleMessage/>
                <BackToTop/>
            </div>
        );
    }
}
