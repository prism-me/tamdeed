import React, { useState } from "react";
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/Mask.jpg";
import {Hidden} from "@material-ui/core";

function FeesPayments(props) {
    return (
        <div  className="FeesPayments-page" id={"Payments"}>
                <h3 className={"Title"}>FEES AND PAYMENTS</h3>
            <Hidden smDown>
                <div
                    className="FeesPayments"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    <div className="op-div">
                    </div>
                    <div className="wavy-div">
                    </div>
                    <div className="description-column">
                        <Container>
                            <Card className={"cardStyle"}>
                                <Card.Body>
                                    <Table responsive="sm" className={"text-center"}>
                                        <thead>
                                        <tr>
                                            <th>Grade</th>
                                            <th>Fees for Academic Year
                                                2021/2022 (AED)</th>
                                            <th>30% 1st Child
                                                Discounted Fee</th>
                                            <th>35% 2nd Child
                                                Discounted Fee</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Pre-K</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>KG 1</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>KG 2</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 1</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 2</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 3</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 4</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 5</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 6</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 7</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 8</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 9</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 10</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 11</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        <tr>
                                            <td>Grade 12</td>
                                            <td>32,940</td>
                                            <td>23,058</td>
                                            <td>21,411</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <div className={"d-flex justify-content-center align-items-center"}>
                                        <ul>
                                            <li >
                                                Fee Discounts are applicable on the first Academic Year only (2021/2022).
                                            </li>
                                        </ul>
                                    </div>
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
                            <Table responsive="sm" className={"text-center"}>
                                <thead>
                                <tr>
                                    <th>Grade</th>
                                    <th>Fees for Academic Year
                                        2021/2022 (AED)</th>
                                    <th>30% 1st Child
                                        Discounted Fee</th>
                                    <th>35% 2nd Child
                                        Discounted Fee</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pre-K</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>KG 1</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>KG 2</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 1</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 2</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 3</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 4</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 5</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 6</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 7</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 8</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 9</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 10</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 11</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                <tr>
                                    <td>Grade 12</td>
                                    <td>32,940</td>
                                    <td>23,058</td>
                                    <td>21,411</td>
                                </tr>
                                </tbody>
                            </Table>
                            <div className={"d-flex justify-content-center align-items-center"}>
                                <ul>
                                    <li >
                                        Fee Discounts are applicable on the first Academic Year only (2021/2022).
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>
        </div>

    );
}

export default FeesPayments;
