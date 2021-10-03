import React, { Component } from "react";
import AgsPortalComponent from "../sections/AGSPortal/index";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

class AgsPortal extends Component {
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
                        (x) => x.slug === "ags-portal"
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
                <AgsPortalComponent
                    portalCont={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.portalContent
                            : content?.portalContent
                    }
                    parentSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.parentSection
                            : content?.parentSection
                    }
                    staffSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.staffSection
                            : content?.staffSection
                    }
                    studentSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.studentSection
                            : content?.studentSection
                    }
                    contactSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.contactSection
                            : content?.contactSection
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
)(AgsPortal);