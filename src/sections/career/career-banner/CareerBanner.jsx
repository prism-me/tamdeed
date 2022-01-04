import React from "react";
import careerBanner from "../../../assets//images/banners/careerbanner.jpg"
import { Hidden } from "@material-ui/core"

export default function CareerBanner() {

    return (
        <div className={"careerBanner"}>
            <div className="hero-image"
                style={{ backgroundImage: `url(${careerBanner})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="bannerBtn">Enquiries</button>
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