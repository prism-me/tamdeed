import React, { Component } from "react";
import Schoolinclusion from "../sections/Primaryschool/Inclusion/Schoolinclusion";
import Contactpannel from "../sections/Contactpannel";

export default class Primaryschool extends Component {

  render() {
    return (
      <div className="home-page">
        <Contactpannel />
        <Schoolinclusion />
      </div>
    );
  }
}
