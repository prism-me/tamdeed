import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from 'react-scroll'

export default function JoinTeam() {

    return (
        <div className={"join-team"}>
            <p className={"subtitle"}>
                Your future career with Tamdeed Projects
            </p>
            <h3 className={"title"}>
                Join The Team
            </h3>
            <p className={"subtitle"}>
                We welcome skilled and talented candidates who are interested in joining Tamdeed Projects team to further develop their career.
            </p>
            <div className="d-flex justify-content-center align-items-center">
                {/* <button className="btnStyle">View open roles <ChevronRightIcon /></button> */}
                <Link className="btnStyle" to="open_positions" spy={true} smooth={true}>
                    View open roles <ChevronRightIcon />
                </Link>
            </div>
        </div>
    )
}