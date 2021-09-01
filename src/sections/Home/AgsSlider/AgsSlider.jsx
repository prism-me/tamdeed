import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ags1 from "../../../assets/images/LifeInAGS/ags1.png";
import ags2 from "../../../assets/images/LifeInAGS/ags2.png";
import ags3 from "../../../assets/images/LifeInAGS/ags3.png";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { withNamespaces } from 'react-i18next';

function AgsSlider({ props, t }) {
    const slidesData = [
        {
            thumbnail: ags1,
            title: "ART",
            Subtitle: "To stimulate thoughts, emotions and ideas through senses.",
            video_link: "https://youtu.be/6uerYnp1DM4",
        },
        {
            thumbnail: ags2,
            title: "SPORTS",
            Subtitle: "Educating swimming skills to articulate physical growth.",
            video_link: "https://youtu.be/Nv_o3Kn9jPY",
        },
        {
            thumbnail: ags3,
            title: "FUN",
            Subtitle: "Enjoyment, amusement and light hearted play time.",
            video_link: "https://youtu.be/DohvORAMlHs",
        },
        {
            thumbnail: ags2,
            title: "ADVENTUROUS",
            Subtitle: "Outdoor sports to healthier lifestyle.",
            video_link: "https://youtu.be/6uerYnp1DM4",
        },
        {
            thumbnail: ags3,
            title: "FUN",
            Subtitle: "Enjoyment, amusement and light hearted play time.",
            video_link: "https://youtu.be/Nv_o3Kn9jPY",
        },
        {
            thumbnail: ags1,
            title: "FUN",
            Subtitle: "Enjoyment, amusement and light hearted play time.",
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
        <div className={"AgsSlider"}>
            <h3 className={"InfoTitle"}>
                {t('AgsTitle')}
                {/* LIFE AT AMERICAN GULF SCHOOL */}
            </h3>

            <OwlCarousel className="owl-theme" {...options}>
                {
                    slidesData.map((slides, index) => (
                        <div className="item">
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
                                            {slides.title} &mdash; {slides.Subtitle}
                                        </h5>
                                    </div>
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
export default withNamespaces()(AgsSlider);