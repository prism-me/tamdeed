import React from "react";
import careerBanner from "../../../assets//images/banners/careerbanner.jpg"
import { Hidden } from "@material-ui/core"

export default function CareerBanner() {

    return (
        <div className={"careerBanner"}>
            <div className="hero-image"
                style={{ background: `linear-gradient(#28030312 , #58648169), url(${careerBanner})` }}

            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="mailto:info@tamdeed.ae" className="bannerBtn text-decoration-none">Enquiries</a>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Careers
                    </h1>
                    <p className="banner-subtitle">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
            </div>
        </div>
    )
}