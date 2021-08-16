import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo from "./../../assets/images/agslogo/Logo (2).png";

import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "../../http/API";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MainNavbar() {

  return (
      <div className="navbar-wrap">
        <Navbar
            collapseOnSelect
            expand="lg"
        >
          <Hidden smUp>
            <Navbar.Brand href="#">
              {/*<CgMenuLeftAlt*/}
              {/*  onClick={() => props.toggleDrawer(true)}*/}
              {/*  className="nav-toggle-override"*/}
              {/*/>*/}
              <img src={logo} alt="pigeon-logo" />
            </Navbar.Brand>
          </Hidden>
          <Hidden smDown>
            <Navbar.Brand href="/">
              <img src={logo} alt="pigeon-logo" />
            </Navbar.Brand>
          </Hidden>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
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