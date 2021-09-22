import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import std1 from "../../assets/images/studentcare/acadamicsupport.jpg";
import std2 from "../../assets/images/studentcare/acadamicsupport.jpg";
import std3 from "../../assets/images/studentcare/acadamicsupport.jpg";
import "./Inclusion.scss";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Inclusion() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="MiddleSchool">
      <h3 className={"InfoTitle"}>
        Middle School
      </h3>
      <Container>
        <div className={"HowToSellspacing"}>
          <Row className="MiddleAlignCenter">
            <Col sm={12} md={4} lg={12}>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std1})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    youtube={{ autoplay: 1, mute: 1 }}
                    isOpen={isOpen}
                    videoId="RBZutrFFhTA"
                    onClose={() => setOpen(false)}
                  />
                  <button
                    className="btn video-play-icon"
                    onClick={() => setOpen(true)}
                  >
                    <PlayArrowIcon className={"playSize"} />
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={8} lg={12}>
              {/* <h3 className="title">Nec ornare.</h3> */}
              <p className={"subTitle"}>
                The AGS Middle School is designed for learners aged 11 to 16. It develops active learners and internationally minded young people who can empathize with others and pursue lives of purpose and meaning.
                It empowers learners to inquire into a wide range of issues and ideas of significance locally, nationally, and globally – essential qualities for global leaders of the future.
                It builds upon the knowledge, skills, and attitudes developed in Primary School.The result is young people who are creative, critical, and reflective thinkers.
              </p>
            </Col>
          </Row>
        </div>
        <div className={"HowToSellspacing"}>
          <Row className="TabMobileSpacing">
            <Col sm={12} md={8} lg={8}>
              <h3 className="title1">Middle Years Program</h3>
              <p className={"subTitle1"}>
                The Middle Years Program encourages learners to make practical connections between their studies and the real world. It is designed to help learners develop their personal understanding, their emerging sense of self, and their own responsibility in their community.
              </p>
              <p><b>The Middle school offers 8 subject groups:</b></p>
              <ul>
                <li>Language Acquisition</li>
                <li> Language and Literature</li>
                <li>Individuals and Society </li>
                <li>Sciences </li>
                <li>Mathematics </li>
                <li>Arts </li>
                <li>Physical and Health Education </li>
                <li>Design </li>
              </ul>
              <p className={"subTitle1"}>In Grades 9 and 10, learners have the option to take courses from six of the eight subject groups within certain limits, to provide greater flexibility in meeting local requirements and individual learner needs.</p>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std2})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    youtube={{ autoplay: 1, mute: 1 }}
                    isOpen={isOpen}
                    videoId="RBZutrFFhTA"
                    onClose={() => setOpen(false)}
                  />
                  <button
                    className="btn video-play-icon"
                    onClick={() => setOpen(true)}
                  >
                    <PlayArrowIcon className={"playSize"} />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="MiddleAlignCenter">
          <Col sm={12} md={12} lg={12} className="pt-3">
            <p className={"subTitle text-center"}>
              Each year, learners in the Middle School also engage in at least one collaboratively planned interdisciplinary unit that involves at least two subject groups.
            </p>
          </Col>
        </Row>
        <Row className="MiddleAlignCenter">
          <Col sm={12} md={12} lg={12} className="pt-3">
            <p className={"subTitle text-center"}>
              Middle School learners also complete a long-term project, where they decide what they want to learn about, identify what they already know, discover what they will need to know in order to complete the project and create a proposal or criteria for completing it.
            </p>
          </Col>
        </Row>
        <div className={"HowToSellspacing"}>
          <Row className="TabMobileSpacing">
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std3})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    youtube={{ autoplay: 1, mute: 1 }}
                    isOpen={isOpen}
                    videoId="RBZutrFFhTA"
                    onClose={() => setOpen(false)}
                  />
                  <button
                    className="btn video-play-icon"
                    onClick={() => setOpen(true)}
                  >
                    <PlayArrowIcon className={"playSize"} />
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={8} lg={8}>
              <h3 className="title1">International Mindedness and Multilingualism</h3>
              <p className={"subTitle2"}>
                We view nationality as an institutional capturing of one form of identity, and within our school, we believe that people of all nations have more in common than they do differences. American Gulf School appreciates the diverse cultures of the world and believes that education is a vehicle for creating a better, more peaceful world.
                <br />
                The AGS library has a variety of books to help learners from different backgrounds to read books in their mother tongue.
              </p>
            </Col>
          </Row>
        </div>
        <div className={"HowToSellspacing"}>
          <Row className="TabMobileSpacing mb-5">
            <Col sm={12} md={8} lg={8}>
              <h3 className="title1">Lifelong Learners</h3>
              <p className={"subTitle1"}>
                At American Gulf School, we believe that lifelong learning enables each learner to develop confidence and perseverance to tackle any challenge they are given. We encourage learners to work together inside and outside the classroom as well as online, to achieve better results.
              </p>
              <p className={"subTitle1"}>
                Lifelong learning builds self-awareness and respect for others. Learners develop invaluable leadership skills through learning to plan, negotiate, compromise, and consider. They are taught how to take constructive criticism and act upon it, as well as how to give it in order to get the task completed, therefore learning from it.
              </p>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std2})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    youtube={{ autoplay: 1, mute: 1 }}
                    isOpen={isOpen}
                    videoId="RBZutrFFhTA"
                    onClose={() => setOpen(false)}
                  />
                  <button
                    className="btn video-play-icon"
                    onClick={() => setOpen(true)}
                  >
                    <PlayArrowIcon className={"playSize"} />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Inclusion;
