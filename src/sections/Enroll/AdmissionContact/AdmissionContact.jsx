import React from "react";
import { constants } from "../../../utils/constants"

function AdmissionContact(props) {
    return (
        <div className="AdmissionContact container" id={"Contact"}>
            <h1 className="Title">
                {
                    constants?.site_content?.adm_contact[
                    props.language
                    ]
                }
                {/* ADMISSION CONTACT DETAILS */}
            </h1>
            <p className={"subTitle"}>
                <u><a href="mailto:admissions@ags.ae">
                    {
                        constants?.site_content?.adm_email[
                        props.language
                        ]
                    }
                    {/* Email Us here for admission. */}
                </a></u>
                {
                    constants?.site_content?.adm_phone[
                    props.language
                    ]
                }
                {/* Phone Number:  */}
                <a href="tel:05-69990871" className="text-decoration-none text-dark">05-69990871</a>
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9867160428666!2d55.562873115012394!3d25.338226783830823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5ef006a4c83%3A0xcf95030e29d9fb7!2sAmerican%20Gulf%20School!5e0!3m2!1sen!2s!4v1632827655730!5m2!1sen!2s"
                width="100%" height="400px" style={{ border: "0", borderRadius: "60px" }} loading="lazy"></iframe>
        </div>
    );
}

export default AdmissionContact;