import React, {useEffect, useState} from 'react';
import location_icon from "../../assets/images/contact/map-pin.png";
import phone_icon from "../../assets/images/contact/phone.png";
import email_icon from "../../assets/images/contact/mail.png";
import youtube_icon from "../../assets/images/contact/Youtube.png";
import fb_icon from "../../assets/images/contact/Facebook.png";
import insta_icon from "../../assets/images/contact/Instagram.png";
import twitter_icon from "../../assets/images/contact/Twitter.png";
import bg_img from "../../assets/images/contact/Rectangle 235.png";
import $ from "jquery";
import {STRINGS} from "../../utils/base";
import {API} from "../../http/API";
import SnackBar from "../../components/SnackBar/SnackBar";
import Spinner from "../../components/Spinner/Spinner";

const defaultState = {
    isRequestPending: false,
    isOpen: false,
    message: "",
    variant: "",
    name: '',
    email: '',
    phone: "",
    _message: ""
}

const Contact = () => {
    const [init, setInit] = useState(defaultState);
    let {name, email, phone, _message, isRequestPending, isOpen, message, variant} = init;

    useEffect(() => {
        $(".back-to-top").css("display", "none")
        return () => {
            $(".back-to-top").css("display", "flex")
        }
    }, []);

    const validation = (obj) => {
        let valid = {error: true, message: ""}
        let emailRegex = STRINGS.REGEX.EMAIL;

        if (obj.email === "") {
            valid.error = false;
            valid.message += valid.message ? "\nEmail Required" : "Email Required"
        } else if (!emailRegex.test(obj.email)) {
            valid.error = false;
            valid.message += valid.message ? `\n${obj.email} is not a valid email` : `${obj.email} is not a valid email`
        }
        if (obj.name === "") {
            valid.error = false;
            valid.message += valid.message ? "\nName Required" : "Name Required"
        }
        if (obj.phone === "") {
            valid.error = false;
            valid.message += valid.message ? "\nPhone Number Required" : "Phone Number Required"
        }
        if (obj._message === "") {
            valid.error = false;
            valid.message += valid.message ? "\nMessage Required" : "Message Required"
        }

        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validate = validation(init)
        if (validate.error) {
            let inputData = {
                name: init.name,
                email: init.email,
                phone: init.phone,
                message: init._message,
                flag: "contact_form"
            }
            setInit({
                ...init,
                isRequestPending: true
            })

            API.post("contact_form", inputData).then((res) => {
                if (res.status === STRINGS.REQUEST_STATUS) {
                    setInit({
                        ...init,
                        isRequestPending: false,
                        name: '',
                        email: '',
                        phone: "",
                        _message: "",
                        isOpen: true,
                        message: res.data.message,
                        variant: "success"
                    })
                } else {
                    setInit({
                        ...init,
                        isRequestPending: false,
                        isOpen: true,
                        message: res.data.message,
                        variant: "error"
                    })
                }
            })
        } else {
            setInit({
                ...init,
                isOpen: true,
                message: validate.message
            });
        }
    }

    const cancelSnackBar = () => {
        setInit({
            ...init,
            isOpen: false
        })
    }

    const handleChange = (e) => {
        setInit({
            ...init,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="contact-main">
            <SnackBar
                isOpen={isOpen}
                message={message}
                variant={variant}
                onClose={cancelSnackBar}
            />
            <div className="contact-sec">
                <div className="contact-card-holder">
                    <div className="contact-card">
                        <div className="card-head">
                            <div className="heading">Contact Us</div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="inp-group">
                                    <div className="inp">
                                        <input name={"name"} onChange={handleChange} value={name} type={"text"}
                                               className="inp-text" placeholder={"Name"}/>
                                    </div>
                                    <div className="inp">
                                        <input name={"phone"} onChange={handleChange} value={phone} type={"number"}
                                               className="inp-text" placeholder={"Phone Number"}/>
                                    </div>
                                    <div className="inp">
                                        <input name={"email"} onChange={handleChange} value={email} type={"text"}
                                               className="inp-text" placeholder={"Email Address"}/>
                                    </div>
                                    <div className="inp">
                                        <textarea name={"_message"} onChange={handleChange} value={_message} rows={4}
                                                  className="inp-text" placeholder={"Your Message"}/>
                                    </div>
                                    <div className="inp-btn">
                                        {
                                            !isRequestPending ?
                                                <button className="btn" onClick={handleSubmit}>Send</button> :
                                                <Spinner color2={"#1a2c52"} color1={"white"} size={"sm"}/>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-foot">
                            <div className="address-label">
                                <div className="icon">
                                    <img alt={"#"} src={location_icon}/>
                                </div>
                                <div className="text">
                                    <p>Al RahmaniyaShaghrafah 4 - Sharjah - United Arab Emirates</p>
                                </div>
                            </div>
                            <div className="info-group">
                                <div className="info-item">
                                    <div className="txt">
                                        <p>For Admissions</p>
                                    </div>
                                    <div className="icon-txt-hld">
                                        <div className="icon">
                                            <img alt={"#"} src={phone_icon}/>
                                        </div>
                                        <div className="txt">
                                            06-000000
                                        </div>
                                    </div>
                                    <div className="icon-txt-hld">
                                        <div className="icon">
                                            <img alt={"#"} src={email_icon}/>
                                        </div>
                                        <div className="txt">
                                            admissions@ags.ae
                                        </div>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="txt">
                                        <p>Help Desk & Queries</p>
                                    </div>
                                    <div className="icon-txt-hld">
                                        <div className="icon">
                                            <img alt={"#"} src={phone_icon}/>
                                        </div>
                                        <div className="txt">
                                            06-000000
                                        </div>
                                    </div>
                                    <div className="icon-txt-hld">
                                        <div className="icon">
                                            <img alt={"#"} src={email_icon}/>
                                        </div>
                                        <div className="txt">
                                            info@ags.ae
                                        </div>
                                    </div>
                                </div>
                                <div className="info-item ic">
                                    <div className="icon-txt-hld ic">
                                        <div className="icon">
                                            <img alt={"#"} src={youtube_icon}/>
                                        </div>
                                        <div className="icon">
                                            <img alt={"#"} src={insta_icon}/>
                                        </div>
                                        <div className="icon">
                                            <img alt={"#"} src={fb_icon}/>
                                        </div>
                                        <div className="icon">
                                            <img alt={"#"} src={twitter_icon}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-hld">
                    <img className="sec-bg-img" src={bg_img} alt={"#"}/>
                </div>
            </div>
            <div className="contact-footer">
                <div className="address-map">
                    <div className="btn-hld">
                        <button className="btn">Share Location</button>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14423.484524133519!2d55.56093361751506!3d25.342105034139998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f40e118ee9a9%3A0x322230539da7a8e3!2sAl%20RahmaniyaShaghrafah%204%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1629034203974!5m2!1sen!2s"
                        width="100%" style={{border: "0"}} loading="lazy"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;