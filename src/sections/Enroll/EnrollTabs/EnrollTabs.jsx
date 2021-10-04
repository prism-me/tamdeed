import React from 'react';
import { Hidden } from "@material-ui/core";

export default function EnrollTabs(props) {
    const scrollToBottom1 = () => {
        const bottomEle = document.getElementById("Admissions");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom2 = () => {
        const bottomEle = document.getElementById("Enquiry");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom3 = () => {
        const bottomEle = document.getElementById("Payments");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom4 = () => {
        const bottomEle = document.getElementById("applyOnline");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom5 = () => {
        const bottomEle = document.getElementById("FAQs");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom6 = () => {
        const bottomEle = document.getElementById("Contact");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <Hidden smDown>
                <div className={"EnrollTabs"}>
                    <div className={"buttons-flex"}>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom1}
                        >
                            Admissions Process
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom2}
                        >
                            Enquiry
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom3}
                        >
                            Fees and Payments
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom4}
                        >
                            Online Application
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom5}
                        >
                            FAQs
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom6}
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </Hidden>
            <p className={"EnrollTabTitle"}>
                {props.introSec?.title}
                {/* Thank you for considering joining the American Gulf School family. After conducting a tour with us, please adhere to the below steps for acceptance and registration. */}
            </p>
        </>
    );
}