import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap"
import img1 from "../../../assets/images/aboutImages/businesssUnits/bu1.png"
import img2 from "../../../assets/images/aboutImages/businesssUnits/bu2.png"
import img3 from "../../../assets/images/aboutImages/businesssUnits/bu3.png"
import img4 from "../../../assets/images/aboutImages/businesssUnits/bu4.png"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { API } from "../../../http/API";


const Bunits = (props) => {
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        getAllPartners()
    },[])
    
    const getAllPartners = () => {
        API.get(`/teams`, {
        }).then((response) => {
            const result = response.data.data?.filter((element, index) => { return element.designation == "Company Head" } )
            setSlidesData(result)
        });
    }


    // const slidesData = [
    //     {
    //         icon: img1,
    //         title: "Faisal Al Mula",
    //         subtitle: "VP / OSP & ISP Operations"
    //     },
    //     {
    //         icon: img2,
    //         title: "Abdurrahman Najjar",
    //         subtitle: "VP / Sales & Portfolio – ICT & Telecom"
    //     },
    //     {
    //         icon: img3,
    //         title: "Mohamad Alasali",
    //         subtitle: "Director / Professional Services & Project Management – IBS & MNP Operations"
    //     },
    //     {
    //         icon: img4,
    //         title: "Oladipo Badru",
    //         subtitle: "Director / Finance"
    //     }
    // ];
    return (
        slidesData &&
        <div className="bunits">
            <p className={"title"}>
                Company Heads
            </p>
            <h3 className={"subtitle"}>
                Business Units
            </h3>
            <div className={"aboutBg"}>
                <Container>
                    <Row>
                        {
                            slidesData.map((slides, index) => (
                                <Col sm={12} md={6} lg={3} key={index}>
                                    <div className="card cardstyle">
                                        <Card.Img varient={"top"} className={"imgStyle"} src={slides.avatar}></Card.Img>
                                        <div className="card-body">
                                            <h3 className="cardTitle">
                                                {slides.name}
                                            </h3>
                                            <p className="cardSubtitle aboutCompanyHeadCard">
                                                {slides.description}
                                            </p>
                                            <hr className="hrStyle" />
                                            <div className="d-flex justify-content-around align-items-center">
                                                <a href={slides.fb_link} className='iconStyle'> <Facebook /> </a>
                                                <a href={slides.twiter_link} className='iconStyle'> <TwitterIcon /> </a>
                                                <a href={slides.linkedin_link} className='iconStyle'> <LinkedInIcon /> </a>
                                                <a href={slides.insta_link} className='iconStyle'> <InstagramIcon /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div >
    )
}
export default Bunits;