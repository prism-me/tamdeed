import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "../../http/API";
import { types } from "../../redux/global/types";
import { CgMenuLeftAlt } from "react-icons/cg";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import logo from "../../assets/images/logo/QliqPay.png";
import NavbarBottom from "./NavbarBottom";
import SearchIcon from '@material-ui/icons/Search';

function MainNavbar(props) {
  const history = useHistory;
  return (
    <>
      <div className="navbar-wrap">
        <Hidden mdUp>
          <Navbar
            collapseOnSelect
            expand="lg"
            className={"navbarMBLView"}
          >
            <Navbar.Brand
              // href="/"
              // href={`/` || `/${props.global.activeLanguage}`}
              style={{ cursor: "pointer" }}
            >
              <CgMenuLeftAlt
                onClick={() => props.toggleDrawer(true)}
                className="nav-toggle-override "
              />
              <img src={logo} alt="logo"
              // onClick={() => history.push("/")}
              />
              <p className={"userInfo"}
                style={{ marginTop: "1.2rem" }}
              >
                <AccountCircleOutlinedIcon
                  style={{ fontSize: "35px" }}
                />
              </p>
            </Navbar.Brand>
            <center>
              <Form className="d-flex">
                <Form.Control as="select"
                  className={"formcolor"}
                >
                  <option>All</option>
                  <option>all</option>
                </Form.Control>
                <Form.Control as="select"
                  className={"formcolor"}
                >
                  <option>Location</option>
                  <option>Pakistan</option>
                </Form.Control>
                <FormControl
                  type="search"
                  placeholder="I’m looking for.."
                  className="searchStyleMBL"
                  aria-label="Search"
                />
                <Button className={"btnStyle"}>
                  <SearchIcon />
                </Button>
              </Form>
            </center>
          </Navbar>
        </Hidden>
        <Hidden smDown>
          <Navbar
            collapseOnSelect
            expand="lg"
          >
            <Hidden smDown>
              <Navbar.Brand
                // href="/"
                // href={`/` || `/${props.global.activeLanguage}`}
                style={{ cursor: "pointer" }}
              >
                <img src={logo} alt="logo"
                // onClick={() => history.push("/")}
                />
              </Navbar.Brand>
            </Hidden>
            <Form className="d-flex"
              style={{ marginLeft: "2rem" }}
            >
              <Form.Control as="select"
                className={"formcolor"}
              >
                <option>All</option>
                <option>all</option>
              </Form.Control>
              <Form.Control as="select"
                className={"formcolor"}
              >
                <option>Location</option>
                <option>Pakistan</option>
              </Form.Control>
              <FormControl
                type="search"
                placeholder="I’m looking for.."
                className="searchStyle"
                aria-label="Search"
              />
              <Button className={"btnStyle"}>Search</Button>
            </Form>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className={"ml-auto"}
                style={{ marginTop: "1.2rem" }}
              >
                <LinkContainer to={"#"}>
                  <p className={"userInfo"}>
                    <AccountCircleOutlinedIcon /> Welcome, User
                  </p>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Hidden>
      </div>
      <NavbarBottom />
    </>
  );
}

export default MainNavbar;