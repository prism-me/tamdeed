import React, { Component } from "react";
import Banner from "../sections/home/banner/Banner";
import Partners from "../sections//home/partners/Partners";
import AboutTamdeed from "../sections/home/about-tamdeed/AboutTamdeed";
import Industries from "../sections/home/industries/Industries"
import Portfolio from "../sections/home/solution-portfolio/Portfolio";
import MediaCenter from "../sections/home/media-center/MediaCenter";

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <Partners />
                <AboutTamdeed />
                <Industries />
                <Portfolio />
                <MediaCenter />
            </div>
        );
    }
}

export default HomePage;