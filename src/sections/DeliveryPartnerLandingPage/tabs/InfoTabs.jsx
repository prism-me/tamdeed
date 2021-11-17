import React from "react";
import { Col, Nav, Row, Tab, Container, Button } from 'react-bootstrap';
import img1 from "../../../assets/images/deliveryPartnerImgs/benefit.png";
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
                            <MTab label="Earn 30AED per delivery"  {...a11yProps(0)} />
                            <MTab label="Best Health Insurance and Life Insurance"  {...a11yProps(1)} />
                            <MTab label="Customised training for delivery agents"  {...a11yProps(2)} />
                            <MTab label="Earn Referral Commissions"  {...a11yProps(3)} />
                            <MTab label="Earn & transfer funds to families back home"  {...a11yProps(4)} />
                            <MTab label="Educational Scholarships for your Children"  {...a11yProps(5)} />
                            <MTab label="Rewards and Recognition"  {...a11yProps(6)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} className="service-tab-panel">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify pt-3">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify pt-3">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify pt-3">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify pt-3">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify pt-3">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
                                    </p>
                                </Col>
                                <Col sm>
                                    <img src={img1} className="imgTab" />
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Earn 30AED per delivery</h4>
                                    <p className="text-dark text-justify pt-3">
                                        Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                        <Nav.Link eventKey="first" className={"verNavLink"}>Earn 30AED per delivery</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className={"verNavLink"}>Best Health Insurance and Life Insurance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className={"verNavLink"}>Customised training for delivery agents</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className={"verNavLink"}>Earn Referral Commissions</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" className={"verNavLink"}>Earn & transfer funds to families back home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth" className={"verNavLink"}>Educational Scholarships for your Children</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven" className={"verNavLink"}>Rewards and Recognition</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs="auto" md="auto" lg={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
                                                </p>
                                            </Col>
                                            <Col sm>
                                                <img src={img1} className="imgTab" />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Earn 30AED per delivery</h4>
                                                <p className="text-dark text-justify">
                                                    Ante odio cras amet nisl quisque. Facilisi at eleifend adipiscing faucibus ultrices vitae enim. Imperdiet enim tortor imperdiet vitae, pulvinar arcu. Velit id aliquam amet neque, enim ut viverra pellentesque. Morbi dolor orci lorem elementum dolor nunc. Vel, sed vestibulum amet facilisi leo viverra vulputate cras lectus. Et mauris, ultrices pretium nisl. Accumsan, justo non non id mus pretium sodales convallis risus. Tristique nulla velit cras sit. Magna sagittis, cras purus elementum neque faucibus bibendum. A nullam auctor vestibulum dictum morbi ut.
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