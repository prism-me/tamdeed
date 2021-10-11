import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container, Table, Card } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid } from "@material-ui/core";
import { constants } from "../../../utils/constants"
import dateFormat from 'dateformat';

const CalendarView = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // className="Ages Academic"
            className={
                props.language
                    ? " Ages Academic agsModalDirArabic"
                    : "Ages Academic  agsModalDir"
            }
            style={{ paddingLeft: "0px" }}
        >

            <div className="header">
                <span className={
                    props.language
                        ? "modalIcon modalIconArabic"
                        : "modalIcon"}
                    onClick={props.onHide}>
                    <ArrowBackIcon />
                </span>
                <div className="heading">
                    <p>
                        {
                            constants?.site_content?.calender?.title[
                            props.lang
                            ]
                        }
                        {/* Academic Calendar 2021 - 2022 */}
                    </p>
                </div>
            </div>
            <Modal.Body>
                <Grid container className="modal-sec">
                    <Grid item className="card-holder">
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term1[
                                        props.lang
                                        ]
                                    }
                                    {/* TERM 1 : WINTER 2021 */}
                                </p>
                            </div>
                            <div className="card-sec">
                                {props?.term1Sec?.map((slides, index) => (
                                    <div className="circle-holder">
                                        <div className="_circle">
                                            <div className="_circle-inner">
                                                <span>
                                                    {
                                                        dateFormat(`${slides.date}`, "dS mmmm")
                                                    }
                                                </span>
                                                {slides.enddate === null ?
                                                    "" :
                                                    <span>
                                                        &mdash;
                                                        {
                                                            dateFormat(`${slides.enddate}`, "dS mmmm")
                                                        }
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                        <div className="_circle-txt">
                                            <p>
                                                {
                                                    props.language
                                                        ? slides?.arabic?.name
                                                        : slides.name
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term2[
                                        props.lang
                                        ]
                                    }
                                    {/* TERM 2 : SPRING 2022 */}
                                </p>
                            </div>
                            <div className="card-sec">
                                {props?.term2Sec?.map((slides, index) => (
                                    <div className="circle-holder">
                                        <div className="_circle">
                                            <div className="_circle-inner">
                                                <span>
                                                    {
                                                        dateFormat(`${slides.date}`, "dS mmmm")
                                                    }
                                                </span>
                                                {slides.enddate === null ?
                                                    "" :
                                                    <span>
                                                        &mdash;
                                                        {
                                                            dateFormat(`${slides.enddate}`, "dS mmmm")
                                                        }
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                        <div className="_circle-txt">
                                            {
                                                props.language
                                                    ? slides?.arabic?.name
                                                    : slides.name
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term3[
                                        props.lang
                                        ]
                                    }
                                    {/* TERM 3 : SUMMER 2022 */}
                                </p>
                            </div>
                            <div className="card-sec">
                                {props?.term3Sec?.map((slides, index) => (
                                    <div className="circle-holder">
                                        <div className="_circle">
                                            <div className="_circle-inner">
                                                <span>
                                                    {
                                                        dateFormat(`${slides.date}`, "dS mmmm")
                                                    }
                                                </span>
                                                {slides.enddate === null ?
                                                    "" :
                                                    <span>
                                                        &mdash;
                                                        {
                                                            dateFormat(`${slides.enddate}`, "dS mmmm")
                                                        }
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                        <div className="_circle-txt">
                                            {
                                                props.language
                                                    ? slides?.arabic?.name
                                                    : slides.name
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Modal.Body>
        </Modal>
    );
};

export default CalendarView;