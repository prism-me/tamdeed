import React, { Component } from "react";
import Banner from "../sections/contact-us/contact-banner/ContactBanner";
import ContactForm from "../sections/contact-us/contact-form/ContactForm";
import ContactMap from "../sections/contact-us/contact-map/ContactMap"

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ContactForm />
                <ContactMap />
            </div>
        );
    }
}

export default ContactUs;