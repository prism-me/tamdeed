import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tn1 from "../../../assets/images/solutionservice/tn1.png";

export default function TelecomNetworking(props) {
  const { telecomNetworking } = props;

  return (
    telecomNetworking && (
      <div className={"telecom-networking"}>
        <Container>
          <h3 className={"subtitle"}>{telecomNetworking?.title}</h3>
          <p className={"Title"}>{telecomNetworking?.sub_title}</p>
          <Row>
            <Col sm={5}>
              <img
                src={telecomNetworking?.avatar}
                alt=""
                className={"iconImg img-fluid"}
              />
            </Col>
            <Col sm={7}>
              <p className="cardsubtitle">{telecomNetworking?.description}</p>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: telecomNetworking?.bullets }}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
}
