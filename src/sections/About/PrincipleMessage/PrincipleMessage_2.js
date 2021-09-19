import { React, useState } from 'react';
import principle_sec_bg from "../../../assets/images/about/principle_sec_bg_2.png";
import vid_bg_img from "../../../assets/images/about/PrincipalMessageThumbnail.jpg";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Grid } from "@material-ui/core";


const PrincipleMessage = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="Principal p-main">
            <h3 className="InfoTitle">PRINCIPAL'S MESSAGE</h3>
            <div className="p-cont">
                <div className="cont-hld" style={{
                    backgroundImage: `url(${principle_sec_bg})`
                }}>
                    <img alt={""} className={"cont-hld"} src={principle_sec_bg} style={{
                        visibility: "hidden",
                        display: "inline-block"
                    }} />
                    <Grid container sm={12} className="d-flex w-100 justify-content-center align-items-center position-absolute">
                        <div className="vid-cont">
                            <div className="bg-img-hld">
                                <img alt={"#"} src={vid_bg_img} className="bg-img" />
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpen} videoId="AmLy5qM7dEI" onClose={() => setOpen(false)} />
                                    <button className="btn video-play-icon" onClick={() => setOpen(true)}>
                                        <PlayArrowIcon className={"playSize"} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default PrincipleMessage;