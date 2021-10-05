import React, { Component } from "react";
import HomeHeader from "../sections/Home/HomeHeader";
import Curriculum from "../sections/Home/Curriculum";
import Mentors from "../sections/Home/Mentors";
import CovidSafety from "../sections/Home/CovidSafety";
import AgsSlider from "../sections/Home/AgsSlider";
import { API } from "../http/API";
import { connect } from "react-redux";
import InfoTabs from "../sections/Home/InfoTabs";
import OurPrograms from "../sections/Home/OurPrograms";
// import { Helmet } from "react-helmet";

class Home extends Component {
  state = {
    mentorsData: [],
    expData: [],
    lifeagsData: [],
    currentPage: null,
    content: null,
  }

  componentDidMount() {
    let currentPage = null;

    API.get(`/sections`)
      .then((response) => {
        // debugger;
        if (
          response.status === 200 ||
          response.status === 201
        ) {
          currentPage = response.data.data.filter(
            (x) => x.slug === "home-page"
          );

          let lastElement = currentPage[currentPage.length - 1];
          this.setState({ lastElement });
          API.get(`/all_sections/${lastElement.page_id}`)
            .then(
              (response) => {
                if (response.data.data) {
                  // debugger;
                  this.setState({
                    content:
                      response.data.data[
                        response.data.data?.length - 1
                      ]?.content,
                  });
                }
              }
            )
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));


    API.get('/mentors').then(response => {
      this.setState({ mentorsData: response.data.data });
    })
      .catch(err => {
        console.log(err)
      })

    API.get('/exp_and_life').then(response => {
      this.setState({ lifeagsData: response.data.data.filter(x => x.type === "life-at-ags") });
    })
      .catch(err => {
        console.log(err)
      })

    API.get('/exp_and_life').then(response => {
      this.setState({ expData: response.data.data.filter(x => x.type === "experience-with-ags") });
    })
      .catch(err => {
        console.log(err)
      })

  }
  render() {
    const {
      content
    } = this.state;
    const { global } = this.props;
    return (
      <div className="home-page">
        {/* <Helmet>
          <title>
            {this.state.currentPage?.meta_details?.title ||
              constants.site_name}
          </title>
          <meta
            name="description"
            content={
              this.state.currentPage?.meta_details
                ?.description || constants.seo_description
            }
          />
        </Helmet> */}
        <HomeHeader
          banner={
            global?.activeLanguage === "ar"
              ? content?.arabic?.banner
              : content?.banner
          }
          bannerImg={content?.banner?.image}
        />
        <InfoTabs
          expData={this.state.expData}
          isArabic={global?.activeLanguage === "ar"}
          language={global?.activeLanguage}
        />
        <Curriculum
          Curriculum={
            global?.activeLanguage === "ar"
              ? content?.arabic?.curriculmSection
              : content?.curriculmSection
          }
          language={global?.activeLanguage}
        />
        <Mentors
          mentors={this.state.mentorsData}
          isArabic={global?.activeLanguage === "ar"}
          language={global?.activeLanguage}
        />
        <OurPrograms
          language={global?.activeLanguage}
        />
        <AgsSlider
          lifeagsData={this.state.lifeagsData}
          isArabic={global?.activeLanguage === "ar"}
          language={global?.activeLanguage}
        />
        <CovidSafety
          Covid={
            global?.activeLanguage === "ar"
              ? content?.arabic?.covidSection
              : content?.covidSection
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSpinner: state?.globalReducer?.showSpinner,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);