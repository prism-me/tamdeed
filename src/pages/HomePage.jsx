import React, { Component } from "react";
import Banner from "../sections/home/banner/Banner";
import Partners from "../sections//home/partners/Partners";
import AboutTamdeed from "../sections/home/about-tamdeed/AboutTamdeed";
import Industries from "../sections/home/industries/Industries"
import Portfolio from "../sections/home/solution-portfolio/Portfolio";
import MediaCenter from "../sections/home/media-center/MediaCenter";
import { API } from "../../src/http/API";


class HomePage extends Component {
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
                    let currentPage = response.data.data.find((x) => x.slug === "home-page");

                    API.get(`/all_sections/${currentPage._id}`)
                        .then((res) => {
                            let content = res.data.data[0].content;
                            this.setState({ content });
                        })
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    }
    
    render() {
        return (
            <div className="home-page">
                <Banner banner={this.state.content?.banner ? this.state.content.banner : ""} />
                <Partners />
                <AboutTamdeed />
                <Industries />
                <Portfolio portfolio={this.state.content?.portfolio ? this.state.content.portfolio : ""} />
                <MediaCenter />
            </div>
        );
    }
}

export default HomePage;