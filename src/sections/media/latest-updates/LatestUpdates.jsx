import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import img1 from "../../../assets/images/mediaImages/latest-updates/lup1.png"
import img2 from "../../../assets/images/mediaImages/latest-updates/lup2.png"
import img3 from "../../../assets/images/mediaImages/latest-updates/lup3.png"
import img4 from "../../../assets/images/mediaImages/latest-updates/lup4.png"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Pagination from '@material-ui/lab/Pagination';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { API } from "../../../http/API";
import { useHistory } from "react-router-dom";


export default function LatestUpdates() {
    const history = useHistory();
    const [latetUpdates, setLatetUpdates] = useState({data:[],currentPage:0,lastPage:0});

    useEffect(() => {
        getAllMedia()
    },[])

    const getAllMedia = () => {
        API.get(`/media-type/Latest Updates`, {
        }).then((response) => {
            let data = {...response?.data?.message}
            setLatetUpdates( { ...latetUpdates, data:data?.data, currentPage: data?.current_page, lastPage: data?.last_page } )

        });
    }
    
    const getMedia = (type, page) => {

        API.get(`/media-type/${type}?page=${page}`, {
        }).then((response) => {
            let data = {...response?.data?.message}
            setLatetUpdates( { ...latetUpdates, data:data?.data, currentPage: data?.current_page, lastPage: data?.last_page } )

        });
    }

    const slidesData = [
        {
            icon: img1,
            title: "Today, 2021",
            subtitle: "Tamdeed Projects an Etisalat Services Holding company and Huawei, have announced a strategic partnership on the development of cloud-managed network services."
        },
        {
            icon: img2,
            title: "Today, 2021",
            subtitle: "Tamdeed Projects, an Etisalat Services Holding company – part of Etisalat Group and Xerox has signed an MOU during Gitex Global 2021 for Partnership in Workplace Solutions and Managed Services."
        },
        {
            icon: img3,
            title: "Today, 2021",
            subtitle: "Tareq Salman, General Manager at Tamdeed Projects / Etisalat and our very own Sean Collins signing the MoU agreement for wired and wireless LAN access infrastructure and cloud managed networking partnership at GITEX Technology Week this morning!"
        }
    ];

    const handlePageChange = (type, page) => {
        getMedia(type, page)
    }

    return (
        <div className={"latestUpdates"}>
            <Container>
                <h3 className={"title"}>
                    Latest Updates
                </h3>
                <Row>
                    <Col lg={7} md={12} sm={12}>
                        {
                            latetUpdates?.data?.map((slides, index) => {
                                // if(index < 3){
                                    return (
                                        <Row key={index} className={"mb-3 bg-color"} onClick={() => history.push(`/media-center/${slides.slug}`)} style={{cursor:"pointer"}}>
                                            <Col sm={"auto"} className="d-flex justify-content-center align-items-center">
                                                <img src={slides.img} alt="solution" className={"iconImg img-fluid latestUpdateImg"} />
                                            </Col>
                                            <Col sm>
                                                <p className="latestUpdateTitle">
                                                    {"Today, 2021"}
                                                </p>
                                                <p className="subtitle">
                                                    {slides.short_description}
                                                </p>
                                            </Col>
                                        </Row>
                                    )
                                // }
                            })
                        }
                    </Col>
                    {latetUpdates?.data.length == 4 && 
                        <Col lg={5} md={12} sm={12} className="rightCard">
                            <Card className={"border-0"}>
                                <Card.Img variant="top" src={latetUpdates?.data[3]?.img} />
                                <Card.Body className={"bg-color2"}>
                                    <p className="latestUpdateTitle">
                                        Today, 2021
                                    </p>
                                    <p className="subtitle">
                                        {latetUpdates?.data[3]?.short_description}
                                        {/* Tamdeed Projects, an Etisalat Services Holding company – part of Etisalat Group and StarLink - Trusted Cyber & Cloud Advisor, have entered a strategic alliance to collaborate in the Intelligent Automation, Cyber, Cloud and Degital Edge domains by signing an MoU at GITEX Global 2021 */}
                                    </p>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <button className="btnStyle" onClick={() => history.push(`/media-center/${latetUpdates?.data[3]?.slug}`)} style={{cursor:"pointer"}}>Read More<ChevronRightIcon /></button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                </Row>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    {/* <Pagination count={5} /> */}
                    <Stack spacing={2}>
                        <Pagination
                            count={latetUpdates.lastPage}
                            page={latetUpdates.currentPage}
                            onChange={(e,value) => handlePageChange("Latest Updates",value)}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </div>
            </Container>
        </div>
    )
}