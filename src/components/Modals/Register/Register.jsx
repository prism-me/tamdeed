import React, { useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import ButtonTheme from "./../../ButtonTheme";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import ClipLoader from "react-spinners/BounceLoader";
import { API } from "../../../http/API";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory();

  const [showSpinner, setShowSpinner] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setShowSpinner(true);
    let formdata = new FormData();
    formdata.append("name", `${firstName} ${lastName}`);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("password_confirmation", password);

    API.post(`/auth/register`, formdata, {
      "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`,
    })
      .then((response) => {
        setShowSpinner(false);
        props.registerSuccess(response.data);
        props.onHide();
        alert("Your account has been created successfully.");
      })
      .catch((error) => {
        setShowSpinner(false);
        // console.log(error);
        // setShow(true);
        alert("There was some error Please try again.");
      });
  };
  //Google Login
  const responseGoogle = (response) => {
    setShowSpinner(true);
    let formdata = new FormData();
    formdata.append("name", response.profileObj.name);
    formdata.append("email", response.profileObj.email);
    formdata.append("password", response.profileObj.googleId);
    formdata.append("password_confirmation", response.profileObj.googleId);
    formdata.append("is_social", true);

    API.post(`/auth/register`, formdata, {
      "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`,
    })
      .then((response) => {
        setShowSpinner(false);
        props.registerSuccess(response.data);
        props.onHide();
        alert("Your account has been created successfully.");
        history.push("/profile");
      })
      .catch((error) => {
        setShowSpinner(false);
        console.log(error);
        // setShow(true);
        // alert("There was some error Please try again.");
      });
  };
  //Facebook Login
  const responseFacebook = (response) => {
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="register-wrapper">
        <Container>
          {/* <div className="close-icon-wrapper"> */}
          <MdClose className="close-icon" onClick={props.onHide} />
          {/* </div> */}
          <div className="register-heading">
            <span>Register</span>
          </div>
          <div className="register-sub-heading">
            <p>Register with your social media accounts</p>
          </div>
          <Row>
            <Col sm={12} md={6} className="google-register-col">
              {/* <ButtonTheme className="google-register-button">
                <FcGoogle fontSize="20px" />
                <span>Register with Google</span>
              </ButtonTheme> */}
              {/* <GoogleLogin
                clientId="443788196047-43sg5nlk5qh2a2p3615ifqlhe68apjvk.apps.googleusercontent.com"
                render={(renderProps) => (
                  <ButtonTheme
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="google-register-button"
                  >
                    <FcGoogle fontSize="20px" />
                    <span>Register with Google</span>
                  </ButtonTheme>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              /> */}
            </Col>
            <Col sm={12} md={6} className="facebook-register-col">
              {/* <FacebookLogin
                appId="1088597931155576"
                autoLoad={false}
                callback={() => responseFacebook}
                render={(renderProps) => (
                  <ButtonTheme
                    onClick={renderProps.onClick}
                    className="facebook-register-button"
                  >
                    <TiSocialFacebook fontSize="20px" />
                    <span>Register with Facebook</span>
                  </ButtonTheme>
                )}
              /> */}
            </Col>
          </Row>
        </Container>
        <div className="register-divivder-wrap">
          <hr />
        </div>
        <Container>
          <div className="form-wrapper">
            <Form>
              <Row>
                <Col sm={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="login-button-col">
                  <ButtonTheme
                    variant="primary"
                    style={{
                      borderRadius: "4px",
                      width: "180px",
                      fontSize: "15px",
                    }}
                    onClick={handleSubmit}
                  >
                    Register now
                  </ButtonTheme>
                </Col>
                <Col sm={12}>
                  <p className="text-center small">
                    Already have an account ? &nbsp;
                    <span
                      style={{
                        color: "#e65550",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => props.shiftToLogin()}
                    >
                      Login
                    </span>
                  </p>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
      <div
        className={`${
          showSpinner ? "d-flex" : "d-none"
        } flex-column text-center align-items-center justify-content-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(255,255,255,0.6)",
        }}
      >
        <ClipLoader color={"#e65550"} loading={true} size={80} />
      </div>
    </Modal>
  );
};
export default Register;