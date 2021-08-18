import React, { Component, lazy } from "react";

import FAQ from "../sections/Enroll/FAQ";
import AdmissionProcedure from "../sections/Enroll/AdmissionProcedure";
import AgeRequirements from "../sections/Enroll/AgeRequirements";
import Enquiry from "../sections/Enroll/Enquiry";
import FeesPayments from "../sections/Enroll/FeesPayments";

const faqList = [
    {
        question: 'Where is the American Gulf School?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'What grades of the school are open?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'What facilities does the campus have?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'Who is the Principal of the school?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'What makes American Gulf School unique?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'How will you ensure my child does well at American Gulf School?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'When are admissions open & What are the school hours?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'Where can I find more about the teachers?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'Does the school offer extra-curricular activities?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'What curriculum do you follow?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
        question: 'Do you provide digital devices to students?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
]
export default class Enroll extends Component {

    render() {
        return (
            <div className="home-page">
                <AdmissionProcedure/>
                <AgeRequirements/>
                <Enquiry/>
                <FeesPayments/>
                <FAQ
                    faqList={faqList}
                />
            </div>
        );
    }
}
