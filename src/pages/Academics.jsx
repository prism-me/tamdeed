import React, { Component } from "react";
import AcademicHeader from "../sections/Academics/Headers/header";
import Accreditation from "../sections/Academics/Accreditation/Accreditation";
import AcademicsCurriculum from "../sections/Academics/Curiculum/AcademicsCurriculum";
import ACTabs from "../sections/Academics/ACTabs";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

class Academics extends Component {
    state = {
        mentorsData: [],
        eventData: [],
        currentPage: null,
        expData: [],
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
                        (x) => x.slug === "academics-page"
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

        API.get('/exp_and_life').then(response => {
            this.setState({ expData: response.data.data.filter(x => x.type === "experience-with-ags") });
        })
            .catch(err => {
                console.log(err)
            })

        API.get('/events').then(response => {
            this.setState({ eventData: response.data.data });
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
                <AcademicHeader
                    banner={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.banner
                            : content?.banner
                    }
                    bannerImg={content?.banner.image}
                />
                <Accreditation
                    calendSection={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.calendarSection
                            : content?.calendarSection
                    }
                    accrSection={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.accreditationsSection
                            : content?.accreditationsSection
                    }
                    eventData={this.state.eventData}
                    isArabic={global?.activeLanguage === "ar"}
                    language={global?.activeLanguage}
                />
                <ACTabs
                    expData={this.state.expData}
                    isArabic={global?.activeLanguage === "ar"}
                    language={global?.activeLanguage}
                />
                <AcademicsCurriculum
                    curriSection={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.curriculumSection
                            : content?.curriculumSection
                    }
                    kinderSection={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.kindergartenSection
                            : content?.kindergartenSection
                    }
                    kinderImg={content?.kindergartenSection.image}
                    primSection={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.primarySection
                            : content?.primarySection
                    }
                    primImg={content?.primarySection.image}
                    midSection={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.middleSection
                            : content?.middleSection
                    }
                    midImg={content?.middleSection.image}
                    quote={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.quoteSection
                            : content?.quoteSection
                    }
                    language={global?.activeLanguage}
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
)(Academics);