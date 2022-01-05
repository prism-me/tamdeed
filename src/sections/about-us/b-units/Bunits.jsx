import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap"
import img1 from "../../../assets/images/aboutImages/businesssUnits/bu1.png"
import img2 from "../../../assets/images/aboutImages/businesssUnits/bu2.png"
import img3 from "../../../assets/images/aboutImages/businesssUnits/bu3.png"
import img4 from "../../../assets/images/aboutImages/businesssUnits/bu4.png"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Bunits = (props) => {
    const slidesData = [
        {
            icon: img1,
            title: "Faisal Al Mula",
            subtitle: "VP / OSP & ISP Operations"
        },
        {
            icon: img2,
            title: "Abdurrahman Najjar",
            subtitle: "VP / Sales & Portfolio – ICT & Telecom"
        },
        {
            icon: img3,
            title: "Mohamad Alasali",
            subtitle: "Director / Professional Services & Project Management – IBS & MNP Operations"
        },
        {
            icon: img4,
            title: "Oladipo Badru",
            subtitle: "Director / Finance"
        }
    ];
    return (
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
                                <Col sm md={6} lg={3} key={index}>
                                    <div className="card cardstyle">
                                        <Card.Img varient={"top"} className={"imgStyle"} src={slides.icon}></Card.Img>
                                        <div className="card-body">
                                            <h3 className="cardTitle">
                                                {slides.title}
                                            </h3>
                                            <p className="cardSubtitle">
                                                {slides.subtitle}
                                            </p>
                                            <hr className="hrStyle" />
                                            <div className="d-flex justify-content-around align-items-center">
                                                <a href="#" className='iconStyle'> <Facebook /> </a>
                                                <a href="#" className='iconStyle'> <TwitterIcon /> </a>
                                                <a href="#" className='iconStyle'> <LinkedInIcon /> </a>
                                                <a href="#" className='iconStyle'> <InstagramIcon /> </a>
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