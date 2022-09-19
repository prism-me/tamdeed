import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "../../assets/images/logo/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import { HashLink } from "react-router-hash-link"
import { API } from "../../http/API";


function MainNavbar(props) {

  const [headerLogoDetail, setHeaderLogoDetail] = useState();

  useEffect(() => {
    API.get(`/pages`)
      .then((response) => {
        // debugger;
        if (response.status === 200 || response.status === 201) {
          let currentPage = response.data.data.find((x) => x.slug === "header");

          API.get(`/all_sections/${currentPage._id}`)
            .then((res) => {

              if (res.data.data.length > 0) {
                setHeaderLogoDetail(res.data.data[0]);
              }

            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="navbar-wrap">
        <Navbar collapseOnSelect expand="lg">
          <LinkContainer to="/TCP">
            <Navbar.Brand>
              <Hidden smDown>
                <Navbar.Brand>
                  <img src={headerLogoDetail?.content?.hedaerLogo} alt="Tamdeed-logo" />
                  <h2
                    style={{ fontSize: "13.5px", color: "#679D74", marginTop: "-0.6rem" }}
                  >{headerLogoDetail?.content?.hedaerLogoText}</h2>
                </Navbar.Brand>
              </Hidden>
              <Hidden mdUp>
                <Navbar.Brand>
                  <img src={logo} alt="Tamdeed-logo" />
                  <CgMenuLeftAlt
                    onClick={() => props.toggleDrawer(true)}
                    className="nav-toggle-override "
                  />
                </Navbar.Brand>
              </Hidden>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navborder pl-4">
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/solution-service">
                <Nav.Link>Solutions & Services</Nav.Link>
              </LinkContainer>
              <HashLink to={`/` + "#industries"} className={"nav-link"}>
                Industries
              </HashLink>
              {/* <LinkContainer to="/industries">
                <Nav.Link>Industries</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/media-center">
                <Nav.Link>Media Center</Nav.Link>
              </LinkContainer>
            </Nav>
            {/* <div className="box">
              <div className="container-2">
                <span className="icon"><SearchIcon /></span>
                <input type="search" id="search" placeholder="Search..." />
              </div>
            </div> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default MainNavbar;