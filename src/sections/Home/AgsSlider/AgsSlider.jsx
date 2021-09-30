import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ags1 from "../../../assets/images/LifeatAGS/Acadamics.png";
import ags2 from "../../../assets/images/LifeatAGS/Arts.jpg";
import ags3 from "../../../assets/images/LifeatAGS/drama.jpg";
import ags4 from "../../../assets/images/LifeatAGS/Music.jpg";
import ags5 from "../../../assets/images/LifeatAGS/sport.jpg";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function AgsSlider(props) {
    const slidesData = [
        {
            thumbnail: ags1,
            title: "ACADEMICS",
            Subtitle: "To stimulate thoughts, emotions and ideas through senses.",
            video_link: "https://youtu.be/frWc_ZHTt5M",
        },
        {
            thumbnail: ags2,
            title: "ARTS",
            Subtitle: "To stimulate thoughts, emotions and ideas through senses.",
            video_link: "https://youtu.be/abGC90lI0H8",
        },
        {
            thumbnail: ags3,
            title: "DRAMA",
            Subtitle: "Enjoyment, amusement and light hearted play time.",
            video_link: "https://youtu.be/t229_pI2wcM",
        },
        {
            thumbnail: ags4,
            title: "MUSIC",
            Subtitle: "Outdoor sports to healthier lifestyle.",
            video_link: "https://youtu.be/Ii1yWlWa86o",
        },
        {
            thumbnail: ags5,
            title: "SPORTS",
            Subtitle: "Educating swimming skills to articulate physical growth.",
            video_link: "https://youtu.be/eWfMxXOHQjw",
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
        <div className={"AgsSlider"} dir="ltr">
            <h3 className={"InfoTitle"}>
                LIFE AT AMERICAN GULF SCHOOL
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
                youtube={{
                    autoplay: 1,
                    mute: 1
                }}
                isOpen={openVideo}
                videoId={slidesData[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
            />
        </div>
    )
}
export default AgsSlider;