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
        <div className={"InfoTabsBrand"}>
            <h3 className={"InfoTitle"}>The Benefits for Influencers</h3>
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
                            <MTab label="Join the network of Influencers "  {...a11yProps(0)} />
                            <MTab label="Get easy access to brands"  {...a11yProps(1)} />
                            <MTab label="Create content and start earning"  {...a11yProps(2)} />
                            <MTab label="Refer to your friends and earn "  {...a11yProps(3)} />
                            <MTab label="Work with international brands "  {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} className="service-tab-panel">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <h4 className="InfoSubtitle mt-4">Join the network of Influencers </h4>
                                    <p className="text-dark text-justify">
                                        Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                    <h4 className="InfoSubtitle mt-4">Join the network of Influencers </h4>
                                    <p className="text-dark text-justify pt-3">
                                        Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                    <h4 className="InfoSubtitle mt-4">Join the network of Influencers </h4>
                                    <p className="text-dark text-justify pt-3">
                                        Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                    <h4 className="InfoSubtitle mt-4">Join the network of Influencers </h4>
                                    <p className="text-dark text-justify pt-3">
                                        Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                    <h4 className="InfoSubtitle mt-4">Join the network of Influencers </h4>
                                    <p className="text-dark text-justify pt-3">
                                        Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                        <Nav.Link eventKey="first" className={"verNavLink"}>Join the network of Influencers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className={"verNavLink"}>Get easy access to brands</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className={"verNavLink"}>Create content and start earning</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className={"verNavLink"}>Refer to your friends and earn </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" className={"verNavLink"}>Work with international brands </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs="auto" md="auto" lg={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col sm={8}>
                                                <h4 className="InfoSubtitle">Join the network of Influencers </h4>
                                                <p className="text-dark text-justify">
                                                    Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                                <h4 className="InfoSubtitle">Join the network of Influencers </h4>
                                                <p className="text-dark text-justify">
                                                    Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                                <h4 className="InfoSubtitle">Join the network of Influencers </h4>
                                                <p className="text-dark text-justify">
                                                    Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                                <h4 className="InfoSubtitle">Join the network of Influencers </h4>
                                                <p className="text-dark text-justify">
                                                    Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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
                                                <h4 className="InfoSubtitle">Join the network of Influencers </h4>
                                                <p className="text-dark text-justify">
                                                    Join the world’s largest database of social media influencers on Facebook, Instagram TikTok. Let the brands discover you and collaborate with you. QLIQER gives you an opportunity to bring your talent to the center stage and allows you to earn while pursuing your passion.
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