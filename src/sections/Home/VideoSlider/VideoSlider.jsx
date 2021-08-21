// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import ModalVideo from "react-modal-video";
// import videoImage1 from "./../../../assets/images/ug-images/video 1.jpg";
// import videoImage2 from "./../../../assets/images/ug-images/video 2.jpg";
// import videoImage3 from "./../../../assets/images/ug-images/video 3.jpg";
// import { Button } from "react-bootstrap";
// import { FaCaretRight } from "react-icons/fa";
// import { IoPlayOutline } from "react-icons/io5";
// const data = [
//   {
//     thumbnail: videoImage2,
//     title: "Why study at EAHM?",
//     video_link: "https://youtu.be/6uerYnp1DM4",
//   },
//   {
//     thumbnail: videoImage1,
//     title: "How EAHM keeps its students safe?",
//     video_link: "https://youtu.be/Nv_o3Kn9jPY",
//   },
//   {
//     thumbnail: videoImage3,
//     title: "BBA at EAHM",
//     video_link: "https://youtu.be/DohvORAMlHs",
//   },
// ];
//
// function VideoSlider() {
//   const [openVideo, setOpenVideo] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);
//
//   return (
//     <div className="video-slider">
//       <h5 className="section-title">EXPERIENCE THE AGS DIFFERENCE</h5>
//       <Carousel
//         dynamicHeight={false}
//         showStatus={false}
//         showArrows={false}
//         showIndicators={false}
//         showThumbs={false}
//         infiniteLoop={true}
//         // autoPlay={true}
//         centerMode
//         stopOnHover={false}
//         centerSlidePercentage={70}
//         onChange={(index) => setCurrentSlide(index)}
//         className="video-carousel center"
//         interval={6000}
//       >
//         {data?.map((x, index) => (
//           <div>
//             <div
//               className="video-image-wrapper"
//             >
//               {x.video_link && (
//                 <div className="play-button-wrap">
//                   <div
//                     className="play-button"
//                     onClick={() => {
//                       setCurrentIndex(index);
//                       setOpenVideo(true);
//                     }}
//                   >
//                     <IoPlayOutline />
//                   </div>
//                 </div>
//               )}
//               <img src={x.thumbnail} alt="" loading="lazy" />
//             </div>
//           </div>
//         ))}
//       </Carousel>
//         <div className="d-flex justify-content-center align-items-center mt-4">
//             <div className="dots-section d-flex justify-content-center align-items-center">
//                 {
//                     data.map((x,index)=>(
//                         <span key={index} onClick={()=> setCurrentSlide(index)} className={`circle ${currentSlide === index ? 'active': ''}`}> </span>
//                     ))
//                 }
//             </div>
//         </div>
//       <ModalVideo
//         channel="youtube"
//         isOpen={openVideo}
//         videoId={data[currentIndex]?.video_link?.split("/")[3]}
//         onClose={() => setOpenVideo(false)}
//       />
//     </div>
//   );
// }
//
// export default VideoSlider;

import React, { useState, useRef } from "react";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
// import VolumeUp from "@material-ui/icons/VolumeUp";
// import VolumeDown from "@material-ui/icons/VolumeDown";
// import VolumeMute from "@material-ui/icons/VolumeOff";
// import FullScreen from "@material-ui/icons/Fullscreen";
// import Popover from "@material-ui/core/Popover";
import screenful from "screenfull";
import Controls from "../../../components/Controls";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ags1 from "../../../assets/images/LifeInAGS/ags1.png";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const useStyles = makeStyles((theme) => ({
    playerWrapper: {
        width: "100%",

        position: "relative",
        // "&:hover": {
        //   "& $controlsWrapper": {
        //     visibility: "visible",
        //   },
        // },
    },
}));

let count = 0;

function VideoSlider() {
    const classes = useStyles();
    const [state, setState] = useState({
        playing: false,
        controls: false,
    });

    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsRef = useRef(null);
    const {
        playing,
        controls,
    } = state;

    const handlePlayPause = () => {
        setState({ ...state, playing: !state.playing });
    };

    return (
        <>
            <Carousel
                swipeable={false}
                draggable={false}
                arrows={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <div
                    ref={playerContainerRef}
                    className={"divstyle"}
                >
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        playing={playing}
                        controls={false}
                        config={{
                            file: {
                                attributes: {
                                    crossorigin: "anonymous",
                                },
                            },
                        }}
                    />

                    <Controls
                        ref={controlsRef}
                        onPlayPause={handlePlayPause}
                        playing={playing}
                    />
                </div>
                <div
                    ref={playerContainerRef}
                    className={classes.playerWrapper}
                >
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        playing={playing}
                        controls={false}
                        config={{
                            file: {
                                attributes: {
                                    crossorigin: "anonymous",
                                },
                            },
                        }}
                    />

                    <Controls
                        ref={controlsRef}
                        onPlayPause={handlePlayPause}
                        playing={playing}
                    />
                </div>
                <div
                    ref={playerContainerRef}
                    className={classes.playerWrapper}
                >
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        playing={playing}
                        controls={false}
                        config={{
                            file: {
                                attributes: {
                                    crossorigin: "anonymous",
                                },
                            },
                        }}
                    />

                    <Controls
                        ref={controlsRef}
                        onPlayPause={handlePlayPause}
                        playing={playing}
                    />
                </div>
                <div
                    ref={playerContainerRef}
                    className={classes.playerWrapper}
                >
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        playing={playing}
                        controls={false}
                        config={{
                            file: {
                                attributes: {
                                    crossorigin: "anonymous",
                                },
                            },
                        }}
                    />

                    <Controls
                        ref={controlsRef}
                        onPlayPause={handlePlayPause}
                        playing={playing}
                    />
                </div>
                <div
                    ref={playerContainerRef}
                    className={classes.playerWrapper}
                >
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        playing={playing}
                        controls={false}
                        config={{
                            file: {
                                attributes: {
                                    crossorigin: "anonymous",
                                },
                            },
                        }}
                    />

                    <Controls
                        ref={controlsRef}
                        onPlayPause={handlePlayPause}
                        playing={playing}
                    />
                </div>
            </Carousel>
        </>
    );
}

export default VideoSlider;
