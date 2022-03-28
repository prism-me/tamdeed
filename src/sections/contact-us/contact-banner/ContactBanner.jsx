import React from "react";
import contactbanner2 from "../../../assets/images/banners/contactbanner2.png"
import ContactUsBanner from "../../../assets/images/banners/ContactUsBanner.jpg"
import contactb1 from "../../../assets/images/banners/contactb1.png"
import { Hidden } from "@material-ui/core"

export default function ContactBanner() {

    return (
        <div className={"contactBanner"}>
            <div className="hero-image"
                style={{ background: `linear-gradient(#28030312 , #58648169), url(${ContactUsBanner})` }}

            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="mailto:info@tamdeed.ae" className="bannerBtn text-decoration-none">Enquiries</a>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Contact Us
                    </h1>
                    {/* <p className="banner-subtitle">
                        Lorem Ipsum Dolor Sit Amet
                    </p> */}
                </div>
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        {/* <img src={contactbanner2} alt={"bannerImg2"} className="bannerImg2" />
                        <img src={contactb1} alt={"bannerImg"} className="bannerImg" /> */}
                    </div>
                </Hidden>
            </div>
        </div>
    )
}