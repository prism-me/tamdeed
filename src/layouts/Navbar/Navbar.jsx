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

// export const baseUrl = i18n.language === 'ar' ? '' : '/' + i18n.language;

function MainNavbar(props) {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  const history = useHistory();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // }
  return (
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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navborder">
            <LinkContainer to={STRINGS.ROUTES.ABOUT_US}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={STRINGS.ROUTES.ACADEMICS}>
              <Nav.Link> Academics </Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to={baseUrl + "/Student-care"}> */}
            <LinkContainer to={"/Student-care"}>
              <Nav.Link> Student care </Nav.Link>
            </LinkContainer>
            <LinkContainer to={STRINGS.ROUTES.AGS_PORTAL}>
              <Nav.Link>AGS Portal</Nav.Link>
            </LinkContainer>
            <LinkContainer to={STRINGS.ROUTES.CONTACT_US}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Enroll">
              <button className={"enrollButton"}>Enroll</button>
            </LinkContainer>
            <NavDropdown
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
                      i18next.changeLanguage(code)
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default MainNavbar;