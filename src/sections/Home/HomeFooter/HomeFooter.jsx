import { FormGroup } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { API } from "../../../http/API";
import logo from "./../../../assets/images/eahm-logo-white.png";
import codesList from "./../../../utils/countries.json";

function HomeFooter() {
  const [countryCodes] = React.useState(
    codesList.sort(function (a, b) {
      return a.Dial?.localeCompare(b.Dial, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    })
  );

  const [countryCities, setCountryCities] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [agreementChecked, setAgreementChecked] = React.useState(false);
  const [undergraduateData, setUndergraduateData] = useState({
    first_name: "",
    last_name: "",
    program_of_interest: "",
    email: "",
    country_code: "",
    phone_number: "",
    country: "",
    start_date: "",
  });

  useEffect(() => {
    axios
      .get(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => {
        if (response.status === 200) {
          let countryCities = response.data?.data;
          setCountryCities(countryCities);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setUndergraduateData({ ...undergraduateData, country: e.target.value });
  };

  const handleInputChange = ({ currentTarget: input }) => {
    let updatedData = { ...undergraduateData };
    updatedData[input.name] = input.value;
    setUndergraduateData(updatedData);
  };

  const handleSubmit = () => {
    let dataToSubmit = { ...undergraduateData };

    // retaining only integer part of code string, and converting to integer
    // null check so that there is no isNan error
    if (dataToSubmit.country_code !== "") {
      dataToSubmit.country_code = parseInt(
        dataToSubmit.country_code?.split("+")?.[1]
      );
    }

    let errorProperty = Object.entries(dataToSubmit).find(
      ([key, value]) => value === "" || value === null
    );

    if (errorProperty) {
      alert(`Please fill/select ${errorProperty?.[0].replace("_", " ")}`);
      return;
    }
    API.post("/undergraduate", dataToSubmit)
      .then((response) => {
        alert("Your request has been submitted, you will be contacted soon.");
        window.location = "https://eahmdubai.com/thankyou.html";
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="home-footer">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="description-column">
              <img src={logo} alt="EAHM Logo" className="header-logo" />
              <h5 className="intro-title">About EAHM</h5>
              <p>
                The Emirates Academy of Hospitality Management (EAHM), ranked as
                one of the best hospitality schools in the world, specializes in
                business management degrees with a hospitality focus. We truly
                are, at The Heart of Hospitality, with globally recognized study
                programs, industry-leading faculty members from all over the
                world, state-of-the-art infrastructure, new facilities, profound
                collaborations with industry leaders, and close proximity to
                some of the best hotels in the world.
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <Form className="query-form-column">
              <Row>
                <Col sm={6}>
                  <Form.Group controlId="first_name">
                    <Form.Control
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={undergraduateData.first_name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="last_name">
                    <Form.Control
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={undergraduateData.last_name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={undergraduateData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="country">
                    <Form.Control
                      as="select"
                      name="country"
                      placeholder="Country"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option value="">Country</option>
                      {countryCities?.map((x) => (
                        <option value={x.country}>{x.country}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <FormGroup controlId="country_code">
                    <Form.Control
                      as="select"
                      name="country_code"
                      placeholder="Code"
                      value={undergraduateData.country_code}
                      onChange={handleInputChange}
                    >
                      <option>Code</option>
                      {countryCodes?.map((x) => (
                        <option> {`${x.Unicode} +${x.Dial}`}</option>
                      ))}
                    </Form.Control>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="phone_number">
                    <Form.Control
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={undergraduateData.phone_number}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="program_of_interest">
                    <Form.Control
                      name="program_of_interest"
                      placeholder="Programme of Interest"
                      value={undergraduateData.program_of_interest}
                      onChange={handleInputChange}
                      as="select"
                    >
                      <option value="">Programme of Interest</option>
                      <option value="Bachelor of Business Administration">
                        Bachelor of Business Administration
                      </option>
                      <option value="Associate of Business Administration">
                        Associate of Business Administration
                      </option>
                      <option value="Master of Business Administration">
                        Master of Business Administration
                      </option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="start_date">
                    <Form.Control
                      name="start_date"
                      placeholder="Start Date"
                      value={undergraduateData.start_date}
                      onChange={handleInputChange}
                      as="select"
                    >
                      <option value="">Start Date</option>
                      <option value="September 2021">September 2021</option>
                      <option value="January 2022">January 2022</option>
                      <option value="January 2022">April 2022</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <p className="confirm-checkbox">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox-footer"
                  label="I agree receiving marketing information from The Emirates Academy of Hospitality Management"
                  value={agreementChecked}
                  onChange={() => setAgreementChecked(!agreementChecked)}
                />
              </p>
              <Button className="btn-submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeFooter;
