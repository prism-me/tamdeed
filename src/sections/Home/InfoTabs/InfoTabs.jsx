import React, { useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import exper1 from "../../../assets/images/ExperienceAGS/exper1.png";
import exper2 from "../../../assets/images/ExperienceAGS/exper2.png";
import exper3 from "../../../assets/images/ExperienceAGS/exper3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { withNamespaces } from 'react-i18next';

function InfoTabs({ t }) {
  const slidesData = [
    {
      thumbnail: exper1,
      title: "Provide self directed & engaged learning.",
      video_link: "https://youtu.be/6uerYnp1DM4",
    },
    {
      thumbnail: exper2,
      title: "manpower taking on challenges.",
      video_link: "https://youtu.be/Nv_o3Kn9jPY",
    },
    {
      thumbnail: exper3,
      title: "Stimulate critical thinking among all the children",
      video_link: "https://youtu.be/DohvORAMlHs",
    },
    {
      thumbnail: exper2,
      title: "Provide self directed & engaged learning.",
      video_link: "https://youtu.be/6uerYnp1DM4",
    },
    {
      thumbnail: exper1,
      title: "mpower taking on challenges.",
      video_link: "https://youtu.be/Nv_o3Kn9jPY",
    },
    {
      thumbnail: exper3,
      title: "Stimulate critical thinking among all the children",
      video_link: "https://youtu.be/DohvORAMlHs",
    },
  ];
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
    <div className={"info-tabs"}>
      <h2 className={"InfoTitle"}>
        {t('ExperienceTitle')}
        {/* EXPERIENCE THE AGS DIFFERENCE */}
      </h2>
      <OwlCarousel className="owl-theme" {...options}>
        {slidesData.map((slides, index) => (
          <div className={"divstyle"}>
            <div className="d-flex justify-content-center align-items-center imgheight"
              style={{ backgroundImage: `url(${slides.thumbnail})` }}
            >
              <div className="video-promo-content mt-4 ">
                {slides.video_link && (
                  <button className="btn video-play-icon"
                    onClick={() => {
                      setCurrentIndex(index);
                      setOpenVideo(true);
                    }}
                  >
                    <PlayArrowIcon className={"playSize"} />
                  </button>
                )}
                <h5 className={"overview-heading"}>
                  {slides.title}
                </h5>
              </div>
            </div>
          </div>
        ))
        }
      </OwlCarousel>
      <ModalVideo
        channel="youtube"
        isOpen={openVideo}
        videoId={slidesData[currentIndex]?.video_link?.split("/")[3]}
        onClose={() => setOpenVideo(false)}
      />
    </div>
  )
}

export default withNamespaces()(InfoTabs);
