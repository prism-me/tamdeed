import React, { useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video';

function VideoBanner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <React.Fragment>
            <div className={"container-fluid videobanner"}>
                <div className="row justify-content-center align-items-center imgheight">
                    <div className="col-md-6 col-lg-12">
                        <div className="video-promo-content mt-4 ">
                            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} /> */}
                            <button className="btn video-play-icon" onClick={() => setOpen(true)}>
                                <PlayArrowIcon className={"playSize"} />
                            </button>
                            <h5 className={"overview-heading"}>
                                What do you get when you partner with QLIQ
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default VideoBanner;