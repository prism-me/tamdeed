import React, { Component } from "react";
import Jointeam from "../sections/Careers/Jointeam/Jointeam";
import Positions from "../sections/Careers/Positions/Positions";
import Ourteam from "../sections/Careers/Ourteam";
import ContentSection from "../sections/Careers/ContentSection/ContentSection";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class Careers extends Component {

  render() {
    const { global } = this.props;
    return (
      <div className="home-page">
        <Helmet>
          <title>
            {`AGS | ${constants?.site_content?.meta_career[global?.activeLanguage]}`}
          </title>
          <meta
            name="description"
            content={
              constants?.site_content?.meta_career_description[global?.activeLanguage]
            }
          />
        </Helmet>
        <Jointeam />
        <Positions />
        <ContentSection />
        <Ourteam />
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
)(Careers);