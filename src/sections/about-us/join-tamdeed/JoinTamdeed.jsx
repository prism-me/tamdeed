import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";



export default function JoinTamdeed() {

    return (
        <div className={"join-tamdeed"}>
            <p className={"subtitle"}>
                Your future career with Tamdeed Projects
            </p>
            <h3 className={"title"}>
                Join Tamdeed Projects
            </h3>
            <p className={"subtitle"}>
                We welcome skilled and talented candidates who are interested in joining Tamdeed Projects team to further develop their career.
            </p>
            <div className="d-flex justify-content-center align-items-center">
                <LinkContainer to="/career">
                    <Nav.Link className="btnStyle">
                        Join Us <ChevronRightIcon />
                    </Nav.Link>
                  </LinkContainer>
            </div>
        </div>
    )
}