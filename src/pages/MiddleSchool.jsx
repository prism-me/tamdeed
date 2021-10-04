import React, { Component, lazy } from "react";
import MiddleSchoolSection from "../sections/MiddleSchool";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

class MiddleSchool extends Component {
    state = {
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
                        (x) => x.slug === "middle-page"
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
    }
    render() {
        const {
            content
        } = this.state;
        const { global } = this.props;
        return (
            <div className="home-page">
                <MiddleSchoolSection
                    secOne={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section1
                            : content?.section1
                    }
                    secTwo={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section2
                            : content?.section2
                    }
                    secThree={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section3
                            : content?.section3
                    }
                    secFour={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section4
                            : content?.section4
                    }
                    secFive={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section5
                            : content?.section5
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
)(MiddleSchool);