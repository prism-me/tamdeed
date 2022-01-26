import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import img1 from "../../../assets/images/reference-projects/pr1.png"
import img2 from "../../../assets/images/reference-projects/pr2.png"
import img3 from "../../../assets/images/reference-projects/pr3.png"
import img4 from "../../../assets/images/reference-projects/pr4.png"
import img5 from "../../../assets/images/reference-projects/pr5.png"
import img6 from "../../../assets/images/reference-projects/pr6.png"
import img7 from "../../../assets/images/reference-projects/pr7.png"
import img8 from "../../../assets/images/reference-projects/pr8.png"
import img9 from "../../../assets/images/reference-projects/pr9.png"
import img10 from "../../../assets/images/reference-projects/pr10.png"
import img11 from "../../../assets/images/reference-projects/pr11.png"
import img12 from "../../../assets/images/reference-projects/pr12.png"
import img13 from "../../../assets/images/reference-projects/pr13.png"
import img14 from "../../../assets/images/reference-projects/pr14.png"
import { API } from "../../../http/API";

export default function ReferenceProjects() {

    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        getSlidesData() 
     },[])

     const getSlidesData = () => {
        API.get(`/projects`, {
          }).then((response) => {
              setSlidesData(response.data.data)
          });
     }

    // const slidesData = [
    //     {
    //         icon: img1,
    //         title: "Etisalalt"
    //     },
    //     {
    //         icon: img2,
    //         title: "Ministry of Finance"
    //     },
    //     {
    //         icon: img3,
    //         title: "Ministry of Health"
    //     },
    //     {
    //         icon: img4,
    //         title: "Aldar"
    //     },
    //     {
    //         icon: img5,
    //         title: "Ministry of Interior"
    //     },
    //     {
    //         icon: img6,
    //         title: "Abu Dhabi Police"
    //     },
    //     {
    //         icon: img7,
    //         title: "UAE Armed Forces"
    //     },
    //     {
    //         icon: img8,
    //         title: "Dubai Poice"
    //     },
    //     {
    //         icon: img9,
    //         title: "Abu Dhabi Education Council"
    //     },
    //     {
    //         icon: img10,
    //         title: "Ministry of Infrastructure and Energy"
    //     },
    //     {
    //         icon: img11,
    //         title: "ADIA"
    //     },
    //     {
    //         icon: img12,
    //         title: "Abu Dhabi City Municipality"
    //     },
    //     {
    //         icon: img13,
    //         title: "Nakheel"
    //     },
    //     {
    //         icon: img14,
    //         title: "Abu Dhabi Water & Electricity Authority"
    //     },
    // ];

    return (
        <div className={"reference-projects"}>
            <Container>
                <h3 className={"title"}>
                    Reference Projects
                </h3>
                <Row className="justify-content-center">
                    {
                        slidesData.map((slides, index) => (
                            <Col sm={4} xs={6} md={3} lg={2} key={index} className={"mb-3"}>
                                <Row>
                                    <Col sm={12} className="d-flex justify-content-center align-items-center" >
                                        <img src={slides.avatar} alt={slides.alt_tag} className={"iconImg img-fluid"} />
                                    </Col>
                                    <Col sm={12}>
                                        <p className="subtitle">
                                            {slides.name}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}