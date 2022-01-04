import React, { Component } from "react";
import Banner from "../sections/career/career-banner/CareerBanner";
import JoinTeam from "../sections/career/join-team/JoinTeam";
import Intro from "../sections/career/intro/Intro";
import Positions from "../sections/career/open-positions/Positions"

class Careers extends Component {
    render() {
        return (
            <div>
                <Banner />
                <JoinTeam />
                <Intro />
                <Positions />
            </div>
        );
    }
}

export default Careers;