import React, {useEffect} from "react";
import {Modal, Button, Row, Col, Form, Container, Table, Card} from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Grid} from "@material-ui/core";

const CalendarView = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Ages Academic"
            style={{paddingLeft: "0px"}}
        >

            <div className="header">
                <span className={"modalIcon"} onClick={props.onHide}>
                        <ArrowBackIcon/>
                    </span>
                <div className="heading">
                    <p>Academic Calendar 2021 - 2022</p>
                </div>
            </div>
            <Modal.Body>
                <Grid container className="modal-sec">
                    <Grid item className="card-holder">
                        <div className="card-row">
                            <div className="card-head">
                                <p>TERM 1 : WINTER 2021</p>
                            </div>
                            <div className="card-sec">
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">29<span className="_circle-em">th</span></div>
                                        <span className="_circle-month">AUG</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>First day of term</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">21<span className="_circle-em">st</span></div>
                                        <span className="_circle-month">OCT</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Prophet Muhammad's (PBUH) birthday</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">03<span className="_circle-em">rd</span></div>
                                        <span className="_circle-month">Nov</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>UAE Flag Day</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">01<span className="_circle-em">st</span></div>
                                        <span className="_circle-month">Dec</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Commemoration Day</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">02<span className="_circle-em">nd</span></div>
                                        <span className="_circle-month">Dec</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>National Day</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">12<span className="_circle-em">th</span></div>
                                        <span className="_circle-month">Dec</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Beginning of Winter Break</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>TERM 2 : SPRING 2022</p>
                            </div>
                            <div className="card-sec">
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">02<span className="_circle-em">nd</span></div>
                                        <span className="_circle-month">JAN</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>First day of term</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">27<span className="_circle-em">th</span></div>
                                        <span className="_circle-month">MAR</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Beginning of Spring Break</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">02<span className="_circle-em">nd</span></div>
                                        <span className="_circle-month">APRIL</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Start of Ramadan (TBC)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>TERM 3 : SUMMER 2022</p>
                            </div>
                            <div className="card-sec">
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">10<span className="_circle-em">th</span></div>
                                        <span className="_circle-month">APRIL</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>First day of term</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">01<span className="_circle-em">st</span></div>
                                        <span className="_circle-month">MAY</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Start of Eid al-Fiter</p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">02<span className="_circle-em">nd</span></div>
                                        <span className="_circle-month">May</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Eid al-Fiter ends</p>
                                    </div>
                                </div>

                                <div className="circle-holder lg">
                                    <div className="_circle lg">
                                        <div className="_circle-inner">
                                            01<span className="_circle-em">st</span>
                                            -
                                            05<span className="_circle-em">th</span>
                                        </div>
                                        <span className="_circle-month">May</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Public Holiday</p>
                                    </div>
                                </div>

                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">03<span className="_circle-em">rd</span></div>
                                        <span className="_circle-month">July</span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>Last day of Academic Year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Modal.Body>
        </Modal>
    );
};

export default CalendarView;