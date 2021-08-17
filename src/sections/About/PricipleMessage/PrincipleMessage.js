import React from 'react';
import principle_sec_bg from "../../../assets/images/about/principle_sec_bg.jpg";
import vid_bg_img from "../../../assets/images/about/vid_img.jpg";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {Grid} from "@material-ui/core";

const PrincipleMessage = () => {
    return (
        <Grid container className="info-tabs justify-content-center">
            <h3 className="InfoTitle">PRINCIPLE MESSAGE</h3>
            <Grid container sm={12} className="d-flex w-100">
                <Grid item sm={12} className="cont-hld" style={{
                    backgroundImage: `url(${principle_sec_bg})`
                }}>
                    <div className="op-div">
                    </div>
                    <div className="wavy-div">
                    </div>
                    <div  className="vid-cont">
                        <div className="bg-img-hld">
                            <img alt={"#"} src={vid_bg_img} className="bg-img"/>
                            <div className="video-promo-content mt-4 ">
                                <ModalVideo channel='youtube' autoplay isOpen={false} videoId="RBZutrFFhTA"/>
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
    );
};

export default PrincipleMessage;