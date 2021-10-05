import React, { useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { constants } from "../../../utils/constants"

function InfoTabs(props) {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const options = {
    loop: true,
    margin: 10,
    items: 4,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    }
  };
  return (
    <div className={"info-tabs"} dir="ltr">
      <h2 className={"InfoTitle"}>
        {
          constants?.site_content?.exp_ags[
          props.language
          ]
        }
        {/* EXPERIENCE THE AGS DIFFERENCE */}
      </h2>
      <OwlCarousel className="owl-theme" {...options}>
        {props.expData.map((slides, index) => (
          <div className={"divstyle"}>
            <div className="d-flex justify-content-center align-items-center imgheight"
              style={{ backgroundImage: `url(${slides.thumbnail})` }}
            >
              <div className="video-promo-content mt-4 ">
                {slides.video_link && (
                  slides.video_link?.length > 0 ?
                    <button className="btn video-play-icon"
                      onClick={() => {
                        setCurrentIndex(index);
                        setOpenVideo(true);
                      }}
                    >
                      <PlayArrowIcon className={"playSize"} />
                    </button>
                    : ""
                )}
                <h5 className={"overview-heading"}>
                  {
                    props.isArabic
                      ? slides?.arabic?.title
                      : slides.title
                  }
                  {/* {slides.title} */}
                </h5>
              </div>
            </div>
          </div>
        ))
        }
      </OwlCarousel>
      {/* {
        console.log("videoLink", props.expData[currentIndex]?.video_link?.split("/")[3])
      } */}
      <ModalVideo
        channel="youtube"
        youtube={{
          autoplay: 1,
          mute: 1
        }}
        isOpen={openVideo}
        videoId={props.expData[currentIndex]?.video_link?.split("/")[3]}
        onClose={() => setOpenVideo(false)}
      />
    </div>
  )
}

export default InfoTabs;
