import React, { useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import exper1 from "../../../assets/images/ExperiencewithAGS/Fully Bilingual School/FullyBilingualSchool.jpg";
import exper2 from "../../../assets/images/ExperiencewithAGS/International Baccalaureate Candidate/IBCandidateSchool.JPG";
import exper3 from "../../../assets/images/ExperiencewithAGS/Project Based Learning and Teaching/Project-BasedTeachingandLearning.JPG";
import exper4 from "../../../assets/images/ExperiencewithAGS/Full Academic Support For Child's Learning Needs/FullAcademicSupport.JPG";
import exper5 from "../../../assets/images/ExperiencewithAGS/Stream and Fabrication Labs/StreamandFabrictonLabs.JPG";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function ACTabs(props) {
    const slidesData = [
        {
            thumbnail: exper1,
            // title: "Provide self directed & engaged learning.",
            title: "Fully Bilingual School",
            video_link: "https://youtu.be/-RbBzRWBiSE",
        },
        {
            thumbnail: exper2,
            // title: "manpower taking on challenges.",
            title: "International Baccalaureate Candidate",
            video_link: "https://youtu.be/8q9rBaO-q3A",
        },
        {
            thumbnail: exper3,
            // title: "Stimulate critical thinking among all the children",
            title: "Project Based Learning and Teaching",
            video_link: "https://youtu.be/EP4A8OZi9Eg",
        },
        {
            thumbnail: exper4,
            title: "Full Academic Support For Child's Learning Needs",
            video_link: "https://youtu.be/PzRbz8BnnMA",
        },
        {
            thumbnail: exper5,
            title: "Stream and Fabrication Labs",
            video_link: "https://youtu.be/Rbts9BxV26U",
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
        <div className={"ACTabs"} dir="ltr">
            <h2 className={"InfoTitle"}>EXPERIENCE THE AGS DIFFERENCE</h2>
            <OwlCarousel className="owl-theme" {...options}>
                {props.expData.map((slides, index) => (
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
            <ModalVideo
                channel="youtube"
                youtube={{ autoplay: 1, mute: 1 }}
                isOpen={openVideo}
                videoId={slidesData[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
            />
        </div>
    )
}
