import React, { Component, lazy } from "react";
import HomeHeader from "../sections/Home/HomeHeader";
import Curriculum from "../sections/Home/Curriculum";
import Mentors from "../sections/Home/Mentors";
import CovidSafety from "../sections/Home/CovidSafety";
import AgsSlider from "../sections/Home/AgsSlider";

const InfoTabs = lazy(() => import("../sections/Home/InfoTabs"));
const OurPrograms = lazy(() => import("../sections/Home/OurPrograms"));


export default class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <HomeHeader />
        <InfoTabs />
        <Curriculum />
        <Mentors />
        <OurPrograms />
        <AgsSlider />
        <CovidSafety />
      </div>
    );
  }
}
