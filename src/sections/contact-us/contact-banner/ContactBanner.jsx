import React from "react";
import contactbanner2 from "../../../assets/images/banners/contactbanner2.png"
import contactb1 from "../../../assets/images/banners/contactb1.png"
import { Hidden } from "@material-ui/core"

export default function ContactBanner() {

    return (
        <div className={"contactBanner"}>
            <div className="hero-image"
            // style={{ backgroundImage: `url(${contactbanner})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="bannerBtn">Enquiries</button>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Contact Us
                    </h1>
                    <p className="banner-subtitle">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <img src={contactbanner2} alt={"bannerImg2"} className="bannerImg2" />
                        <img src={contactb1} alt={"bannerImg"} className="bannerImg" />
                    </div>
                </Hidden>
            </div>
        </div>
    )
}