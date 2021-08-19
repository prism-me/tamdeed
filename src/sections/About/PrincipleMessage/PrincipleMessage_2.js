import React from 'react';
import principle_sec_bg from "../../../assets/images/about/principle_sec_bg_2.png";
import vid_bg_img from "../../../assets/images/about/vid_img.jpg";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {Grid} from "@material-ui/core";


const PrincipleMessage = () => {
    return (
        <Grid container className="info-tabs justify-content-center p-main">
            <h3 className="InfoTitle">PRINCIPLE MESSAGE</h3>
            <Grid container sm={12} className="d-flex w-100" style={{
                backgroundColor:"#fffff"
            }}>
                <Grid item sm={12} className="cont-hld" style={{
                    backgroundImage: `url(${principle_sec_bg})`
                }}>
                    <img alt={""} className={"cont-hld"} src={principle_sec_bg} style={{
                        visibility: "hidden",
                        display:"inline-block"
                    }} />
                    <Grid container sm={12} className="d-flex w-100 justify-content-center align-items-center position-absolute">
                        <div className="vid-cont">
                            <div className="bg-img-hld">
                                <img alt={"#"} src={vid_bg_img} className="bg-img"/>
                                <div className="video-promo-content mt-4 ">
                                    <ModalVideo channel='youtube' autoplay isOpen={false}
                                                videoId="RBZutrFFhTA"/>
                                    <button className="btn video-play-icon">
                                        <PlayArrowIcon className={"playSize"}/>
                                    </button>
                                    <h5 className={"overview-heading"}>

                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PrincipleMessage;