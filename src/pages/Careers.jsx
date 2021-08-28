import React, { Component } from "react";
import Jointeam from "../sections/Careers/Jointeam/Jointeam";
import Positions from "../sections/Careers/Positions/Positions";
import Ourteam from "../sections/Careers/Ourteam";
import Contactpannel from "../sections/Contactpannel";

export default class Careers extends Component {

  render() {
    return (
      <div className="home-page TabPanel">
          <Contactpannel/>
          <Jointeam />
          <Positions />
          <Ourteam />
      </div>
    );
  }
}
