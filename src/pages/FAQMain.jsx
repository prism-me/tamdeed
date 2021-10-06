import React, { Component } from "react";
import FAQ from "../sections/FAQMain/FAQMain";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

class FAQMain extends Component {
    state = {
        currentPage: null,
        faqData: []
    }

    componentDidMount() {
        API.get(`/sections`)
            .then((response) => {
                // debugger;
                if (
                    response.status === 200 ||
                    response.status === 201
                ) {
                    let currentPage = response.data.data.filter(
                        (x) => x.slug === "faq-page"
                    );

                    let lastElement = currentPage[currentPage.length - 1];
                    this.setState({ lastElement });
                    API.get(`/all_sections/${lastElement.page_id}`)
                        .then(
                            (response) => {
                                if (response.data.data) {
                                    // debugger;
                                    let content =
                                        response.data.data?.[response.data.data.length - 1]
                                            ?.content;
                                    this.setState({ faqData: content });
                                }
                            }
                        )
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="home-page">
                <FAQ
                    faqData={
                        this.props.global?.activeLanguage === "ar"
                            ? this.state.faqData?.arabic?.faq
                            : this.state.faqData?.faq
                    }
                    language={this.props.global?.activeLanguage}
                    isArabic={
                        this.props.global?.activeLanguage === "ar"
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
)(FAQMain);

