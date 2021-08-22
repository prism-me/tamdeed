import React from "react";


function AdmissionContact (props) {
    return (
        <div className="AdmissionContact container">
            <h1 className="Title">
                ADMISSION CONTACT DETAILS
            </h1>
            <p className={"subTitle"}>
                <u><a href="mailto:Info@ags.ae">Email Us here for admission.</a></u> Phone Number: 06-000000
            </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14423.484524133519!2d55.56093361751506!3d25.342105034139998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f40e118ee9a9%3A0x322230539da7a8e3!2sAl%20RahmaniyaShaghrafah%204%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1629034203974!5m2!1sen!2s"
                    width="100%" height="400px" style={{border:"0",borderRadius:"60px"}}  loading="lazy"></iframe>
        </div>
    );
}

export default AdmissionContact;