import React from 'react';
import { Grid } from "@material-ui/core";
import { Card, Col, Container, Row } from "react-bootstrap";
import bg_img_e from "../../../assets/images/agsbackgrounds/AGSEthosPhoto.jpg"
import { Hidden } from "@material-ui/core";

const AgsEthos = (props) => {
    return (
        <div className="Ethos-page">
            <h3 className={"Title"}>
                {props.AGSEthos?.title}
                {/* AGS ETHOS */}
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
                                    {/* <h4 className={"intro-title"}>
                                        OUR VISION
                                    </h4> */}
                                    <p className={"subtitle"}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                props.AGSEthos?.description
                                        }}
                                    >
                                        {/* We aim to create an environment where everyone aspires to build a peaceful world, to grow through intercultural understanding and respect, and to succeed in the 21st century. */}
                                    </p>
                                    {/* <h4 className={"intro-title"}>
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
                                    </p> */}
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
                            {/* <h4 className={"intro-title"}>
                                OUR VISION
                            </h4> */}
                            <p className={"subtitle"}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        props.AGSEthos?.description
                                }}
                            >
                                {/* We aim to create an environment where everyone aspires to build a peaceful world, to grow through intercultural understanding and respect, and to succeed in the 21st century. */}
                            </p>
                            {/* <h4 className={"intro-title"}>
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
                            </p> */}
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>
        </div>
    );
};

export default AgsEthos;