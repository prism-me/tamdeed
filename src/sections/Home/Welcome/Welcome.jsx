import React from "react";
import { Container } from "react-bootstrap";

function Welcome() {
  return (
    <div className="welcome">
      <Container>
        <h3 className="title">Undergraduate Programmes</h3>
        <p className="description">
          Our dynamic programmes will not only prepare you
          for the ever-evolving world of hospitality and
          other service industries, but they will also equip
          you with the necessary soft and hard skills that
          will make you a desirable choice for any
          recruiter.
        </p>
      </Container>
    </div>
  );
}

export default Welcome;
