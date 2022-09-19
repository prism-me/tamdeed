import React, { Component } from "react";
import Banner from "../sections/media/media-banner/MediaBanner";
import {
  Col,
  Container,
  Row,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
// import Pagination from '@material-ui/lab/Pagination';
import { API } from "../../src/http/API";
import elipse from "../assets/images/mediaImages/Ellipse 109.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

class MediaInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
      varient: "",
      alertText: "",
      comment: {
        name: "",
        email: "",
        comment: "",
        post_id: 0,
        comment_id: "",
      },
    };
  }
  componentDidMount() {
    this.getAllPartners();
  }

  getAllPartners = () => {
    this.getNews();

    API.get(`/media-type/Latest Updates`, {}).then((response) => {
      let data = { ...response?.data?.message };
      this.setState({ latetUpdates: data });
    });
  };

  getNews = () => {
    const slug = this.props.match.params.slug;
    API.get(`/news`)
      .then((response) => {
        // debugger;
        if (response.status === 200 || response.status === 201) {
          let currentPage = response.data.data.find((x) => x.slug == slug);
          this.setState({ currentPage });
        }
      })
      .catch((err) => console.log(err));
  };

  handleValueChange = (e) => {
    let updatedData = { ...this.state.comment };
    updatedData[e.target.name] = e.target.value;
    this.setState({ comment: updatedData });
  };

  handleSubmit = () => {
    let updatedData = { ...this.state.comment };

    if (!updatedData.comment) {
      this.setState({
        setShow: true,
        variant: "danger",
        alertText: "Comment is required",
      });
      return false;
    }
    if (!updatedData.name) {
      this.setState({
        setShow: true,
        variant: "danger",
        alertText: "name is required",
      });
      return false;
    }
    if (
      !updatedData.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        setShow: true,
        variant: "danger",
        alertText: "A valid Email is required",
      });
      return false;
    }
    // if(!updatedData.email){
    //     this.setState({setShow:true,variant:"danger",alertText:"email is required"})
    //     return false;
    // }

    updatedData.post_id = this.state.currentPage._id;

    API.post(`/comments`, updatedData).then((response) => {
      this.setState({
        variant: "success",
        alertText: "Comment added successfully",
        setShow: true,
      });
      // let comments = this.state?.currentPage?.comments
      // comments.push(this.state.comment)
      // this.setState({...this.state.currentPage,comments})
      this.getNews();
    });
  };

  render() {
    return (
      <div>
        <Banner />
        <div className={"latestUpdates"}>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Card className={"border-0"}>
                  <Card.Img
                    variant="top"
                    src={this.state.currentPage?.banner_img}
                  />
                  <Card.Body className={"innerpage"}>
                    <p className="latestUpdateTitle innerpageTitle">
                      {this.state.currentPage?.name}
                    </p>
                    <p className="subtitle innerpagedescription">
                      {this.state.currentPage?.long_description}
                    </p>
                    {/* <div className="d-flex justify-content-start align-items-center">
                                            <button className="btnStyle">Read More aaaaa<ChevronRightIcon /></button>
                                        </div> */}
                  </Card.Body>
                </Card>
                <div className="readArticle">
                  <div className="readArticleLink">
                    {/* {console.log(this.state.currentPage,"this.state.currentPage")} */}

                    {this.state.currentPage?.link && (
                      <a target="_blank" href={this.state.currentPage?.link}>
                        Read the article in published platform{" "}
                      </a>
                    )}
                  </div>

                  {/* <div className="readArticleLinkIcons">
                                    <div className="shareArticle">Share this article</div>
                                    <div className="iconsMediaInnerContainer">
                                            <span className="socialIcons iconsMediaInner">
                                                <a href="#">
                                                <Facebook className={"iconSize"} />
                                                </a>
                                            </span>
                                            <span className="socialIcons iconsMediaInner">
                                                <a href="#">
                                                <TwitterIcon className={"iconSize"} />
                                                </a>
                                            </span>
                                            <span className="socialIcons iconsMediaInner">
                                                <a href="#">
                                                <InstagramIcon className={"iconSize"} />
                                                </a>
                                            </span>
                                    </div>
                                </div> */}
                </div>
                {this.state?.currentPage?.comments.length > 0 && (
                  <div className="commentSection">
                    {this.state?.currentPage &&
                      this.state?.currentPage?.comments?.map((data, index) => {
                        return (
                          <Row key={index} className={"mb-3 mt-3 pt-3"}>
                            <Col
                              sm={"auto"}
                              className="d-flex justify-content-center align-items-center"
                            >
                              <img
                                src={elipse}
                                alt="solution"
                                className={"iconImg img-fluid"}
                              />
                            </Col>
                            <Col sm>
                              <p className="latestUpdateTitle innerpageTitle">
                                {data.name}
                              </p>
                              <p className="latestUpdateTitle innerpagedescription">
                                {new Date(data.created_at).toLocaleDateString()}
                              </p>
                              <p className="subtitle innerpagedescription">
                                {data.comment}
                              </p>
                            </Col>
                          </Row>
                        );
                      })}
                  </div>
                )}
                <div className="">
                  <Row key={"1"} className={"mb-3 mt-3 pt-3"}>
                    <Col sm>
                      <Form>
                        <Form.Group className="mb-3" controlId="formComment">
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "150px" }}
                            value={this.state.comment.comment}
                            name="comment"
                            onChange={(e) => this.handleValueChange(e)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formName">
                          <Form.Control
                            type="text"
                            value={this.state.comment.name}
                            name="name"
                            onChange={(e) => this.handleValueChange(e)}
                            placeholder="Enter your Name"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            name="email"
                            value={this.state.comment.email}
                            onChange={(e) => this.handleValueChange(e)}
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                        {this.state.setShow ? (
                          <Alert
                            variant={this.state.variant}
                            show={this.state.setShow}
                            onClose={() => {
                              this.setState({ setShow: false });
                            }}
                            dismissible
                          >
                            {this.state.alertText}
                          </Alert>
                        ) : (
                          <Button
                            className="submitButton formSubmitComment"
                            type="button"
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </Button>
                        )}
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                lg={1}
                md={0}
                sm={0}
                className="rightCard rightCardInner emptyDIv"
              ></Col>

              <Col lg={5} md={12} sm={12} className="rightCard rightCardInner">
                <div>
                  {/* <div className={"title followUs"}>Follow Us</div> */}
                  <h3 className={"title followUs"}>Follow Us</h3>
                  <div className="iconsMediaInnerContainer">
                    <span className="socialIcons iconsMediaInner">
                      <a href="#">
                        <Facebook className={"iconSize"} />
                      </a>
                    </span>
                    <span className="socialIcons iconsMediaInner">
                      <a href="#">
                        <TwitterIcon className={"iconSize"} />
                      </a>
                    </span>
                    <span className="socialIcons iconsMediaInner">
                      <a href="#">
                        <InstagramIcon className={"iconSize"} />
                      </a>
                    </span>
                  </div>
                </div>
                <h3 className={"title latestUpdateCards"}>
                  Our Latest Articles
                </h3>
                {
                  // onClick={() => history.push(`/media-center/${slides.slug}`)}
                  this.state.latetUpdates?.data?.map((slides, index) => (
                    <Row
                      key={index}
                      className={"mb-3 bg-color cardMarginInner"}
                      onClick={() => {
                        window.location.href = `/media-center/${slides.slug}`;
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Col
                        sm={"auto"}
                        className="d-flex justify-content-center align-items-center containerInnerImageLatestupadates"
                      >
                        <img
                          src={slides.img}
                          alt="solution"
                          className={
                            "iconImg img-fluid innerImageLatestupadates"
                          }
                        />
                      </Col>
                      <Col sm>
                        <p className="subtitle subtitleInner">
                          {slides.short_description}
                        </p>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default MediaInner;
