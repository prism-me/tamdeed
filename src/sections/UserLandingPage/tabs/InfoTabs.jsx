import React from "react";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';
import img1 from "../../../assets/images/usrtBanner/userlandingpage/benefit1.png";
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
        <div className={"InfoTabs"}>
            <h3 className={"InfoTitle"}>Benefits of being a part of QLIQ</h3>
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
                            <MTab label="Trading"  {...a11yProps(0)} />
                            <MTab label="Training"  {...a11yProps(1)} />
                            <MTab label="Sourcing Solutions"  {...a11yProps(2)} />
                            <MTab label="Trade Consultation"  {...a11yProps(3)} />
                            <MTab label="Solutions Provider"  {...a11yProps(4)} />
                            <MTab label="Manpower"  {...a11yProps(5)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} className="service-tab-panel">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Trade with us!</h4>
                                    <p className="text-dark text-justify">
                                        If you seek to enter the Middle East market and expand your cleaning business,
                                        you only have to make a start by registering with us. Thereafter, you will be guided through
                                        the pulse of the market & all other requirements by The Cleaning Portal. With just a few clicks,
                                        we will help you with the logistics and on the ground management.
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
                                    <h4 className="InfoSubtitle mt-4">Join our Training Forces </h4>
                                    <p className="text-dark text-justify pt-3">
                                        With just a click, reach out to us for all your training & development needs.
                                        Training helps to achieve flexibility and stability within the organization,
                                        reduces the learning curve & need for supervision. We can help achieve your
                                        training needs; be it any cleaning services training including maid training
                                        or specialized cleaning services. We also provide corporate training requirements.
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
                                    <h4 className="InfoSubtitle mt-4">Get access to global RFQ’s </h4>
                                    <p className="text-dark text-justify pt-3">
                                        We offer complete cleaning sourcing solutions for businesses and end-users’ cleaning needs.
                                        Be it a cleaning company’s service related needs or products or trained manpower
                                        requirement with a quick turnaround time; we are your cleaning expert.
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
                                    <h4 className="InfoSubtitle mt-4"> Link with the global cleaning experts</h4>
                                    <p className="text-dark text-justify pt-3">
                                        We understand the import of keeping oneself updated with innovations & latest
                                        technology from the world around. In line with this, we work as a knowledge centre.
                                        We offer the companies registered in this platform the advantage of affiliating
                                        themselves with International Authorities from around the globe while being situated
                                        in the Middle East region and acquiring further proficiency & credibility.
                                        We help you seek solutions to all your cleaning business related queries.
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
                                    <h4 className="InfoSubtitle mt-4">Access a multitude of business opportunities </h4>
                                    <p className="text-dark text-justify pt-3">
                                        We provide you access to a wide range of information related to the industry as also business opportunities to enter the Middle East market. Join us if you want:
                                        <ul className={"mblviewList"}>
                                            <li>Trustworthy cleaning suppliers</li>
                                            <li>Certified and reputable training institutions</li>
                                            <li>End-to-end user friendly trading hub</li>
                                            <li>Reliable manpower agencies</li>
                                        </ul>
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
                                    <h4 className="InfoSubtitle mt-4">Connect with our trained cleaning experts </h4>
                                    <p className="text-dark text-justify pt-3">
                                        We offer complete cleaning solutions for businesses and end-users’ cleaning needs. Be it a cleaning company’s service needed or
                                        trained manpower requirement for your organization with a quick turnaround time; we are your cleaning expert
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
                                        <Nav.Link eventKey="first" className={"verNavLink"}>Refer and Earn</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className={"verNavLink"}>Buy amazing products at Crazy Discounts</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className={"verNavLink"}>Pay using Qash not money</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className={"verNavLink"}>Brands will pay you to buy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" className={"verNavLink"}>Earn referral commissions </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth" className={"verNavLink"}>Get spot discounts from brands</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs="auto" md="auto" lg={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Refer and Earn!</h4>
                                                <p className="text-dark text-justify">
                                                    Since QLIQ is an invite only site, we pay you every time you invite friends, family and your social network to the platform. Best of all when you also get paid when friends of your friends join your network !!  How cool is that? You can buy all the stuff on our site with the money you make just by referring people. Sounds interesting… wait there's more…
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
                                                <h4 className="InfoSubtitle">Refer and Earn!</h4>
                                                <p className="text-dark text-justify">
                                                    Since QLIQ is an invite only site, we pay you every time you invite friends, family and your social network to the platform. Best of all when you also get paid when friends of your friends join your network !!  How cool is that? You can buy all the stuff on our site with the money you make just by referring people. Sounds interesting… wait there's more…
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
                                                <h4 className="InfoSubtitle">Refer and Earn!</h4>
                                                <p className="text-dark text-justify">
                                                    Since QLIQ is an invite only site, we pay you every time you invite friends, family and your social network to the platform. Best of all when you also get paid when friends of your friends join your network !!  How cool is that? You can buy all the stuff on our site with the money you make just by referring people. Sounds interesting… wait there's more…
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
                                                <h4 className="InfoSubtitle">Refer and Earn!</h4>
                                                <p className="text-dark text-justify">
                                                    Since QLIQ is an invite only site, we pay you every time you invite friends, family and your social network to the platform. Best of all when you also get paid when friends of your friends join your network !!  How cool is that? You can buy all the stuff on our site with the money you make just by referring people. Sounds interesting… wait there's more…
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
                                                <h4 className="InfoSubtitle">Refer and Earn!</h4>
                                                <p className="text-dark text-justify">
                                                    Since QLIQ is an invite only site, we pay you every time you invite friends, family and your social network to the platform. Best of all when you also get paid when friends of your friends join your network !!  How cool is that? You can buy all the stuff on our site with the money you make just by referring people. Sounds interesting… wait there's more…
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
                                                <h4 className="InfoSubtitle">Refer and Earn!</h4>
                                                <p className="text-dark text-justify">
                                                    Since QLIQ is an invite only site, we pay you every time you invite friends, family and your social network to the platform. Best of all when you also get paid when friends of your friends join your network !!  How cool is that? You can buy all the stuff on our site with the money you make just by referring people. Sounds interesting… wait there's more…
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