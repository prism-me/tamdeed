import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo from "./../../assets/images/agslogo/Logo (2).png";

import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "../../http/API";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgMenuLeftAlt } from "react-icons/cg";
export default function MainNavbar(props) {

  return (
      <div className="navbar-wrap">
        <Navbar
            collapseOnSelect
            expand="lg"
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              <Hidden smDown>
                <Navbar.Brand>
                  <img src={logo} alt="AGS-logo" />
                </Navbar.Brand>
              </Hidden>
              <Hidden mdUp>
                <Navbar.Brand>
                  <div className={"d-flex mr-auto"}>
                    <CgMenuLeftAlt
                        onClick={() => props.toggleDrawer(true)}
                        className="nav-toggle-override "
                    />
                    <img src={logo} alt="AGS-logo" />
                  </div>
                </Navbar.Brand>
              </Hidden>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navborder">
              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/academics">
                <Nav.Link> Academics </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Student-care">
                <Nav.Link> Student care </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/AGS-Portal">
                <Nav.Link>AGS Portal</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/enroll">
                <button className={"enrollButton"}>Enroll</button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}