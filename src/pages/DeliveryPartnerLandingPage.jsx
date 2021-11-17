import React, { Component } from "react";
import Banner from "../sections/DeliveryPartnerLandingPage/banner/Banner";
import Intro from "../sections/DeliveryPartnerLandingPage/intro/Intro";
import InfoTabs from "../sections/DeliveryPartnerLandingPage/tabs/InfoTabs";
import FourStep from "../sections/DeliveryPartnerLandingPage/four-steps/FourStep";
import VideoBanner from "../sections/DeliveryPartnerLandingPage/video-banner/VideoBanner";
import Testimonial from "../sections/DeliveryPartnerLandingPage/testimonial/Testimonial";
import FAQ from "../sections/UserLandingPage/faq/FAQ";
import WhyJoinQLIQ from "../sections/DeliveryPartnerLandingPage/why-join-qliq/WhyJoinQLIQ";
import LifeAtQliq from "../sections/DeliveryPartnerLandingPage/life-at-qliq/LifeAtQliq";

class DeliveryPartnerLandingPage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <Intro />
                <InfoTabs />
                <FourStep />
                <VideoBanner />
                <WhyJoinQLIQ />
                <Testimonial />
                <LifeAtQliq />
                <FAQ />
            </div>
        );
    }
}

export default DeliveryPartnerLandingPage;
