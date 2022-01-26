import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap"
import { API } from "../../../http/API";


const Gtm = (props) => {

    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        getAllPartners()
    },[])
    
    const getAllPartners = () => {
        API.get(`/teams`, {
        }).then((response) => {
            const result = response.data.data?.filter((element, index) => { return element.designation == "Sales Force GTM" } )
            setSlidesData(result)
        });
    }

    // const slidesData = [
    //     {
    //         icon: img1,
    //         title: "Saber Kamel",
    //         subtitle: "Client Director – Service Provider"
    //     },
    //     {
    //         icon: img2,
    //         title: "Saber Kamel",
    //         subtitle: "Client Director – Abu Dhabi Government"
    //     },
    //     {
    //         icon: img3,
    //         title: "Saber Kamel",
    //         subtitle: "Dubai & Northern Emirates Government"
    //     },
    //     {
    //         icon: img4,
    //         title: "Saber Kamel",
    //         subtitle: "Energy & Utilities"
    //     },
    //     {
    //         icon: img5,
    //         title: "Saber Kamel",
    //         subtitle: "FSI & Commercial"
    //     },
    //     {
    //         icon: img6,
    //         title: "Saber Kamel",
    //         subtitle: "Hospitality, Construction & MEP"
    //     }
    // ];
    return (
        slidesData &&
        <div className="sales-gtm">
            <Container>
                <h3 className={"title"}>
                    Sales Force GTM
                </h3>
                <Row>
                    {
                        slidesData.map((slides, index) => (
                            <Col sm md={3} lg={2} key={index}>
                                <div className="card cardstyle">
                                    <Card.Img varient={"top"} className={"imgStyle"} src={slides.avatar}></Card.Img>
                                    <div className="card-body">
                                        <h3 className="cardTitle">
                                            {slides.name}
                                        </h3>
                                        <p className="cardSubtitle">
                                            {slides.description}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div >
    )
}
export default Gtm;