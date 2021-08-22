import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button} from "react-bootstrap";
import {Hidden} from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         width: '100%',
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

export default function ScrollableTabsButtonAuto() {
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
            {/*<AppBar position="static" className={"TabStyle"}>*/}
            {/*    <Tabs*/}
            {/*        value={value}*/}
            {/*        onChange={handleChange}*/}
            {/*        indicatorColor="primary"*/}
            {/*        textColor="primary"*/}
            {/*        variant="scrollable"*/}
            {/*        scrollButtons="auto"*/}
            {/*        aria-label="scrollable auto tabs example"*/}
            {/*    >*/}
            {/*        <Tab label="Inclusion" {...a11yProps(0)} />*/}
            {/*        <Tab label="Academic Support" {...a11yProps(1)} />*/}
            {/*        <Tab label="School Clinic" {...a11yProps(2)} />*/}
            {/*        <Tab label="Academic Guidance" {...a11yProps(3)} />*/}
            {/*        <Tab label="Wellbeing" {...a11yProps(4)} />*/}
            {/*    </Tabs>*/}
            {/*</AppBar>*/}
            {/*<TabPanel value={value} index={0}>*/}
            {/*    Item One*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={1}>*/}
            {/*    Item Two*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={2}>*/}
            {/*    Item Three*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={3}>*/}
            {/*    Item Four*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={4}>*/}
            {/*    Item Five*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={5}>*/}
            {/*    Item Six*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={6}>*/}
            {/*    Item Seven*/}
            {/*</TabPanel>*/}
        </div>
</Hidden>
);
}