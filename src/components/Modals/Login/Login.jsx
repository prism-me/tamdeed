import React, { useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
// import { connect } from "react-redux";
import { MdClose } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import ClipLoader from "react-spinners/BounceLoader";
// import Toast from "react-bootstrap/Toast";
import ButtonTheme from "./../../ButtonTheme";
import { API } from "../../../http/API";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useHistory } from "react-router-dom";

const googleClientId =
  "443788196047-43sg5nlk5qh2a2p3615ifqlhe68apjvk.apps.googleusercontent.com";

const Login = (props) => {
  const history = useHistory();
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setShowSpinner(true);
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    API.post(`/auth/login`, formdata, {
      "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`,
    })
      .then((response) => {
        setShowSpinner(false);
        props.onHide();
        props.loginSuccess(response.data);
      })
      .catch((error) => {
        setShowSpinner(false);
        // console.log(error);
        // setShow(true);
        alert("Invalid email/password combination. Please try again.");
      });
  };
  //----------------

  //Google Login
  const responseGoogle = (response) => {
    setShowSpinner(true);
    let bearerToken = null;
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
        bearerToken = response.data?.access_token;
        API.get(`/auth/wishlist`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }).then((response) => {
          props.wishlistSuccess(response.data);
        });
        props.onHide();
        // alert("You are logged in.");
        history.push("/profile");
      })
      .catch((error) => {
        setShowSpinner(false);
        console.log(error);
        // setShow(true);
        // alert("There was some error. Please try again.");
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
      style={{ height: "90vh" }}
    >
      <div className="login-wrapper">
        <Container>
          {/* <div className="close-icon-wrapper"> */}
          <MdClose className="close-icon" onClick={props.onHide} />
          {/* </div> */}
          <div className="login-heading">
            <span>Log In</span>
          </div>
          <div className="login-sub-heading">
            <p>Login with your social media accounts</p>
          </div>
          <Row>
            <Col sm={12} md={6} className="google-login-col">
              {/* <GoogleLogin
                clientId={googleClientId}
                render={(renderProps) => (
                  <ButtonTheme
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="google-login-button"
                  >
                    <FcGoogle fontSize="20px" />
                    <span>Continue with Google</span>
                  </ButtonTheme>
                )}
                onSuccess={responseGoogle}
                onFailure={() =>
                  alert("Something went wrong. Please try again.")
                }
                cookiePolicy={"single_host_origin"}
              /> */}
            </Col>
            <Col sm={12} md={6} className="facebook-login-col">
              {/* <FacebookLogin
                appId="1088597931155576"
                autoLoad={false}
                callback={() => responseFacebook}
                render={(renderProps) => (
                  <ButtonTheme
                    onClick={renderProps.onClick}
                    className="facebook-login-button"
                  >
                    <TiSocialFacebook fontSize="20px" />
                    <span>Continue with Facebook</span>
                  </ButtonTheme>
                )}
              /> */}
            </Col>
          </Row>
        </Container>
        <div className="login-divider-wrap">
          <hr />
        </div>
        <Container>
          <div className="form-wrapper">
            <Form autoComplete="new-password">
              <Row>
                <Col sm={12}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="new-password"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="new-password"
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
                    Login
                  </ButtonTheme>
                </Col>
                <Col sm={12}>
                  <p className="text-center small">
                    Don't have an account ? &nbsp;
                    <span
                      style={{
                        color: "#e65550",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => props.shiftToRegister()}
                    >
                      Register
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

export default Login;