import React from 'react';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
const Contactpannel = () => {
    return (
        <div className="contact-pannel-main">
            <div className="contact-number">
                <a href='tel:06 000000' class="contact-pannel-btn text-decoration-none"><PhoneOutlinedIcon />  06-00000</a>
            </div>
        </div>
    );
};

export default Contactpannel;