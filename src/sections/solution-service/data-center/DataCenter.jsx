import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import dc1 from "../../../assets/images/solutionservice/dc1.png";
// import security from "../../../assets/images/solutionservice/security.png";
// import elv from "../../../assets/images/solutionservice/elv.png";
// import ti from "../../../assets/images/solutionservice/ti.png";
// import ind from "../../../assets/images/solutionservice/ind.png";

export default function DataCenter(props) {
  const { dataCenter, dataCenterSingle } = props;

  //   console.log("dataCenter ::", dataCenter);
  //   console.log("dataCenterSingle ::", dataCenterSingle);

  return (
    dataCenter && (
      <div className={"data-center"}>
        <div className="mngBgDiv">
          <Container>
            <h3 className={"datasubtitle"}>{dataCenterSingle?.title}</h3>
            <p className={"dataTitle"}>{dataCenterSingle?.sub_title}</p>
            <Row>
              <Col sm={7}>
                <p className="subtitle">{dataCenterSingle?.description}</p>
                <div
                  className="content-li"
                  dangerouslySetInnerHTML={{
                    __html: dataCenterSingle?.bullets,
                  }}
                ></div>
              </Col>
              <Col sm={5}>
                <img
                  src={dataCenterSingle?.avatar}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mngBgDiv2">
          <Container>
            <Row>
              {dataCenter?.map(
                (slides, index) =>
                  index > 2 && (
                    <Col sm={6} key={index} className={"mb-4"}>
                      <h3 className={"datasubtitle"}>{slides.title}</h3>
                      <p className={"dataTitle fixedHeight"}>
                        {slides.sub_title}
                      </p>
                      <Row>
                        <Col
                          sm={12}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <img
                            src={slides.avatar}
                            alt=""
                            className="img-fluid mgImg"
                          />
                        </Col>
                        <Col
                          sm={12}
                          className="d-flex flex-column justify-content-center align-items-start"
                        >
                          <div
                            className="content-li"
                            dangerouslySetInnerHTML={{
                              __html: slides?.bullets,
                            }}
                          ></div>
                        </Col>
                      </Row>
                    </Col>
                  )
              )}
            </Row>
          </Container>
        </div>
      </div>
    )
  );
}
