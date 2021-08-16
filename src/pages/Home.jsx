import axios from "axios";
import React, { Component, lazy } from "react";
// import LazyLoad from "react-lazy-load";
import BackToTop from "../components/BackToTop";
import HomeFooter from "../sections/Home/HomeFooter/HomeFooter";
import HomeHeader from "../sections/Home/HomeHeader";

// import InfoTabs from "../sections/Home/InfoTabs";
// import OurPrograms from "../sections/Home/OurPrograms";
// import VideoSlider from "../sections/Home/VideoSlider";
import Welcome from "../sections/Home/Welcome";
import Curriculum from "../sections/Home/Curriculum";
import Mentors from "../sections/Home/Mentors";
import CovidSafety from "../sections/Home/CovidSafety";
import AgsSlider from "../sections/Home/AgsSlider";
// import CovidSafety from "../sections/Home/CovidSafety";

const InfoTabs = lazy(() => import("../sections/Home/InfoTabs"));
const VideoSlider = lazy(() => import("../sections/Home/VideoSlider"));
const OurPrograms = lazy(() => import("../sections/Home/OurPrograms"));


export default class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <HomeHeader/>
        <InfoTabs />
        <Curriculum />
        <Mentors />
        {/*<VideoSlider/>*/}
        <OurPrograms/>
        <AgsSlider />
        <CovidSafety/>
        <BackToTop />
      </div>
    );
  }
}
