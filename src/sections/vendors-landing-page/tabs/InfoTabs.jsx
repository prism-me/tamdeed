import React from "react";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';
import img1 from "../../../assets/images/vendorimgs/benefit.png";
import { Hidden } from "@material-ui/core";
import MTab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function InfoTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={"InfoTabsVendor"}>
            <h3 className={"InfoTitle"}>Why Sell on QLIQ?  The Benefits for Vendors</h3>
            <Hidden mdUp>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            aria-label="scrollable force tabs example"
                        >
                            <MTab label="Exclusive Invite-Only Platform"  {...a11yProps(0)} />
                            <MTab label="Make your products go Viral on social media "  {...a11yProps(1)} />
                            <MTab label="Hyper Targeted Advertising on our Platform!"  {...a11yProps(2)} />
                            <MTab label="Sell Your Products at Scale"  {...a11yProps(3)} />
                            <MTab label="Understand your customers better"  {...a11yProps(4)} />
                            <MTab label="Now You Can Sell For Free!"  {...a11yProps(5)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} className="service-tab-panel">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Exclusive Invite Only Platform!</h4>
                                    <p className="text-dark text-justify">
                                        QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Exclusive Invite Only Platform!</h4>
                                    <p className="text-dark text-justify pt-3">
                                        QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Exclusive Invite Only Platform!</h4>
                                    <p className="text-dark text-justify pt-3">
                                        QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Exclusive Invite Only Platform!</h4>
                                    <p className="text-dark text-justify pt-3">
                                        QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Exclusive Invite Only Platform!</h4>
                                    <p className="text-dark text-justify pt-3">
                                        QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Exclusive Invite Only Platform!</h4>
                                    <p className="text-dark text-justify pt-3">
                                        QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                </div>
            </Hidden>

            <Hidden smDown>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Container fluid>
                        <Row>
                            <Col xs="auto" md="auto" lg>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className={"verNavLink"}>Exclusive Invite-Only Platform</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className={"verNavLink"}>Make your products go Viral on social media </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className={"verNavLink"}>Hyper Targeted Advertising on our Platform!</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className={"verNavLink"}>Sell Your Products at Scale</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" className={"verNavLink"}>Understand your customers better</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth" className={"verNavLink"}>Now You Can Sell For Free!</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs="auto" md="auto" lg={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Exclusive Invite Only Platform!</h4>
                                                <p className="text-dark text-justify">
                                                    QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Exclusive Invite Only Platform!</h4>
                                                <p className="text-dark text-justify">
                                                    QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Exclusive Invite Only Platform!</h4>
                                                <p className="text-dark text-justify">
                                                    QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Exclusive Invite Only Platform!</h4>
                                                <p className="text-dark text-justify">
                                                    QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Exclusive Invite Only Platform!</h4>
                                                <p className="text-dark text-justify">
                                                    QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Exclusive Invite Only Platform!</h4>
                                                <p className="text-dark text-justify">
                                                    QLIQ is certified invite-only network of millions of highly engaged online customers, that love online shopping !!
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Container>
                </Tab.Container>
            </Hidden>
            <center>
                <button className={"btn bannerBtn"}>
                    Register now for free!
                </button>
            </center>
        </div>
    )
}