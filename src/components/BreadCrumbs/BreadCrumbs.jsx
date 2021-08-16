import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";

function BreadCrumbs({ breadCrumbItems }) {
  return (
    <div className="theme-breadcrumbs">
      <Container>
        <Breadcrumb>
          {breadCrumbItems.map((item) => (
            <LinkContainer to={item.link}>
              <Breadcrumb.Item href={item.link} active={item.active}>
                {item.text}
              </Breadcrumb.Item>
            </LinkContainer>
          ))}
        </Breadcrumb>
      </Container>
    </div>
  );
}

export default BreadCrumbs;
