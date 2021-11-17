import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "../../http/API";
import { types } from "../../redux/global/types";
import MenuIcon from '@material-ui/icons/Menu';

function NavbarBottom(props) {
    const history = useHistory;
    return (
        <>
            <Hidden smDown>
                <div className="navbarbottom-wrap" >
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Brand href="#home">
                            <MenuIcon
                                className="nav-toggle-override mr-1"
                            />
                            <span className={"navStyle"}>Shop by category</span>
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to={"#"}>
                                    <Nav.Link className={"navStyle"}>Shop</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"#"}>
                                    <Nav.Link className={"navStyle"}>Page 1</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"#"}>
                                    <Nav.Link className={"navStyle"}>Page 2</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"#"}>
                                    <Nav.Link className={"navStyle"}>Page 3</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"#"}>
                                    <Nav.Link className={"navStyle"}>Page 4</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav className={"ml-auto"}>
                                <LinkContainer to={"#"}>
                                    <Nav.Link className={"navStyledropdown"}>Track your order</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="AED" id="Currencydropdown" className={"navStyledropdown"}>
                                    <NavDropdown.Item href="#AED">AED</NavDropdown.Item>
                                    <NavDropdown.Item href="#AED">AED</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="English" id="languagedropdown" className={"navStyledropdown"}>
                                    <NavDropdown.Item href="#English">English</NavDropdown.Item>
                                    <NavDropdown.Item href="#English">English</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Hidden>
        </>
    );
}

export default NavbarBottom;