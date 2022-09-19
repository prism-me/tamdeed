import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import ms1 from "../../../assets/images/solutionservice/ms1.png"

export default function ManagedService(props) {
  const { managedService } = props;

  return (
    managedService && (
      <div className={"managed-service"}>
        <Container>
          <h3 className={"subtitle"}>{managedService?.title}</h3>
          <p className={"Title"}>{managedService?.sub_title}</p>
          <Row>
            <Col sm={7}>
              <p className="cardsubtitle">{managedService?.description}</p>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: managedService?.bullets }}
              ></div>
            </Col>
            <Col sm={5}>
              <img
                src={managedService?.avatar}
                alt=""
                className={"iconImg img-fluid"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
}
