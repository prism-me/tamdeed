import React, { Component, lazy } from "react";
import HomeHeader from "../sections/Home/HomeHeader";
import Curriculum from "../sections/Home/Curriculum";
import Mentors from "../sections/Home/Mentors";
import CovidSafety from "../sections/Home/CovidSafety";
import AgsSlider from "../sections/Home/AgsSlider";
import { API } from "../http/API";
const InfoTabs = lazy(() => import("../sections/Home/InfoTabs"));
const OurPrograms = lazy(() => import("../sections/Home/OurPrograms"));


export default class Home extends Component {
  state = {
    mentorsData: []
  }

  componentDidMount() {

    API.get('/mentors').then(response => {
      this.setState({ mentorsData: response.data.data });
      // console.log("mentors", response.data.data);
    })
      .catch(err => {
        console.log(err)
      })

  }
  render() {
    return (
      <div className="home-page">
        <HomeHeader />
        <InfoTabs />
        <Curriculum />
        <Mentors mentors={this.state.mentorsData} />
        <OurPrograms />
        <AgsSlider />
        <CovidSafety />
      </div>
    );
  }
}
