import React from "react";
// import mediabanner from "../../../assets/images/banners/mediabanner.jpg"
import insightbanner2 from "../../../assets/images/banners/insightbanner2.png"
import Insights from "../../../assets/images/banners/Insights.jpg"
import { Hidden } from "@material-ui/core"

export default function InsightsBanner() {

    return (
        <div className={"insights"}>
            <div className="hero-image"
                style={{ background: `linear-gradient(#28030312 , #58648169), url(${Insights})` }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="mailto:info@tamdeed.ae" className="bannerBtn text-decoration-none">Enquiries</a>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Insights
                    </h1>
                    <p className="banner-subtitle">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                {/* <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <img src={insightbanner2} alt={"bannerImg2"} className="bannerImg2" />
                        <img src={insightbanner1} alt={"bannerImg"} className="bannerImg" />
                    </div>
                </Hidden> */}
            </div>
        </div>
    )
}