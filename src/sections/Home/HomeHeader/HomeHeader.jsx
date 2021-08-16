import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "./../../../assets/images/agslogo/Logo (1).png";
import header_bg from "./../../../assets/images/agsbanners/HomePage.jpg";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'

function HomeHeader(props) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div
      className="home-header wave-container"
      style={{ backgroundImage: `url(${header_bg})` }}
    >
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
          <Col sm={{ span: 6}} className={"iconSpace"}>
            <div className="video-promo-content">
              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />
              <button className="btn About-video-play-icon" onClick={()=> setOpen(true)}>
                <PlayArrowIcon className={"AboutVideoplaySize"}/>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      {/*<svg viewBox="0 0 500 500"*/}
      {/*     preserveAspectRatio="xMinYMin meet"*/}
      {/*     style={{zIndex:"-3"}}>*/}

      {/*  <path d="M0, 100 C150, 300 350,*/}
      {/*          0 500, 100 L500, 00 L0, 0 Z"*/}
      {/*        style={{*/}
      {/*          stroke: "none",*/}
      {/*          fill: "rgba(220, 20, 60, 0.5)"*/}
      {/*        }}>*/}
      {/*  </path>*/}
      {/*</svg>*/}
    </div>
  );
}

export default HomeHeader;
