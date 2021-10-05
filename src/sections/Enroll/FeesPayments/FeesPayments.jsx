import React, { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/backgroundCurve.png";
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants"

function FeesPayments(props) {
    return (
        <div className="FeesPayments-page" id={"Payments"}>
            <h3 className={"Title"} id={"Tuition_Fees"}>
                {
                    constants?.site_content?.enrollTabs?.tab3[
                    props.language
                    ]
                }
                {/* FEES AND PAYMENTS */}
            </h3>
            <Hidden smDown>
                <div
                    className="FeesPayments"
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
                                    <Table responsive="sm" className={"text-center"}>
                                        <thead>
                                            <tr>
                                                <th>Grade</th>
                                                <th>Fees for Academic Year 2021/2022 (AED)</th>
                                                <th>30% Discounted Fees for Academic Year 2021/2022 (AED)</th>
                                                {/* <th>35% 2nd Child
                                                    Discounted Fee</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Pre-K</td>
                                                <td>34,940</td>
                                                <td>25,058</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>KG 1</td>
                                                <td>37,740</td>
                                                <td>27,018</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>KG 2</td>
                                                <td>40,040</td>
                                                <td>28,628</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 1</td>
                                                <td>43,440</td>
                                                <td>31,008</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 2</td>
                                                <td>44,840</td>
                                                <td>31,988</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 3</td>
                                                <td>47,240</td>
                                                <td>33,668</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 4</td>
                                                <td>49,640</td>
                                                <td>35,348</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 5</td>
                                                <td>51,040</td>
                                                <td>36,328</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 6</td>
                                                <td>54,440</td>
                                                <td>38,708</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 7</td>
                                                <td>55,840</td>
                                                <td>39,688</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 8</td>
                                                <td>58,240</td>
                                                <td>41,368</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 9</td>
                                                <td>63,640</td>
                                                <td>45,148</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 10</td>
                                                <td>67,040</td>
                                                <td>47,528</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 11</td>
                                                <td>71,440</td>
                                                <td>50,608</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                            <tr>
                                                <td>Grade 12</td>
                                                <td>74,840</td>
                                                <td>52,988</td>
                                                {/* <td>21,411</td> */}
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className={"d-flex justify-content-center align-items-center font-weight-bold"}>
                                        <ul>
                                            <li >
                                                30% discount will be applied to the Academic Year 2021/2022.
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
                                        <th>Fees for Academic Year 2021/2022 (AED)</th>
                                        <th>30% Discounted Fees for Academic Year 2021/2022 (AED)</th>
                                        {/* <th>35% 2nd Child
                                                    Discounted Fee</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pre-K</td>
                                        <td>34,940</td>
                                        <td>25,058</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>KG 1</td>
                                        <td>37,740</td>
                                        <td>27,018</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>KG 2</td>
                                        <td>40,040</td>
                                        <td>28,628</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 1</td>
                                        <td>43,440</td>
                                        <td>31,008</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 2</td>
                                        <td>44,840</td>
                                        <td>31,988</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 3</td>
                                        <td>47,240</td>
                                        <td>33,668</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 4</td>
                                        <td>49,640</td>
                                        <td>35,348</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 5</td>
                                        <td>51,040</td>
                                        <td>36,328</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 6</td>
                                        <td>54,440</td>
                                        <td>38,708</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 7</td>
                                        <td>55,840</td>
                                        <td>39,688</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 8</td>
                                        <td>58,240</td>
                                        <td>41,368</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 9</td>
                                        <td>63,640</td>
                                        <td>45,148</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 10</td>
                                        <td>67,040</td>
                                        <td>47,528</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 11</td>
                                        <td>71,440</td>
                                        <td>50,608</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                    <tr>
                                        <td>Grade 12</td>
                                        <td>74,840</td>
                                        <td>52,988</td>
                                        {/* <td>21,411</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                            <div className={"d-flex justify-content-center align-items-center font-weight-bold"}>
                                <ul>
                                    <li>
                                        30% discount will be applied to the Academic Year 2021/2022.
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
