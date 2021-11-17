import React, { Component } from "react";
import Banner from "../sections/UserLandingPage/banner/Banner";
import Intro from "../sections/UserLandingPage/intro/Intro";
import InfoTabs from "../sections/UserLandingPage/tabs/InfoTabs";
import SixStep from "../sections/UserLandingPage/six-steps/SixStep";
import VideoBanner from "../sections/UserLandingPage/video-banner/VideoBanner";
import Brands from "../sections/UserLandingPage/brands/Brands";
import ProductDeals from "../sections/UserLandingPage/product-deals/ProductDeals";
import Testimonial from "../sections/UserLandingPage/testimonial/Testimonial";
import EarnWithQLIQ from "../sections/UserLandingPage/earn-with-qliq/EarnWithQLIQ";
import FAQ from "../sections/UserLandingPage/faq/FAQ";

class UserLandingPage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <Intro />
                <InfoTabs />
                <SixStep />
                <VideoBanner />
                <Brands />
                <ProductDeals />
                <Testimonial />
                <EarnWithQLIQ />
                <FAQ />
            </div>
        );
    }
}

export default UserLandingPage;