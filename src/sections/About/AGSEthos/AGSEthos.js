import React from 'react';
import { Grid } from "@material-ui/core";
import { Card, Col, Container, Row } from "react-bootstrap";
import bg_img_e from "../../../assets/images/agsbackgrounds/AGSEthosPhoto.jpg"
import { Hidden } from "@material-ui/core";

const AgsEthos = () => {
    return (
        <div className="Ethos-page">
            <h3 className={"Title"}>
                AGS ETHOS
            </h3>
            <Hidden smDown>
                <div
                    className="Ethos"
                    style={{ backgroundImage: `url(${bg_img_e})` }}
                >
                    <div className="description-column">
                        <Container>
                            <Card className={"cardStyle"}>
                                <Card.Body>
                                    <h4 className={"intro-title"}>
                                        OUR VISION
                                    </h4>
                                    <p className={"subtitle"}>
                                        We aim to create an environment where everyone aspires to build a peaceful world, to grow through intercultural understanding and respect, and to succeed in the 21st century.
                                    </p>
                                    <h4 className={"intro-title"}>
                                        OUR MISSION
                                    </h4>
                                    <p className={"subtitle"}>
                                        To provide a safe, friendly learning environment where our learners follow an innovative and evolving 21st century curriculum that promotes design thinking skills. We will focus on nurturing academic excellence through fun and engaging lessons that will encompass our values in our international-minded future leaders.
                                    </p>
                                    <h4 className={"intro-title"}>
                                        OUR MOTTO
                                    </h4>
                                    <p className={"subtitle"}>
                                        Aspire, Grow, Succeed
                                    </p>
                                    <h4 className={"intro-title"}>
                                        OUR VALUES
                                    </h4>
                                    <p className={"subtitle"}>
                                        Principled, Reflective, Open-Minded, Risk-takers, Caring, Balanced, Knowledgeable, Inquirers, Communicators, Thinkers
                                    </p>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <Container>
                    <Card className={"cardStyleMBL"}>
                        <Card.Body>
                            <h4 className={"intro-title"}>
                                OUR VISION
                            </h4>
                            <p className={"subtitle"}>
                                We aim to create an environment where everyone aspires to build a peaceful world, to grow through intercultural understanding and respect, and to succeed in the 21st century.
                            </p>
                            <h4 className={"intro-title"}>
                                OUR MISSION
                            </h4>
                            <p className={"subtitle"}>
                                To provide a safe, friendly learning environment where our learners follow an innovative and evolving 21st century curriculum that promotes design thinking skills. We will focus on nurturing academic excellence through fun and engaging lessons that will encompass our values in our international-minded future leaders.
                            </p>
                            <h4 className={"intro-title"}>
                                OUR MOTTO
                            </h4>
                            <p className={"subtitle"}>
                                Aspire, Grow, Succeed
                            </p>
                            <h4 className={"intro-title"}>
                                OUR VALUES
                            </h4>
                            <p className={"subtitle"}>
                                Principled, Reflective, Open-Minded, Risk-takers, Caring, Balanced, Knowledgeable, Inquirers, Communicators, Thinkers
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>

            {/* <h3 className="InfoTitle">AGS` ETHOS</h3>
            <div className="ethos_bg">
                <img alt={'#'} className={"ethos_bg"} src={bg_img_e} style={{
                    visibility: "hidden",
                    display: "inline-block"
                }} />
                <h3 className="InfoTitle-Ethos">AGS ETHOS</h3>
                <Grid container sm={12} className="d-flex w-100 justify-content-center align-items-center position-absolute">
                    <Card className={"cardStyle"}>
                        <Card.Body className="card-body">
                            <Grid container className="card-cont">
                                <div className="cont-sep">
                                    <Grid item className={""}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                                <h4 className={"intro-title"}>
                                                    OUR VISION
                                                </h4>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <p className={"subtitle"}>
                                                    We aim to create an environment where everyone aspires to build a peaceful world, to grow through intercultural understanding and respect, and to succeed in the 21st century.
                                                </p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={""}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                                <h4 className={"intro-title"}>
                                                    OUR MISSION
                                                </h4>
                                            </Grid>
                                            <Grid >
                                                <p className={"subtitle"}>
                                                    To provide a safe, friendly learning environment where our learners follow an innovative and evolving 21st century curriculum that promotes design thinking skills. We will focus on nurturing academic excellence through fun and engaging lessons that will encompass our values in our international-minded future leaders.
                                                </p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="cont-sep">
                                    <Grid item className={""}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                                <h4 className={"intro-title"}>
                                                    OUR MOTTO
                                                </h4>
                                            </Grid>
                                            <Grid item xs sm md lg>
                                                <p className={"subtitle"}>
                                                    Aspire, Grow, Succeed
                                                </p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={""}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12} lg={12} className={"d-flex align-items-center"}>
                                                <h4 className={"intro-title"}>
                                                    OUR VALUES
                                                </h4>
                                            </Grid>
                                            <Grid >
                                                <p className={"subtitle"}>
                                                    Principled, Reflective, Open-Minded, Risk-takers, Caring, Balanced, Knowledgeable, Inquirers, Communicators, Thinkers
                                                </p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Card.Body>
                    </Card>
                </Grid>
            </div> */}
        </div>
    );
};

export default AgsEthos;