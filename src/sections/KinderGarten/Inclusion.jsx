import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import std1 from "../../assets/images/KG/KGBanner.JPG";
import std2 from "../../assets/images/KG/KGPhoto1.jpg";
import std3 from "../../assets/images/KG/KGPhoto2.jpg";
import "./Inclusion.scss";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Inclusion() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="KinderGarten">
      <Container>
        <div className={"HowToSellspacing"}>
          <Row className="TopKinderTitle">
            <h4 className="text-center w-100 mb-4">KINDERGARTEN</h4>
          </Row>
          <Row className="MiddleAlignCenter">
            <Col sm={12} md={12} lg={12}>
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
          </Row>
          <Row className="MiddleAlignCenter">
            <Col sm={12} md={12} lg={12} className="pt-5">
              <p className={"subTitle mt-3 text-center"}>
                American Gulf School has created a dynamic <strong>Pre-K, KG1 and KG2</strong> Program to fulfill the developmental needs and interests of 3- to 6-year-old learners. Learning at AGS is a holistic learning experience that ensures all aspects of development are integrated (social, emotional, physical, and cognitive). At AGS, we believe that learners will only make excellent academic growth when they are happy, feel safe and are settled socially. We place a strong emphasis on pastoral care from the moment a child joins our school.
              </p>
            </Col>
          </Row>
        </div>
        <div className={"HowToSellspacing featured-section"}>
          <Row className="MiddleAlignCenter ">
            <Col sm={12} md={8} lg={8} >
              <p className={"subTitle mt-3"}>
                At AGS we ensure that to achieve these goals and expectations, our KG department is flexible, ensuring children’s learning is through play and practical hands-on activities. Our Kindergarten curriculum is designed to foster curiosity, inspire, and teach children to be reflective. To support learning, our classroom environments are set up so learners can move freely around areas for reading, writing, art, construction, imaginative play, science, and mathematics. Class sizes of no more than 15 children are permitted.  Learners benefit from the educational experiences that their teachers provide for them. It is for this reason that each classroom is staffed by a qualified, experienced teacher, one full-time teacher assistant and an academic support teacher when needed.
              </p>
            </Col>
            <Col sm={12} md={4} lg={4} className="MiddleAlignCenter">
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
              Each child’s mental, physical, and social abilities are developed through a multi-sensory approach to education. Individual and group activities stimulate cognitive development and social growth. In addition, teachers often divide classes into smaller work groups and employ a system of learning centers to maximize each child’s achievement.
            </p>
          </Col>
        </Row>
        <Row className="MiddleAlignCenter">
          <Col sm={12} md={12} lg={12} className="pt-3">
            <p className={"subTitle text-center"}>
              At American Gulf School, we continually and consistently encourage each child to grow and develop individually, honoring each child’s uniqueness. Young children need extended periods of time and as much space as possible to discover, investigate and play, with a variety of materials, in order to learn about themselves, other people and the world around them.
            </p>
          </Col>
        </Row>

        <div className={"HowToSellspacing lastSection"}>
          <Row className="MiddleAlignCenter">
            <Col sm={12} md={4} lg={4} className='MobileBottomSpacing'>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std3})`, height: "410px" }}
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
            <Col sm={12} md={8} lg={8} className="pl-5 MobileSpacing">
              <p className={"subTitle mt-3"}>
                <p className={"subTitle2"}>
                  The KG environment reflects the natural developmental stages of learning and characterizes our program through our well-equipped and organized:
                </p>
                <ul>
                  <li>Classrooms</li>
                  <li>Resource room</li>
                  <li>STREAM Lab</li>
                  <li>Indoor soft play gym</li>
                  <li>Garden courtyard</li>
                  <li>Outside play areas</li>
                </ul>
              </p>
              <p className={"subTitle mt-3"}>
                <p className={"subTitle2"}>
                  A learner's interaction in and with these spaces stimulates them
                  to become active learners, by providing ongoing opportunities
                  for them to:
                </p>
                <ul>
                  <li>Make choices and decisions.</li>
                  <li>Use materials in flexible and imaginative ways.</li>
                  <li>Initiate inquiry and ask questions.</li>
                  <li>Work collaboratively with others.</li>
                  <li>Sustain their interests and extend their knowledge.</li>
                  <li>Develop understanding of the world around them.</li>
                </ul>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Inclusion;
