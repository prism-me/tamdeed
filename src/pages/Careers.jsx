import React, { Component } from "react";
import Jointeam from "../sections/Careers/Jointeam/Jointeam";
import Positions from "../sections/Careers/Positions/Positions";
import Ourteam from "../sections/Careers/Ourteam";
import ContentSection from "../sections/Careers/ContentSection/ContentSection";

export default class Careers extends Component {

  render() {
    return (
      <div className="home-page">
        <Jointeam />
        <Positions />
        <ContentSection />
        <Ourteam />
      </div>
    );
  }
}
