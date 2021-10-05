import React from 'react';
import { Hidden } from "@material-ui/core";

export default function ScrollableTabsButtonAuto() {
    const scrollToBottom1 = () => {
        const bottomEle = document.getElementById(0);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom2 = () => {
        const bottomEle = document.getElementById(1);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom3 = () => {
        const bottomEle = document.getElementById(2);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom4 = () => {
        const bottomEle = document.getElementById(3);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom5 = () => {
        const bottomEle = document.getElementById(4);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <Hidden smDown>
            <div className={"TabPanel"}>
                <div className={"buttons-flex"}>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom1}
                    >
                        Inclusion
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom2}
                    >
                        Academic Support
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom3}
                    >
                        School Clinic
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom4}
                    >
                        Academic Guidance
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom5}
                    >
                        Wellbeing
                    </button>
                </div>
            </div>
        </Hidden>
    );
}