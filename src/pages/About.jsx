import React, { Component } from "react";
import Banner from "../sections/about-us/about-banner/AboutBanner";
import Values from "../sections/about-us/core-values/Values";
import Overview from "../sections/about-us/overview/Overview";
import Management from "../sections/about-us/executive-management/Management";
import BusinessUnits from "../sections/about-us/b-units/Bunits"
import Gtm from "../sections/about-us/salesforce-gtm/Gtm";
import JoinTamdeed from "../sections/about-us/join-tamdeed/JoinTamdeed";
import Partners from "../sections/about-us/partners/Partners";
import { API } from "../../src/http/API";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { 
        this.getAllPartners()
     }

    getAllPartners = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find((x) => x.slug === "about");

                    API.get(`/all_sections/${currentPage._id}`)
                        .then((res) => {
                            //   debugger;
                            // if (
                            //     !res.data.data[res.data.data.length - 1].content &&
                            //     !res.data.data.content
                            // ) {
                            //     res.data.data.content = initialObj.content;
                            // }

                            // if (
                            //     !res.data.data[res.data.data.length - 1].content.meta_details
                            //         .schema_markup
                            // ) {
                            //     res.data.data[
                            //         res.data.data.length - 1
                            //     ].content.meta_details.schema_markup =
                            //         initialObj.content.meta_details.schema_markup;
                            // }
                            let content = res.data.data[res.data.data.length - 1].content;
                            this.setState({ content });
                            // setSectionID(res.data.data[res.data.data.length - 1]._id);
                            // setAboutData({ ...initialObj, content });
                        })
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <Banner banner={this.state.content?.banner ? this.state.content.banner : ""} />
                <Overview overview={this.state.content?.overview ? this.state.content.overview : ""} />
                <Values />
                <Management executiveManagement={this.state.content?.executiveManagement ? this.state.content.executiveManagement : ""}/>
                <BusinessUnits />
                {/* <Gtm /> */}
                <JoinTamdeed />
                <Partners />
            </div>
        );
    }
}

export default About;