import React, { Component } from "react";
import Banner from "../sections/InfluencerLandingPage/banner/Banner";
import Intro from "../sections/InfluencerLandingPage/intro/Intro";
import InfoTabs from "../sections/InfluencerLandingPage/tabs/InfoTabs";
import Steps from "../sections/InfluencerLandingPage/steps/Steps";
import Testimonial from "../sections/InfluencerLandingPage/testimonial/Testimonial";
import PotentialInfluencer from "../sections/InfluencerLandingPage/potential-influencer/PotentialInfluencer";
import Blog from "../sections/InfluencerLandingPage/blog/Blog";

class InfluencerLandingPage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <Intro />
                <Steps />
                <InfoTabs />
                <PotentialInfluencer />
                <Testimonial />
                <Blog />
            </div>
        );
    }
}

export default InfluencerLandingPage;