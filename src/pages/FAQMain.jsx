import React, { Component, lazy } from "react";

import FAQ from "../sections/FAQMain/FAQMain";

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
export default class FAQMain extends Component {

    render() {
        return (
            <div className="home-page">
                <FAQ
                    faqList={faqList}
                />
            </div>
        );
    }
}
