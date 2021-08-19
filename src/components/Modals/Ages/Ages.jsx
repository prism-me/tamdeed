import React, { useEffect } from "react";
import {Modal, Button, Row, Col, Form, Container, Table, Card} from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Ages = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Ages"
            style={{ paddingLeft: "0px" }}
        >
                    <span className={"modalIcon"} onClick={props.onHide}>
                        <ArrowBackIcon/>
                    </span>
            <Modal.Body>
                <Table responsive="sm" className={"text-center"}>
                    <thead>
                    <tr>
                        <th>Age</th>
                        <th>American Gulf School (GRADE)</th>
                        <th>North America (GRADE)</th>
                        <th>England (YEAR)</th>
                        <th>French</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3 years old as of August
                            31 (potty trained)
                        </td>
                        <td>PreK</td>
                        <td>-</td>
                        <td>FS1 (Nursery)</td>
                        <td>Ecole Maternelle</td>
                    </tr>
                    <tr>
                        <td>4 years old as of August 31 (potty trained)</td>
                        <td>KG 1</td>
                        <td>PreK</td>
                        <td>FS2 (Reception)</td>
                        <td>Ecole Maternellee</td>
                    </tr>
                    <tr>
                        <td>5 years old as of August 31</td>
                        <td>KG 2</td>
                        <td>KG</td>
                        <td>1</td>
                        <td>Ecole Maternelle</td>
                    </tr>
                    <tr>
                        <td>5 years old as of August 31</td>
                        <td>KG 2</td>
                        <td>KG</td>
                        <td>1</td>
                        <td>Ecole Maternelle</td>
                    </tr>
                    <tr>
                        <td>6 years old as of August 31</td>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>CP</td>
                    </tr>
                    <tr>
                        <td>7 years</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>8 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>9 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>10 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>11 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>12 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>13 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    <tr>
                        <td>14 years</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>CE1</td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    );
};

export default Ages;
