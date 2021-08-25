import React, {useEffect, useState} from "react";
import "react-multi-carousel/lib/styles.css";
import ags1 from "../../../assets/images/LifeInAGS/ags1.png";
import ags2 from "../../../assets/images/LifeInAGS/ags2.png";
import ags3 from "../../../assets/images/LifeInAGS/ags3.png";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function AgsSlider(props) {
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

    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
    const options = {
        loop: true,
        margin: 10,
        items: 4,
        autoplay: true,
        dots:true,
        responsive:{
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
    return(
        <div className={"AgsSlider"}>
            <h3 className={"InfoTitle"}>LIFE AT AMERICAN GULF SCHOOL</h3>

            <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                    <div className={"divstyle"}>
                        <div className="d-flex justify-content-center align-items-center imgheight"
                             style={{ backgroundImage: `url(${ags1})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />
                                <button className="btn video-play-icon" onClick={()=> setOpen(true)}>
                                    <PlayArrowIcon className={"playSize"}/>
                                </button>
                                <h5 className={"overview-heading"}>
                                    ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className={"divstyle"}>
                        <div className="d-flex justify-content-center align-items-center imgheight"
                             style={{ backgroundImage: `url(${ags3})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="RBZutrFFhTA" onClose={() => setOpen2(false)} />
                                <button className="btn video-play-icon" onClick={()=> setOpen2(true)}>
                                    <PlayArrowIcon className={"playSize"}/>
                                </button>
                                <h5 className={"overview-heading"}>
                                    ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className={"divstyle"}>
                        <div className="d-flex justify-content-center align-items-center imgheight"
                             style={{ backgroundImage: `url(${ags2})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="RBZutrFFhTA" onClose={() => setOpen1(false)} />
                                <button className="btn video-play-icon" onClick={()=> setOpen1(true)}>
                                    <PlayArrowIcon className={"playSize"}/>
                                </button>
                                <h5 className={"overview-heading"}>
                                    ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className={"divstyle"}>
                        <div className="d-flex justify-content-center align-items-center imgheight"
                             style={{ backgroundImage: `url(${ags1})` }}
                        >
                            <div className="video-promo-content mt-4 ">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="RBZutrFFhTA" onClose={() => setOpen3(false)} />
                                <button className="btn video-play-icon" onClick={()=> setOpen3(true)}>
                                    <PlayArrowIcon className={"playSize"}/>
                                </button>
                                <h5 className={"overview-heading"}>
                                    ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>


            {/*<Carousel*/}
            {/*    swipeable={false}*/}
            {/*    draggable={false}*/}
            {/*    arrows={false}*/}
            {/*    showDots={true}*/}
            {/*    responsive={responsive}*/}
            {/*    ssr={true} // means to render carousel on server-side.*/}
            {/*    infinite={true}*/}
            {/*    autoPlay={true}*/}
            {/*    autoPlaySpeed={3000}*/}
            {/*    keyBoardControl={true}*/}
            {/*    customTransition="all .5"*/}
            {/*    transitionDuration={500}*/}
            {/*    containerClass="carousel-container"*/}
            {/*    dotListClass="custom-dot-list-style"*/}
            {/*    itemClass="carousel-item-padding-40-px SpacingItem"*/}
            {/*>*/}
            {/*        /!*{*!/*/}
            {/*        /!*    slidesData.map((slides, index) => (*!/*/}
            {/*                <div className={"divstyle"}>*/}
            {/*                    <div className="d-flex justify-content-center align-items-center imgheight"*/}
            {/*                         style={{ backgroundImage: `url(${ags1})` }}*/}
            {/*                    >*/}
            {/*                        <div className="video-promo-content mt-4 ">*/}
            {/*                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />*/}
            {/*                            <button className="btn video-play-icon" onClick={()=> setOpen(true)}>*/}
            {/*                                <PlayArrowIcon className={"playSize"}/>*/}
            {/*                            </button>*/}
            {/*                            <h5 className={"overview-heading"}>*/}
            {/*                                ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={"divstyle"}>*/}
            {/*                    <div className="d-flex justify-content-center align-items-center imgheight"*/}
            {/*                         style={{ backgroundImage: `url(${ags2})` }}*/}
            {/*                    >*/}
            {/*                        <div className="video-promo-content mt-4 ">*/}
            {/*                            <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="RBZutrFFhTA" onClose={() => setOpen1(false)} />*/}
            {/*                            <button className="btn video-play-icon" onClick={()=> setOpen1(true)}>*/}
            {/*                                <PlayArrowIcon className={"playSize"}/>*/}
            {/*                            </button>*/}
            {/*                            <h5 className={"overview-heading"}>*/}
            {/*                                ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={"divstyle"}>*/}
            {/*                    <div className="d-flex justify-content-center align-items-center imgheight"*/}
            {/*                         style={{ backgroundImage: `url(${ags3})` }}*/}
            {/*                    >*/}
            {/*                        <div className="video-promo-content mt-4 ">*/}
            {/*                            <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="RBZutrFFhTA" onClose={() => setOpen2(false)} />*/}
            {/*                            <button className="btn video-play-icon" onClick={()=> setOpen2(true)}>*/}
            {/*                                <PlayArrowIcon className={"playSize"}/>*/}
            {/*                            </button>*/}
            {/*                            <h5 className={"overview-heading"}>*/}
            {/*                                ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={"divstyle"}>*/}
            {/*                    <div className="d-flex justify-content-center align-items-center imgheight"*/}
            {/*                         style={{ backgroundImage: `url(${ags1})` }}*/}
            {/*                    >*/}
            {/*                        <div className="video-promo-content mt-4 ">*/}
            {/*                            <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="RBZutrFFhTA" onClose={() => setOpen3(false)} />*/}
            {/*                            <button className="btn video-play-icon" onClick={()=> setOpen3(true)}>*/}
            {/*                                <PlayArrowIcon className={"playSize"}/>*/}
            {/*                            </button>*/}
            {/*                            <h5 className={"overview-heading"}>*/}
            {/*                                ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={"divstyle"}>*/}
            {/*                    <div className="d-flex justify-content-center align-items-center imgheight"*/}
            {/*                         style={{ backgroundImage: `url(${ags3})` }}*/}
            {/*                    >*/}
            {/*                        <div className="video-promo-content mt-4 ">*/}
            {/*                            <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="RBZutrFFhTA" onClose={() => setOpen4(false)} />*/}
            {/*                            <button className="btn video-play-icon" onClick={()=> setOpen4(true)}>*/}
            {/*                                <PlayArrowIcon className={"playSize"}/>*/}
            {/*                            </button>*/}
            {/*                            <h5 className={"overview-heading"}>*/}
            {/*                                ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={"divstyle"}>*/}
            {/*                    <div className="d-flex justify-content-center align-items-center imgheight"*/}
            {/*                         style={{ backgroundImage: `url(${ags2})` }}*/}
            {/*                    >*/}
            {/*                        <div className="video-promo-content mt-4 ">*/}
            {/*                            <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="RBZutrFFhTA" onClose={() => setOpen5(false)} />*/}
            {/*                            <button className="btn video-play-icon" onClick={()=> setOpen5(true)}>*/}
            {/*                                <PlayArrowIcon className={"playSize"}/>*/}
            {/*                            </button>*/}
            {/*                            <h5 className={"overview-heading"}>*/}
            {/*                                ART &mdash; <span className={"title"}>To stimulate thoughts, emotions and ideas through senses.</span>*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*        /!*    ))*!/*/}
            {/*        /!*}*!/*/}
            {/*</Carousel>*/}
        </div>
    )
}
export default  AgsSlider;