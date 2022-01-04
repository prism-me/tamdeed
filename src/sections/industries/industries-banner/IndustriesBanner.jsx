import React from "react";
import industriesbanner from "../../../assets//images/banners/industriesbanner.jpg"
import { Hidden } from "@material-ui/core"

export default function IndustriesBanner() {

    return (
        <div className={"industriesBanner"}>
            <div className="hero-image"
                style={{ backgroundImage: `url(${industriesbanner})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="bannerBtn">Enquiries</button>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Industries
                    </h1>
                </div>
            </div>
        </div>
    )
}