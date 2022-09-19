import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Designations from "../../../assets/images/icons/Color/Designations Icon.png";
import icon from "../../../assets/images/icons/Color/Mask Group-4.png";
import { API } from "../../../http/API";

export default function Positions() {
  const [allJobs, setAllJobs] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    API.get(`/jobs`, {}).then((response) => {
      setAllJobs(response.data.data);
      // console.log("jobs :: ", response.data.data)
    });
  };

  const loadMore = () => {
    setVisible(visible + 3);
  };

  return (
    <div className={"positions"} id="open_positions">
      <h3 className={"title"}>Open Positions</h3>
      {allJobs?.length === 0 ? (
        <Container>
          <div className="positionDiv">
            <div className={"d-flex justify-content-center align-items-center"}>
              <span className={"iconBg"}>
                <img src={icon} alt="solution" className={"iconImg"} />
              </span>
            </div>
            <p className={"subtitle"}>Coming Soon</p>
          </div>
        </Container>
      ) : (
        <div className="AboutPartners allJobs">
          <Container>
            <Row>
              {allJobs?.slice(0, visible).map((item, index) => (
                <Col sm="4" key={index}>
                  <div className="positionDiv">
                    <div
                      className={
                        "d-flex justify-content-center align-items-center"
                      }
                    >
                      <span className={"iconBg"}>
                        <img
                          src={Designations}
                          alt="solution"
                          className={"iconImg"}
                        />
                      </span>
                    </div>
                    <p className={"subtitle"}>{item.designation}</p>
                    <p className={"job_description"}>{item.decription}</p>
                    <a href="mailto:info@tamdeed.ae">Apply Now</a>
                  </div>
                </Col>
              ))}
              {visible < allJobs?.length && (
                <button onClick={loadMore} type="button" className="load-more">
                  Load more
                </button>
              )}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
