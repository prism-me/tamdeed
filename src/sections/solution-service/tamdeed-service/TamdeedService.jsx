import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function TamdeedService(props) {
  const { services } = props;
  const firstSix = services?.filter((element, index) => {
    return index < 6;
  });

  const EngineeringConsultancyServices = {
    icon: services[6]?.avatar,
    title: services[6]?.title,
  };

  //   console.log("services ::", services);

  return (
    services && (
      <div className={"tamdeed-service"}>
        <Container>
          <p className={"Title"}>Solutions to Power Possibility</p>
          <h3 className={"subtitle"}>Tamdeed Services</h3>
          <Row className="justify-content-center">
            {firstSix?.map((slides, index) => (
              <Col sm={4} key={index} className={"mb-3"}>
                <div className="card cardstyle">
                  <Card.Img
                    varient={"top"}
                    className={"iconImg"}
                    src={slides.avatar}
                  ></Card.Img>
                  <div className="card-body">
                    <h3 className="cardsubtitle">{slides.title}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            <Col sm={9} className={"mb-3"}>
              <div className="card cardstyle">
                <Card.Img
                  varient={"top"}
                  className={"iconImg desktopImg"}
                  src={EngineeringConsultancyServices.icon}
                ></Card.Img>
                <Card.Img
                  varient={"top"}
                  className={"iconImg mobileImg"}
                  src={services[7]?.avatar}
                ></Card.Img>
                <div className="card-body">
                  <h3 className="cardsubtitle">
                    {EngineeringConsultancyServices.title}
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
}
