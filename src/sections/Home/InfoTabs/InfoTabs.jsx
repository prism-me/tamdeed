import React, {useState} from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import exper1 from "../../../assets/images/ExperienceAGS/exper1.png";
import exper2 from "../../../assets/images/ExperienceAGS/exper2.png";
import exper3 from "../../../assets/images/ExperienceAGS/exper3.png";
import ReactPlayer from "react-player";

export default function InfoTabs() {
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
    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
  return(
      <div className={"info-tabs"}>
        <h2 className={"InfoTitle"}>EXPERIENCE THE AGS DIFFERENCE</h2>
        <Carousel
            swipeable={false}
            draggable={false}
            arrows={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px SpacingItem"
        >
                {/*<div className={"divstyle"}>*/}
                {/*    <ReactPlayer*/}
                {/*        className='react-player'*/}
                {/*        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'*/}
                {/*        width='100%'*/}
                {/*        height='100%'*/}
                {/*        light={exper1}*/}
                {/*    />*/}
                {/*    <h5 className={"overview-heading"}>*/}
                {/*        Provide self directed & engaged learning.*/}
                {/*    </h5>*/}
                {/*</div>*/}
                {/*<div className={"divstyle"}>*/}
                {/*    <ReactPlayer*/}
                {/*        className='react-player'*/}
                {/*        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'*/}
                {/*        width='100%'*/}
                {/*        height='100%'*/}
                {/*        light={exper2}*/}
                {/*    />*/}
                {/*    <h5 className={"overview-heading"}>*/}
                {/*        manpower taking on challenges.*/}
                {/*    </h5>*/}
                {/*</div>*/}
                {/*<div className={"divstyle"}>*/}
                {/*    <ReactPlayer*/}
                {/*        className='react-player'*/}
                {/*        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'*/}
                {/*        width='100%'*/}
                {/*        height='100%'*/}
                {/*        light={exper3}*/}
                {/*    />*/}
                {/*    <h5 className={"overview-heading"}>*/}
                {/*        Stimulate critical thinking among all the children*/}
                {/*    </h5>*/}
                {/*</div>*/}
                {/*<div className={"divstyle"}>*/}
                {/*    <ReactPlayer*/}
                {/*        className='react-player'*/}
                {/*        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'*/}
                {/*        width='100%'*/}
                {/*        height='100%'*/}
                {/*        light={exper1}*/}
                {/*    />*/}
                {/*    <h5 className={"overview-heading"}>*/}
                {/*        Provide self directed & engaged learning.*/}
                {/*    </h5>*/}
                {/*</div>*/}
                {/*<div className={"divstyle"}>*/}
                {/*    <ReactPlayer*/}
                {/*        className='react-player'*/}
                {/*        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'*/}
                {/*        width='100%'*/}
                {/*        height='100%'*/}
                {/*        light={exper2}*/}
                {/*    />*/}
                {/*  <h5 className={"overview-heading"}>*/}
                {/*    Provide self directed & engaged learning.*/}
                {/*  </h5>*/}
                {/*</div>*/}
            {/*{*/}
            {/*  slidesData.map((slides, index) => (*/}
                  <div className={"divstyle"}>
                    <div className="d-flex justify-content-center align-items-center imgheight"
                         style={{ backgroundImage: `url(${exper1})` }}
                    >
                      <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />
                        <button className="btn video-play-icon" onClick={()=> setOpen(true)}>
                          <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                            Provide self directed & engaged learning.
                        </h5>
                      </div>
                    </div>
                  </div>
            <div className={"divstyle"}>
                <div className="d-flex justify-content-center align-items-center imgheight"
                     style={{ backgroundImage: `url(${exper2})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="RBZutrFFhTA" onClose={() => setOpen1(false)} />
                        <button className="btn video-play-icon" onClick={()=> setOpen1(true)}>
                            <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                            manpower taking on challenges.
                        </h5>
                    </div>
                </div>
            </div>
            <div className={"divstyle"}>
                <div className="d-flex justify-content-center align-items-center imgheight"
                     style={{ backgroundImage: `url(${exper3})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="RBZutrFFhTA" onClose={() => setOpen2(false)} />
                        <button className="btn video-play-icon" onClick={()=> setOpen2(true)}>
                            <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                            Stimulate critical thinking among all the children
                        </h5>
                    </div>
                </div>
            </div>
            <div className={"divstyle"}>
                <div className="d-flex justify-content-center align-items-center imgheight"
                     style={{ backgroundImage: `url(${exper2})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="RBZutrFFhTA" onClose={() => setOpen3(false)} />
                        <button className="btn video-play-icon" onClick={()=> setOpen3(true)}>
                            <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                            Provide self directed & engaged learning.
                        </h5>
                    </div>
                </div>
            </div>
            <div className={"divstyle"}>
                <div className="d-flex justify-content-center align-items-center imgheight"
                     style={{ backgroundImage: `url(${exper1})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="RBZutrFFhTA" onClose={() => setOpen4(false)} />
                        <button className="btn video-play-icon" onClick={()=> setOpen4(true)}>
                            <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                            manpower taking on challenges.
                        </h5>
                    </div>
                </div>
            </div>
            <div className={"divstyle"}>
                <div className="d-flex justify-content-center align-items-center imgheight"
                     style={{ backgroundImage: `url(${exper3})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="RBZutrFFhTA" onClose={() => setOpen5(false)} />
                        <button className="btn video-play-icon" onClick={()=> setOpen5(true)}>
                            <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                            Stimulate critical thinking among all the children
                        </h5>
                    </div>
                </div>
            </div>
            {/*  ))*/}
            {/*}*/}
        </Carousel>
      </div>
  )
}
