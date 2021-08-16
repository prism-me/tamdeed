import React, {useState} from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mentor from "../../../assets/images/agsMentors/mentor.png";
import mentor4 from "../../../assets/images/agsMentors/mentor2.png";
import mentor2 from "../../../assets/images/agsMentors/mentor3.png";
import mentor3 from "../../../assets/images/agsMentors/mentor4.png";

export default function Mentors() {
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
            thumbnail: mentor,
            title: "Aliquam fringilla",
            Subtitle: "Adipiscing at sem",
        },
        {
            thumbnail: mentor2,
            title: "Commodo aliquam",
            Subtitle: "Nunc eu massa",
        },
        {
            thumbnail: mentor3,
            title: "Neque eu",
            Subtitle: "Dapibus tellus eros",
        },
        {
            thumbnail: mentor4,
            title: "Commodo male",
            Subtitle: "Aliquet nec nunc",
        },
        {
            thumbnail: mentor2,
            title: "Mi amet",
            Subtitle: "Nibh varius vestibulum",
        },
        {
            thumbnail: mentor3,
            title: "Commodo aliquam",
            Subtitle: "Nunc eu massa",
        },
    ];
    const [isOpen, setOpen] = useState(false)
    return(
        <div className={"Mentors"}>
            <h3 className={"InfoTitle"}>MEET THE MENTORS</h3>
            <Carousel
                responsive={responsive}
                // centerMode={true}
                swipeable={false}
                draggable={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={700}
                arrows={false}
                containerClass="carousel-container"
            >
                {
                    slidesData.map((slides, index) => (
                        <div className={"mx-2 divstyle"}>
                            <div className="imgheight"
                                 style={{ backgroundImage: `url(${slides.thumbnail})` }}
                            >
                                    <h5 className={"overview-heading"}>
                                        {slides.title}
                                    </h5>
                                <p className={"subTitle"}>
                                    {slides.Subtitle}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
            <div className={"d-flex justify-content-center align-items-center mt-3"}>
                <div className="custom-slider">
                    <input
                        type="range"
                        // value={Math.round(Math.abs(transform) / value)}
                        defaultValue={0}
                        // max={
                        //   (carouselItemWidth *
                        //       (carouselState.totalItems - carouselState.slidesToShow) +
                        //       (this.state.additionalTransfrom === 150 ? 0 : 150)) /
                        //   value
                        // }
                        // onChange={e => {
                        //   if (this.Carousel.isAnimationAllowed) {
                        //     this.Carousel.isAnimationAllowed = false;
                        //   }
                        //   const nextTransform = e.target.value * value;
                        //   const nextSlide = Math.round(nextTransform / carouselItemWidth);
                        //   if (
                        //       e.target.value == 0 &&
                        //       this.state.additionalTransfrom === 150
                        //   ) {
                        //     this.Carousel.isAnimationAllowed = true;
                        //     this.setState({ additionalTransfrom: 0 });
                        //   }
                        //   this.Carousel.setState({
                        //     transform: -nextTransform, // padding 20px and 5 items.
                        //     currentSlide: nextSlide
                        //   });
                        // }}
                    />
                </div>
            </div>
        </div>
    )
}
