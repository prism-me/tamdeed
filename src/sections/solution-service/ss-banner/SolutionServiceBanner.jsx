import React from "react";
import solutionsbanner from "../../../assets//images/banners/solutionsbanner.jpg"
import { Hidden } from "@material-ui/core"

export default function SolutionServiceBanner() {

    return (
        <div className={"ssBanner"}>
            <div className="hero-image"
                style={{ backgroundImage: `url(${solutionsbanner})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="mailto:info@tamdeed.ae" className="bannerBtn text-decoration-none">Enquiries</a>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        Solutions & Services
                    </h1>
                </div>
            </div>
        </div>
    )
}