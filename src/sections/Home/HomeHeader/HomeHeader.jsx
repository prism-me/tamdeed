import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "./../../../assets/images/agslogo/Logo (1).png";
import header_bgMB from "./../../../assets/images/agsbanners/HomePage.jpg";
import header_bg from "./../../../assets/images/agsbanners/homepageBanner.png";
import AGSPrincipalWelcomeMessage from "./../../../assets/images/bannerVideo/AGSPrincipalWelcomeMessage.mp4";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Hidden from "@material-ui/core/Hidden";
import BackGroundVideo from "../../../components/BackGroundVideo/BackGroundVideo";
import PauseIcon from "@material-ui/icons/Pause";
// import { withNamespaces } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function HomeHeader(props) {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isVideo, setIsVideo] = useState(false);
  const togglePlay = () => {
    const myVideo = document.getElementById("video-id");
    // play or pause the video element
    if (myVideo.paused) {
      myVideo.play();
      // setIsVideo(true);
    } else {
      myVideo.pause();
      myVideo.load()
      // setIsVideo(false);
    }
    // update the state
    setIsPlaying(!isPlaying);
  }

  const videoSource = AGSPrincipalWelcomeMessage;

  return (
    <>
      <Hidden smDown>
        <div style={{ height: '', backgroundImage: `url(${isPlaying && header_bg})` }} className={isPlaying ? "videoBottom" : "BackgroundDiv"}>

          <BackGroundVideo
            // blur={2}
            videoSource={videoSource}>
            <div className='content'>
              {/*<div className='sub-content' >*/}
              <div className={"inner-header flex"}>
                <Container>
                  <Row>
                    <Col sm={5}>
                      <div className="description-column">
                        <div className="header-logo-wrapper">
                          <img src={logo} alt="AGS Logo" className="header-logo" />
                        </div>
                        <h1 className="intro-title">
                          {t('headerTitle')}
                          {/* AMERICAN GULF SCHOOL */}
                        </h1>
                        <p className={"intro-title2"}>
                          {t('subTitle')}
                          {/* EDUCATION DONE RIGHT */}
                        </p>
                        <p className={"subtitle"}>
                          {t('subTitle1')}
                          {/* Take a look at what the CEO of the school */}
                          <br />
                          {t('subTitle2')}
                          {/* has to say about. */}
                        </p>
                      </div>
                    </Col>
                    <Hidden smDown>
                      <Col sm={{ span: 6 }} className={"iconSpace"}>
                        <div className="video-promo-content">
                          <button className="btn About-video-play-icon"
                            onClick={togglePlay}
                          >
                            {isPlaying ? (
                              <PauseIcon className={"AboutVideoplaySize"} />
                            ) : (
                              <PlayArrowIcon className={"AboutVideoplaySize"} />
                            )}
                          </button>
                        </div>
                      </Col>
                    </Hidden>
                  </Row>
                </Container>
              </div>
              {/*<Hidden smDown>*/}
              {/*  <div className={"waves"}>*/}
              {/*  </div>*/}
              {/*</Hidden>*/}
            </div>
          </BackGroundVideo>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className="home-header"
          style={{ backgroundImage: `url(${header_bgMB})` }}
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
                      {t('headerTitle')}
                      {/* AMERICAN GULF SCHOOL */}
                    </h1>
                    <p className={"intro-title2"}>
                      {t('subTitle')}
                      {/* EDUCATION DONE RIGHT */}
                    </p>
                    <p className={"subtitle"}>
                      {t('subTitle1')}
                      {/* Take a look at what the CEO of the school */}
                      <br />
                      {t('subTitle2')}
                      {/* has to say about. */}
                    </p>
                  </div>
                </Col>
                <Hidden smDown>
                  <Col sm={{ span: 6 }} className={"iconSpace"}>
                    <div className="video-promo-content">
                      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />
                      <button className="btn About-video-play-icon" onClick={() => setOpen(true)}>
                        <PlayArrowIcon className={"AboutVideoplaySize"} />
                      </button>
                    </div>
                  </Col>
                </Hidden>
              </Row>
            </Container>
          </div>
          {/*<Hidden smDown>*/}
          {/*  <div className={"waves"}>*/}
          {/*  </div>*/}
          {/*</Hidden>*/}
        </div>
      </Hidden>
    </>
  );
}

export default HomeHeader;
