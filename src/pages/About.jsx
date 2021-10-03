import React, { Component } from "react";
import AboutHeader from "../sections/About/AboutHeader/AboutHeader";
import AGSExperience from "../sections/About/AGSExperience/AGSExperience";
import PrincipleMessage from "../sections/About/PrincipleMessage/PrincipleMessage_2";
import AgsEthos from "../sections/About/AGSEthos/AGSEthos";
import AGSHealth from "../sections/About/AGSHealth/AGSHealth";
import PrincipalSlider from "../sections/About/PrincipalSlider";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

class About extends Component {
    state = {
        mentorsData: [],
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
                        (x) => x.slug === "about-page"
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
    }
    render() {
        const {
            content
        } = this.state;
        const { global } = this.props;
        return (
            <div className="home-page about-section">
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
                <AboutHeader
                    banner={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.banner
                            : content?.banner
                    }
                />
                <AGSExperience
                    aboutAgs={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.aboutSection
                            : content?.banner
                    }
                />
                <PrincipleMessage
                    PrincipleMsg={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.principalSection
                            : content?.principalSection
                    }
                />
                <AgsEthos
                    AGSEthos={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.ethosSection
                            : content?.ethosSection
                    }
                />
                <AGSHealth
                    AgsHealth={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.healthSection
                            : content?.healthSection
                    }
                />
                <PrincipalSlider
                    mentors={this.state.mentorsData}
                    isArabic={global?.activeLanguage === "ar"}
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
)(About);