import React from "react";
import mediabanner from "../../../assets/images/banners/mediabanner.jpg"
import mediab2 from "../../../assets/images/banners/madiab2.png"
import { Hidden } from "@material-ui/core"

export default function MediaBanner() {

    return (
        <div className={"mediaBanner"}>
            <div className="hero-image mediaCenterHeroImg"
                style={{ background: `linear-gradient(#28030312 , #58648169), url(${mediabanner})`, backgroundSize: "cover" }}

            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="mailto:info@tamdeed.ae" className="bannerBtn text-decoration-none">Enquiries</a>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Media Center
                    </h1>
                    {/* <p className="banner-subtitle">
                        Lorem Ipsum Dolor Sit Amet
                    </p> */}
                </div>
                {/* <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center"> */}
                {/* <img src={mediab2} alt={"bannerImg2"} className="bannerImg2" />
                        <img src={mediabanner} alt={"bannerImg"} className="bannerImg" /> */}
                {/* </div>
                </Hidden> */}
            </div>
        </div>
    )
}