import React, {useEffect} from 'react';
import header_bg from "./../../assets/images/agsbanners/HomePage.jpg";

const BackGroundVideo = ({ videoSource, children, blur }) => {
    // useEffect(() => {
    //     const BackgroundDiv = document.querySelector('.BackgroundDiv')
    //     const video = BackgroundDiv.querySelector('.video')
    //     const playButton = BackgroundDiv.querySelector('.playButton')
    //     playButton.addEventListener('click',(e)=>{
    //         if (video.paused){
    //             video.play()
    //             e.target.textContent='play'
    //         }
    //         else {
    //             video.pause()
    //             e.target.textContent='pause'
    //         }
    //     })
    //         }, [])

    return (
        <div className={"BackgroundDiv"}>
            {/*<div className='container'>*/}
                <video
                    // style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                    autoPlay="autoplay"
                    loop="loop"
                    muted
                    // ref={video}
                    id="video-id"
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