import React, { useEffect } from 'react';
import header_bg from "./../../assets/images/agsbanners/homepageBanner.png";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import StopIcon from "@material-ui/icons/Stop";

const BackGroundVideo = ({ videoSource, children, blur, videoRef }) => {

    return (
        <div className={"BackgroundDiv"}>
            {/*<div className='container'>*/}
            <video
                // style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                // autoPlay="autoplay"
                loop="loop"
                // muted
                // ref={video}
                id={"video-id"}
                poster={header_bg}
                className='video' >
                {/* TODO make it accept multiple media types */}
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {children}
            {/*</div>*/}
            {/* <span id="video-bottom"></span> */}
        </div>
    )
}

export default BackGroundVideo