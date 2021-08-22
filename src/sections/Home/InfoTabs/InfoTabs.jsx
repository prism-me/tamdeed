import React, {useState} from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import exper1 from "../../../assets/images/ExperienceAGS/exper1.png";
import exper2 from "../../../assets/images/ExperienceAGS/exper2.png";
import exper3 from "../../../assets/images/ExperienceAGS/exper3.png";

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
      title: "mpower taking on challenges.",
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
  return(
      <div className={"info-tabs"}>
        <h3 className={"InfoTitle"}>EXPERIENCE THE AGS DIFFERENCE</h3>
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
            {
              slidesData.map((slides, index) => (
                  <div className={"divstyle"}>
                    <div className="d-flex justify-content-center align-items-center imgheight"
                         style={{ backgroundImage: `url(${slides.thumbnail})` }}
                    >
                      <div className="video-promo-content mt-4 ">
                        {/*<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />*/}
                        <button className="btn video-play-icon" onClick={()=> setOpen(true)}>
                          <PlayArrowIcon className={"playSize"}/>
                        </button>
                        <h5 className={"overview-heading"}>
                          {slides.title}
                        </h5>
                      </div>
                    </div>
                  </div>
              ))
            }
        </Carousel>
      </div>
  )
}
