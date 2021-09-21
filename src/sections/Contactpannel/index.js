import { React, useState } from 'react';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
const Contactpannel = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            {isPlaying ? "" : (
                <div className="contact-pannel-main">
                    <div className="contact-number">
                        <a href='tel:06-5061111' class="contact-pannel-btn text-decoration-none"><PhoneOutlinedIcon />06-5061111</a>
                    </div>
                </div>
            )}

        </>
    );
};

export default Contactpannel;