import React from "react";
import mediabanner from "../../../assets/images/banners/mediabanner.jpg"
import mediab2 from "../../../assets/images/banners/madiab2.png"
import { Hidden } from "@material-ui/core"

export default function MediaBanner() {

    return (
        <div className={"mediaBanner"}>
            <div className="hero-image"
            // style={{ backgroundImage: `url(${mediabanner})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="bannerBtn">Enquiries</button>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Media Center
                    </h1>
                    <p className="banner-subtitle">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <img src={mediab2} alt={"bannerImg2"} className="bannerImg2" />
                        <img src={mediabanner} alt={"bannerImg"} className="bannerImg" />
                    </div>
                </Hidden>
            </div>
        </div>
    )
}