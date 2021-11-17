import React, { Component } from "react";
import Banner from "../sections/vendors-landing-page/banner/Banner";
import Intro from "../sections/vendors-landing-page/intro/Intro";
import InfoTabs from "../sections/vendors-landing-page/tabs/InfoTabs";
import Steps from "../sections/vendors-landing-page/steps/Steps";
import VideoBanner from "../sections/vendors-landing-page/video-banner/VideoBanner";
import Brands from "../sections/vendors-landing-page/brands/Brands";
import Testimonial from "../sections/vendors-landing-page/testimonial/Testimonial";
import DriveYourSale from "../sections/vendors-landing-page/drive-your-sale/DriveYourSale";
import FAQ from "../sections/UserLandingPage/faq/FAQ";
import Partner from "../sections/vendors-landing-page/partner/Partner";
import QliqBenefit from "../sections/vendors-landing-page/qliq-benefit/QliqBenefit";

class VendorLandingPage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <Intro />
                <InfoTabs />
                <Steps />
                <VideoBanner />
                <Brands />
                <QliqBenefit />
                <Partner />
                <DriveYourSale />
                <Testimonial />
                <FAQ />
            </div>
        );
    }
}

export default VendorLandingPage;