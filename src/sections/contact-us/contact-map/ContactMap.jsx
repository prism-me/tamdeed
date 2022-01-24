import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GetAppIcon from '@material-ui/icons/GetApp';
import NavigationIcon from '@material-ui/icons/Navigation';

export default function ContactMap() {

    return (
        <div className={"contact-map"}>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.352858748993!2d55.408730514485654!3d25.258712835401614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63e1e7d144bf%3A0xddf1a27b45bb430e!2sTamdeed%20Projects%20LLC!5e0!3m2!1sen!2s!4v1640872901541!5m2!1sen!2s"
                    width="100%" height="410" style={{ border: "0" }} loading="lazy" />
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
                <a className="btnStyle" href="https://www.google.com/maps/dir//Tamdeed+Projects+LLC+7C56%2BF9M+Muhaisnah+-+Muhaisanah+2+-+Dubai/@25.2586732,55.4109627,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f63e1e7d144bf:0xddf1a27b45bb430e" target="_blank" style={{textDecoration: 'none'}}>
                    View Directions <ChevronRightIcon />
                </a>
                <a href="#" className={"iconstyle"}>
                    <NavigationIcon className="icon" />
                </a>
                {/* <a href="#" className={"iconstyle"}>
                    <GetAppIcon className="icon" />
                </a> */}
            </div>
        </div>
    )
}