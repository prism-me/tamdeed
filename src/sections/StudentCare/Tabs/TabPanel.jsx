import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from "react-bootstrap";
import { Hidden } from "@material-ui/core";

export default function ScrollableTabsButtonAuto() {
    const scrollToBottom1 = () => {
        const bottomEle = document.getElementById("INCLUSION");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom2 = () => {
        const bottomEle = document.getElementById("ACADEMIC ");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom3 = () => {
        const bottomEle = document.getElementById("SCHOOL");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom4 = () => {
        const bottomEle = document.getElementById("GUIDANCE");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom5 = () => {
        const bottomEle = document.getElementById("WELLBEING");
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