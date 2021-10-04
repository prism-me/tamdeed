import React, { Component } from "react";
import FAQ from "../sections/Enroll/FAQ";
import AdmissionProcedure from "../sections/Enroll/AdmissionProcedure";
import AgeRequirements from "../sections/Enroll/AgeRequirements";
import Enquiry from "../sections/Enroll/Enquiry";
import FeesPayments from "../sections/Enroll/FeesPayments";
import ApplyOnline from "../sections/Enroll/ApplyOnline";
import Covid from "../sections/Enroll/Covid";
import AdmissionContact from "../sections/Enroll/AdmissionContact";
import Payment from "../sections/Enroll/Payment";
import EnrollTabs from "../sections/Enroll/EnrollTabs";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

const faqList = [
    {
        question: 'Where is the American Gulf School?',
        answer: `AGS, an American curriculum school, is located in Al Rahmaniya 4 in Sharjah. View the location map for more details.`,
    },
    {
        question: 'Which grades of the school are open?',
        answer: `American Gulf School “AGS” is licensed from Pre-K3 through Grade 12 while for this academic year (2021-2022) AGS is open from PreK through to Grade 8. Further grades will be added in the following years.`,
    },
    {
        question: 'What facilities does the campus have?',
        answer: `With our world-class campus, our facilities include but are not limited to a multipurpose sports complex, three STEAM/Robotics labs, two canteens, two libraries with digital and print books, one resources center for KG, two special resources rooms, one indoor soft play area in the KG, Sciences labs, visual and performing (Drama/Music) arts rooms. A media studio, design cafe, state of the art playgrounds.`,
    },
    {
        question: 'Who is the Principal of the school?',
        answer: `Larry Savery is the principal of the school. Larry has more than 25 years of educational experience in the US, Central America, and the Middle East. Fifteen of those years have been in leading school reform and administration including 4 years in the United Arab Emirates. Larry completed his Bachelor’s Degree in Communication with minors in English, Drama & Spanish from Loyola University. While teaching and coaching and leading various departments, he completed his Master’s Degree in Educational Leadership from the University of New Orleans.`,
    },
    {
        question: 'What makes American Gulf School unique?',
        answer: `At American Gulf School, we look at building learners' and teachers’ relationships as being our primary goal to establish a successful journey in education. We have catered a curriculum to serve our learner population to be prepared and equipped with skills to help them succeed in a forever-changing world that makes AGS one of  the best International Schools in Sharjah.`,
    },
    {
        question: 'How will you ensure my child does well at American Gulf School?',
        answer: `We have a great support team that comes in and plans with the teachers based on their diagnostic tests which include MAP, CAT4, or any internal assessments we give.`,
    },
    {
        question: 'When are admissions open & What are the school hours?',
        answer: `Check with SPEA. School is open from 7:15 AM till 3:45 PM. School Day for all learners (Pre-K to Grade 8) is from 7:45 AM till 2:30 PM.`,
    },
    {
        question: 'Where can I find more about the teachers?',
        answer: `We have recruited outstanding, qualified, and experienced teachers who deliver a world-class education at American Gulf School, Sharjah. Please click here for more information about our staff.`,
    },
    {
        question: 'Does the school offer extra-curricular activities?',
        answer: `Yes, we offer various extra-curricular activities;  such as basketball, soccer, music, robotics, chess club, etc... `,
    },
    {
        question: 'What curriculum do you follow?',
        answer: `We implement the IB framework using the American Core Curriculum for our content and standards.`,
    },
    {
        question: 'Do you provide digital devices to students?',
        answer: `No, the school does not provide the students with digital devices. The school has its own “Bring Your Own Device” Policy with the minimum specification set to maintain students' learning experiences at AGS. Click HERE to learn about the specs. `,
    },
]

class Enroll extends Component {
    state = {
        currentPage: null,
        content: null,
        faqData: []
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
                        (x) => x.slug === "Enroll-page"
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
        const {
            content
        } = this.state;
        const { global } = this.props;
        return (
            <div className="home-page">
                <EnrollTabs
                    introSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.intro
                            : content?.intro
                    }
                />
                <AdmissionProcedure
                    stepOne={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step1
                            : content?.step1
                    }
                    stepTwo={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step2
                            : content?.step2
                    }
                    stepThree={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step3
                            : content?.step3
                    }
                    stepFour={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step4
                            : content?.step4
                    }
                    stepFive={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step5
                            : content?.step5
                    }
                    docData={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.documents
                            : content?.documents
                    }
                />
                <AgeRequirements
                    ageRequirementSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.ageRequirement
                            : content?.ageRequirement
                    }
                    ReqSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.ageRequirementModal
                            : content?.ageRequirementModal
                    }
                />
                <Enquiry />
                <FeesPayments />
                <Payment
                    genrData={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.generalPolicies
                            : content?.generalPolicies
                    }
                />
                <ApplyOnline
                    applyOnlineSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.applyOnline
                            : content?.applyOnline
                    }
                    language={global?.activeLanguage}
                />
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
                // faqList={faqList}
                />
                <AdmissionContact />
                <Covid
                    covidSec={
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
)(Enroll);