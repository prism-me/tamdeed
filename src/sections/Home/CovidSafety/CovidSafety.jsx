import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/Covid19Safety.jpg";
import { Hidden } from "@material-ui/core";
// import { withNamespaces } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function CovidSafety(props) {
    const { t } = useTranslation();
    return (
        <div className="Covid-page">
            <h3 className={"Title"}>
                {t('CovidtTitle')}
                {/* COVID 19 SAFETY AND PRECAUTIONS */}
            </h3>
            <Hidden smDown>
                <div className={"parent"}>
                    <div
                        className="Covid"
                        style={{ backgroundImage: `url(${header_bg})` }}
                    >
                        {/*<div className="op-div">*/}
                        {/*</div>*/}
                        {/*<div className="wavy-div">*/}
                        {/*</div>*/}
                        <div className="description-column">
                            <Container>
                                <Card className={"cardStyle"}>
                                    <Card.Body>
                                        <p className={"subtitle"}>
                                            {t('Coviddescription')}
                                            {/* American Gulf School will follow and abide by the guidelines
                                            provided by the Ministry of Health and the Sharjah Private
                                            Education Authority “SPEA”. American Gulf School administration
                                            is pleased to announce that almost all of the staff are vaccinated
                                            and soon to be 100% vaccinated. We offer full time on-campus
                                            learning for all learners everyday with full health and safety
                                            measures implemented to keep our community safe. */}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <Container>
                    <Card className={"cardStyleMBL"}>
                        <Card.Body>
                            <p className={"subtitle"}>
                                {t('Coviddescription')}
                                {/* American Gulf School will follow and abide by the guidelines
                                provided by the Ministry of Health and the Sharjah Private
                                Education Authority “SPEA”. American Gulf School administration
                                is pleased to announce that almost all of the staff are vaccinated
                                and soon to be 100% vaccinated. We offer full time on-campus
                                learning for all learners everyday with full health and safety
                                measures implemented to keep our community safe. */}
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>
        </div>
    );
}

export default CovidSafety;
