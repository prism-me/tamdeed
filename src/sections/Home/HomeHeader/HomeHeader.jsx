import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "./../../../assets/images/agslogo/Logo (1).png";
import header_bg from "./../../../assets/images/agsbanners/HomePage.jpg";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Hidden from "@material-ui/core/Hidden";

function HomeHeader(props) {
  const [isOpen, setOpen] = useState(false)
  return (
      <>
        <div className="home-header"
             style={{ backgroundImage: `url(${header_bg})` }}
        >
          <div className={"inner-header flex"}>
            <Container>
              <Row>
                <Col sm={5}>
                  <div className="description-column">
                    <div className="header-logo-wrapper">
                      <img src={logo} alt="AGS Logo" className="header-logo" />
                    </div>
                    <h1 className="intro-title">
                      AMERICAN GULF SCHOOL
                    </h1>
                    <h2 className={"intro-title2"}>
                      EDUCATION DONE RIGHT
                    </h2>
                    <p className={"subtitle"}>
                      Take a look at what the CEO of the school
                      <br /> has to say about.
                    </p>
                  </div>
                </Col>
                <Hidden smDown>
                  <Col sm={{ span: 6}} className={"iconSpace"}>
                    <div className="video-promo-content">
                      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />
                      <button className="btn About-video-play-icon" onClick={()=> setOpen(true)}>
                        <PlayArrowIcon className={"AboutVideoplaySize"}/>
                      </button>
                    </div>
                  </Col>
                </Hidden>
              </Row>
            </Container>
          </div>
          <Hidden smDown>
            <div className={"waves"}>
            </div>
          </Hidden>
        </div>
    {/*<div*/}
    {/*  className="home-header"*/}
    {/*  style={{ backgroundImage: `url(${header_bg})` }}*/}
    {/*>*/}
    {/*  <Container>*/}
    {/*    <Row>*/}
    {/*      <Col sm={5}>*/}
    {/*        <div className="description-column">*/}
    {/*          <div className="header-logo-wrapper">*/}
    {/*            <img src={logo} alt="AGS Logo" className="header-logo" />*/}
    {/*          </div>*/}
    {/*          <h1 className="intro-title">*/}
    {/*            AMERICAN GULF SCHOOL*/}
    {/*          </h1>*/}
    {/*          <h2 className={"intro-title2"}>*/}
    {/*            EDUCATION DONE RIGHT*/}
    {/*          </h2>*/}
    {/*          <p className={"subtitle"}>*/}
    {/*            Take a look at what the CEO of the school*/}
    {/*            <br /> has to say about.*/}
    {/*          </p>*/}
    {/*        </div>*/}
    {/*      </Col>*/}
    {/*      <Col sm={{ span: 6}} className={"iconSpace"}>*/}
    {/*        <div className="video-promo-content">*/}
    {/*          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />*/}
    {/*          <button className="btn About-video-play-icon" onClick={()=> setOpen(true)}>*/}
    {/*            <PlayArrowIcon className={"AboutVideoplaySize"}/>*/}
    {/*          </button>*/}
    {/*        </div>*/}
    {/*      </Col>*/}
    {/*    </Row>*/}
    {/*  </Container>*/}
    {/*</div>*/}
        </>
  );
}

export default HomeHeader;
