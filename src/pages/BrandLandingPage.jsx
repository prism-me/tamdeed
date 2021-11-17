import React, { Component } from "react";
import Banner from "../sections/BrandLandingPage/banner/Banner";
import Intro from "../sections/BrandLandingPage/intro/Intro";
import InfoTabs from "../sections/BrandLandingPage/tabs/InfoTabs";
import Steps from "../sections/BrandLandingPage/steps/Steps";
import Testimonial from "../sections/BrandLandingPage/testimonial/Testimonial";
import InfoGrid from "../sections/BrandLandingPage/infoGrid/InfoGrid";
import PotentialInfluencer from "../sections/BrandLandingPage/potential-influencer/PotentialInfluencer";
import Blog from "../sections/BrandLandingPage/blog/Blog";

class BrandLandingPage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <Intro />
                <Steps />
                <InfoTabs />
                <Intro />
                <InfoGrid />
                <PotentialInfluencer />
                <Testimonial />
                <Blog />
            </div>
        );
    }
}

export default BrandLandingPage;