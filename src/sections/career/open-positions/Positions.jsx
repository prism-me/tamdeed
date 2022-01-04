import React from "react";
import { Container } from "react-bootstrap"
import icon from "../../../assets/images/icons/Color/Mask Group-4.png"

export default function Positions() {

    return (
        <div className={"positions"}>
            <h3 className={"title"}>
                Open Positions
            </h3>
            <Container>
                <div className="positionDiv">
                    <div className={"d-flex justify-content-center align-items-center"}>
                        <span className={"iconBg"}>
                            <img src={icon} alt="solution" className={"iconImg"} />
                        </span>
                    </div>
                    <p className={"subtitle"}>
                        Coming Soon
                    </p>
                </div>
            </Container>
        </div>
    )
}