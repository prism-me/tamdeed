import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { API } from "../../../http/API";

export default function Partners() {

    const [showAllPartners, setShowAllPartners] = useState(false);
    const [allPartners, setAllPartners] = useState([]);
    const [halfPartners, setHalfPartners] = useState(false);
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
         getAllPartners()
     },[])
    useEffect(() => {
         if(showAllPartners){
            setSlidesData(allPartners)
         }else {
            setSlidesData(halfPartners)
         }
     },[showAllPartners])


    const getAllPartners = () => {
        API.get(`/brands`, {
        }).then((response) => {
            setAllPartners(response.data.data)
            const result = response.data.data?.filter((element, index) => { return index < 8 } )
            setHalfPartners(result)
            setSlidesData(result)
        });
    } 
    // const slidesData = [
    //     {
    //         icon: partner1
    //     },
    //     {
    //         icon: partner2
    //     },
    //     {
    //         icon: partner3
    //     },
    //     {
    //         icon: partner4
    //     },
    //     {
    //         icon: partner5
    //     },
    //     {
    //         icon: partner6
    //     },
    //     {
    //         icon: partner7
    //     },
    //     {
    //         icon: partner8
    //     }
    // ];

    // const slidesData2 = [
    //     {
    //         icon: partner9
    //     },
    //     {
    //         icon: partner10
    //     },
    //     {
    //         icon: partner11
    //     },
    //     {
    //         icon: partner12
    //     },
    //     {
    //         icon: partner13
    //     },
    //     {
    //         icon: partner14
    //     },
    //     {
    //         icon: partner15
    //     },
    //     {
    //         icon: partner16
    //     }
    // ];

    return (
        slidesData &&
        <div className={"AboutPartners"}>
            <Container>
                <Row>
                    <Col sm={2} className={"d-flex justify-content-center align-items-center"}>
                        <h3 className={"Title"}> Partners</h3>
                    </Col>
                    <Col sm>
                        <Row className={"mb-3"}>
                            {
                                slidesData && slidesData?.map((slides, index) => (
                                    <Col sm={3} xs={6} md={3} lg={3} className={"colmblspace partnerLogoDiv"} key={index}>
                                        <img src={slides.avatar} alt="brand" className={"img-fluid mblImg partnerLogoImg"} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                {false && showAllPartners &&
                <Row>
                    <Col sm={2} className={"d-flex justify-content-center align-items-center"}>
                        <h3 className={"Title"}></h3>
                    </Col>
                    <Col sm>
                        <Row className={"mb-3"}>
                            {
                                slidesData?.map((slides, index) => (
                                    <Col sm={3} xs={6} md={3} lg={3} className={"colmblspace partnerLogoDiv"} key={index}>
                                        <img src={slides.icon} alt="brand" className={"img-fluid mblImg partnerLogoImg"} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
                }
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btnStyle" onClick={() => setShowAllPartners(!showAllPartners)}> {showAllPartners ? "See Less" : "See All"} <ChevronRightIcon /></button>
                </div>
            </Container>
        </div>
    )
}