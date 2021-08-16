import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { API } from "../../../http/API";
import axios from "axios";
import codesList from "../../../utils/countries.json";

const ApplyNow = (props) => {
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
  const [undergraduateData, setUndergraduateData] = React.useState({
    first_name: "",
    last_name: "",
    selected_program: "",
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
    setUndergraduateData({
      ...undergraduateData,
      country: e.target.value,
    });
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
      ([key, value]) => value === ""
    );
    if (errorProperty) {
      alert(`Please fill/select ${errorProperty?.[0].replace("_", " ")}`);
      return;
    }
    API.post(
      `${props.type === "ug" ? "/undergraduate" : "/postgraduate"}`,
      dataToSubmit
    )
      .then((response) => {
        alert("Your form has been submitted successfully.");
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="apply-now"
      style={{ paddingLeft: "0px" }}
    >
      <Modal.Header closeButton className="apply-now-header">
        <Modal.Title id="contained-modal-title-vcenter">Apply Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col>
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
            </Row>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                value={undergraduateData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Row>
              <Col xs={4} sm={3} className="country_code">
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
              </Col>
              <Col xs={8} sm={9}>
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
            </Row>

            <Form.Group controlId="selected_program">
              <Form.Control
                name="selected_program"
                placeholder="Select Programme of Interest"
                value={undergraduateData.selected_program}
                onChange={handleInputChange}
                as="select"
              >
                <option value="">Select Programme of Interest</option>
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

            <p className="confirm-checkbox">
              <Form.Check
                type="checkbox"
                id="default-checkbox"
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
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyNow;
