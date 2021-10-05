import React from "react";
import Contact from "../sections/ContactUs/index.js";
import { connect } from "react-redux";

const ContactUs = (props) => {

    const { global } = props;
    return (
        <div className="home-page">
            <Contact
                language={global?.activeLanguage}
            />
        </div>
    )
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
)(ContactUs);