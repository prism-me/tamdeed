import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { constants } from "../../../utils/constants"

function AgsSlider(props) {
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
                {
                    constants?.site_content?.life_at_ags[
                    props.language
                    ]
                }
                {/* LIFE AT AMERICAN GULF SCHOOL */}
            </h3>

            <OwlCarousel className="owl-theme" {...options}>
                {
                    props.lifeagsData.map((slides, index) => (
                        <div className="item">
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
                                            {/* &mdash; {slides.Subtitle} */}
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
                videoId={props.lifeagsData[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
            />
        </div>
    )
}
export default AgsSlider;