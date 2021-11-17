import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../assets/images/brandimg/blog.png";
import img2 from "../../../assets/images/brandimg/blog.png";
import img3 from "../../../assets/images/brandimg/blog.png";
import img4 from "../../../assets/images/brandimg/blog.png";
import img5 from "../../../assets/images/brandimg/blog.png";
export default function Blog() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const slidesData = [
        {
            Img: img1,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img2,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img3,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img4,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img5,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img1,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img2,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
        {
            Img: img3,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            date: "27-june-2021",
            button: "Read more",
        },
    ];

    return (
        <div className={"Blog"}>
            <h3 className={"BlogTitle"}>Our Blogs</h3>

            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={700}
                containerClass="carousel-container"
            >

                {
                    slidesData.map((slides, index) => (
                        <div className={"carouselmarginBlog"}>
                            <div className="card cardstyle">
                                <img src={slides.Img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text text-center ">{slides.title}</p>
                                    <div className={"d-flex justify-content-between align-items-center"}>
                                        <span className={"text-muted"}>
                                            <small>{slides.date}</small></span>
                                        <button className={"BlogBtn"}>
                                            {slides.button}<ChevronRightIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
            <center>
                <button className={"btn productBtn"}>
                    read blogs
                </button>
            </center>
        </div>
    )
}