import React from "react";
import aboutBanner from "../../../assets//images/banners/aboutbanner.jpg"
import { Hidden } from "@material-ui/core"

export default function AboutBanner() {

    return (
        <div className={"aboutBanner"}>
            <div className="hero-image"
                style={{ backgroundImage: `url(${aboutBanner})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="bannerBtn">Enquiries</button>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        About Us
                    </h1>
                </div>
            </div>
        </div>
    )
}