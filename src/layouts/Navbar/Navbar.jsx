import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";

import logo from "./../../assets/images/agslogo/Logo (2).png";

import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "../../http/API";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgMenuLeftAlt } from "react-icons/cg";
import { STRINGS } from "../../utils/base";
import i18n from '../../i18n';
// import { withNamespaces } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import { useDispatch } from "react-redux";
import * as Actions from "../../redux/global/actions";

// import * as React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import logoSidebar from "./../../assets/images/agslogo/Logo.png";

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]

function MainNavbar(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "340px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="d-flex justify-content-end align-items-center">
        <span className="DrawerCloseIcon">
          <ClearIcon
            onClick={() => {
              toggleDrawer(false);
            }}
          />
        </span>
      </div>
      <div className="drawer-logo d-flex justify-content-start align-items-center">
        <img
          src={logoSidebar}
          alt="AGS Logo"
          style={{ width: "37%", marginLeft: "1.5rem" }}
          onClick={() => {
            history.push("/");
            toggleDrawer(false);
          }}
        />
      </div>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className="ListStyle"
      >
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${currentLanguageCode}${STRINGS.ROUTES.ABOUT_US}`);
              toggleDrawer(false);
            }}
            primary="About us"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${currentLanguageCode}${STRINGS.ROUTES.ACADEMICS}`);
              toggleDrawer(false);
            }}
            primary="Academics"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${currentLanguageCode}${STRINGS.ROUTES.STUDENT_CARE}`);
              toggleDrawer(false);
            }}
            primary="Student care"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${currentLanguageCode}${STRINGS.ROUTES.AGS_PORTAL}`);
              toggleDrawer(false);
            }}
            primary="AGS Portal"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${currentLanguageCode}${STRINGS.ROUTES.CONTACT_US}`);
              toggleDrawer(false);
            }}
            primary="Contact us"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`);
              toggleDrawer(false);
            }}
          // primary="Enroll"
          >
            <button style={{
              background: "#1A2C52",
              border: "none",
              color: "white",
              padding: "0.3rem 0rem",
              borderRadius: "60px",
              width: "43%"
            }}>Enroll</button>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();
  let dispatch = useDispatch();

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  const history = useHistory();

  console.log("main", `/${currentLanguageCode}${STRINGS.ROUTES.ABOUT_US}`)
  return (
    <>
      <div className="navbar-wrap">
        <Navbar
          collapseOnSelect
          expand="lg"
        >
          <Hidden mdUp>
            <Navbar.Brand>
              <CgMenuLeftAlt
                onClick={() => props.toggleDrawer(true)}
                className="nav-toggle-override"
              />
              <img
                src={logo}
                alt="AGS-logo"
                onClick={() => history.push("/")}
              />
            </Navbar.Brand>
          </Hidden>
          {!isPlaying ? (
            <Hidden smDown>
              <Navbar.Brand
                // href="/"
                // href={`/` || `/${props.global.activeLanguage}`}
                style={{ cursor: "pointer" }}
              >
                <img src={logo} alt="AGS-logo"
                  onClick={() => history.push("/")}
                />
              </Navbar.Brand>
            </Hidden>
          ) : null}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navborder">
              {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ABOUT_US}`}>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ACADEMICS}`}>
                <Nav.Link> Academics </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.STUDENT_CARE}`}>
                <Nav.Link> Student care </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.AGS_PORTAL}`}>
                <Nav.Link>AGS Portal</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.CONTACT_US}`}>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}>
                <button className={"enrollButton"}>Enroll</button>
              </LinkContainer>
              <Hidden smDown>
                <div
                  // href="/"
                  // href={`/` || `/${props.global.activeLanguage}`}
                  style={{ cursor: "pointer" }}
                >
                  {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <MenuIcon
                        onClick={toggleDrawer(anchor, true)}
                        className="nav-toggle-overrideDesktop"
                      />
                      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </Hidden>
              {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title={t('language')}
              menuVariant="light"
            >
              {languages.map(({ code, name, country_code }) => (
                <NavDropdown.Item key={country_code}>
                  <a
                    href="#"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code);
                      //history.push(`/${code}${STRINGS.ROUTES.ABOUT_US}`)
                      dispatch(Actions.setCurrentLngCode(code))
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default MainNavbar;