import React from "react";
import aboutBanner from "../../../assets//images/banners/aboutbanner.jpg"
import { Hidden } from "@material-ui/core"

export default function AboutBanner(props) {
    const { banner } = props

    return (
        banner &&
        <div className={"aboutBanner"}>
            <div className="hero-image"
                style={{ backgroundImage: `url(${banner.image ? banner.image : ""})`, }}
            >
                <Hidden smDown>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="mailto:info@tamdeed.ae" className="bannerBtn text-decoration-none">Enquiries</a>
                    </div>
                </Hidden>
                <div className="hero-text">
                    <h1 className={"banner-title"}>
                        {banner.title ? banner.title : ""}
                    </h1>
                </div>
            </div>
        </div>
    )

}