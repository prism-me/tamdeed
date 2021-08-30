import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import std1 from "../../assets/images/studentcare/student1.png";
import std2 from "../../assets/images/studentcare/student2.png";
import std3 from "../../assets/images/studentcare/student3.png";
import "./Inclusion.scss";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Inclusion() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="Inclusion">
      <Container>
        <div className={"HowToSellspacing"}>
          <Row className="MiddleAlignCenter">
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std1})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    autoplay
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
              <h3 className="title mb-5">Nec ornare.</h3>
              <p className={"subTitle mt-3"}>
                Quam sit eget in leo. Consectetur pellentesque adipiscing aenean
                amet leo vitae. Risus ornare dui quis donec mauris amet purus.
                Praesent enim commodo urna lacinia. Volutpat varius nullam quis
                sed quam enim. Neque, velit ac et, elementum. Vulputate tempor
                duis at lectus. Sed lorem eget tellus, vel odio diam magna nunc.
                Massa ipsum aliquam ullamcorper amet. Et nunc facilisi sed
                aliquet bibendum cras curabitur commodo netus. Turpis
                consectetur in pellentesque quam justo, ac dictumst consequat.
                Molestie vulputate sed mattis netus nunc, vel ante. <br />
                Id netus vestibulum donec neque. Bibendum aliquam orci convallis
                velit.
              </p>
            </Col>
          </Row>
        </div>
        <div className={"HowToSellspacing"}>
          <Row className="MiddleAlignCenter">
            <Col sm={12} className="MobileView">
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std2})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    autoplay
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
            <Col sm={12} md={8} lg={8} className="pr-5 MobileSpacing">
              <h3 className="title mb-5">Turpis vitae.</h3>
              <p className={"subTitle mt-3"}>
                Congue faucibus at aliquet tincidunt nisi, habitant euismod
                mauris. Ultrices porta turpis lectus ut. Ipsum leo mi augue
                viverra. Ipsum, leo quam augue aliquam at vitae blandit neque
                leo. At massa varius orci, sagittis accumsan neque quam nisl.
                Fames nisi, in cum pellentesque auctor tortor. <br />
                Id ac nisi cras vitae bibendum sed turpis porttitor. Eu in eget
                cras odio. <br />
                Viverra pellentesque arcu ultrices nibh purus nisi, sed. Proin
                sit id id nunc varius elementum amet morbi volutpat. Ultrices
                purus, lorem bibendum augue enim elementum donec eleifend
                egestas. Commodo ut ultrices amet mi, maecenas lorem diam
                dignissim. <br />
                Aenean nisl lectus ut ultrices orci cursus eu faucibus odio.
                Mattis nulla.
              </p>
            </Col>
            <Col sm={12} md={4} lg={4} className="DesktopView">
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std2})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    autoplay
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
        <div className={"HowToSellspacing lastSection"}>
          <Row className="MiddleAlignCenter">
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-center align-items-center imgheight"
                style={{ backgroundImage: `url(${std3})` }}
              >
                <div className="video-promo-content mt-4 ">
                  <ModalVideo
                    channel="youtube"
                    autoplay
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
              <h3 className="title mb-5">Pellentesque.</h3>
              <p className={"subTitle mt-3"}>
                Ac quam at et, libero orci fames at convallis. Pellentesque
                lacus sit aliquet tellus proin. Non in orci rhoncus, proin nisi,
                hendrerit in pretium sit. <br />
                Elementum in euismod leo fermentum tortor, facilisi id leo.
                Vulputate donec rhoncus aliquam lobortis enim ultricies sapien
                dis tortor. Condimentum.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Inclusion;
