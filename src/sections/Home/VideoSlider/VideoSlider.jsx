import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ModalVideo from "react-modal-video";
import videoImage1 from "./../../../assets/images/ug-images/video 1.jpg";
import videoImage2 from "./../../../assets/images/ug-images/video 2.jpg";
import videoImage3 from "./../../../assets/images/ug-images/video 3.jpg";
import { Button } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
const data = [
  {
    thumbnail: videoImage2,
    title: "Why study at EAHM?",
    video_link: "https://youtu.be/6uerYnp1DM4",
  },
  {
    thumbnail: videoImage1,
    title: "How EAHM keeps its students safe?",
    video_link: "https://youtu.be/Nv_o3Kn9jPY",
  },
  {
    thumbnail: videoImage3,
    title: "BBA at EAHM",
    video_link: "https://youtu.be/DohvORAMlHs",
  },
];

function VideoSlider() {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="video-slider">
      <h5 className="section-title">EXPERIENCE THE AGS DIFFERENCE</h5>
      <Carousel
        dynamicHeight={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        // autoPlay={true}
        centerMode
        stopOnHover={false}
        centerSlidePercentage={70}
        className="video-carousel center"
        interval={6000}
      >
        {data?.map((x, index) => (
          <div>
            <div
              className="video-image-wrapper"
            >
              {x.video_link && (
                <div className="play-button-wrap">
                  <div
                    className="play-button"
                    onClick={() => {
                      setCurrentIndex(index);
                      setOpenVideo(true);
                    }}
                  >
                    <IoPlayOutline />
                  </div>
                </div>
              )}
              <img src={x.thumbnail} alt="" loading="lazy" />
            </div>
          </div>
        ))}
      </Carousel>
      <ModalVideo
        channel="youtube"
        isOpen={openVideo}
        videoId={data[currentIndex]?.video_link?.split("/")[3]}
        onClose={() => setOpenVideo(false)}
      />
    </div>
  );
}

export default VideoSlider;
