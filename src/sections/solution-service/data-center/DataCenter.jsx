import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dc1 from "../../../assets/images/solutionservice/dc1.png"
import security from "../../../assets/images/solutionservice/security.png"
import elv from "../../../assets/images/solutionservice/elv.png"
import ti from "../../../assets/images/solutionservice/ti.png"
import ind from "../../../assets/images/solutionservice/ind.png"

export default function DataCenter() {

    const slidesData = [
        {
            icon: security,
            title: "Security",
            subtitle: "We provide security solutions that is adaptive, context-aware, and synchronized.",
            items: [
                { list: "IT Security" },
                { list: "OT Security" },
                { list: "Identity & access" },
                { list: "Perimeter Security" },
                { list: "Data Protection" },
                { list: "Security Intelligence" },
                { list: "Event Control" },
                { list: "Network Segregation" }
            ]
        },
        {
            icon: elv,
            title: "ELV Systems",
            subtitle: "Where connectivity, security and access fits in",
            items: [
                { list: "Video Surveillance" },
                { list: "Access Control" },
                { list: "Audio Visual" },
                { list: "Fire Protection Smart" },
                { list: "Systems" },
                { list: "Tv Distribution" },
                { list: "Video Signage" },
                { list: "Perimeter intrusion" },
                { list: "Public Address" },
                { list: "Structured Cabling" }
            ]
        },
        {
            icon: ti,
            title: "Telecom Infrastructure",
            subtitle: "Industry leading Telecom Infrastructure Services",
            items: [
                { list: "Outside Plant (OSP)" },
                { list: "Inside Plant (ISP)" },
                { list: "IBS-in Building Solutions (4G/5G/Wifi" },
                { list: "Civil & MEP Works" },
                { list: "Mobile Sites Turnkey Projects" },
                { list: "Racking, stacking & Patching" }
            ]
        },
        {
            icon: ind,
            title: "Industries",
            subtitle: "Profound Experts in Vertical Industries",
            items: [
                { list: "Telecom" },
                { list: "Government and Semi government" },
                { list: "Utility & Energy" },
                { list: "Private & Commercial" },
                { list: "Hotels, Malls & Constructions" },
                { list: "Transportation" }
            ]
        }
    ];

    return (
        <div className={"data-center"}>
            <div className="mngBgDiv">
                <Container>
                    <h3 className={"datasubtitle"}>
                        Data Center
                    </h3>
                    <p className={"dataTitle"}>
                        Solutions for Data Center Modernization
                    </p>
                    <Row>
                        <Col sm={7}>
                            <p className="subtitle">
                                Tamdeed Projects has partnered with the most advanced technology vendors, including Huawei, HPE, Cisco and many others. No matter your legacy system is, Tamdeed Projects can implement reliable, scalable infrastructure and Datacenter solutions that will Drive Business Innovation and Scaling with your needs
                            </p>
                            <ul className="subtitle">
                                <li>Servers & Storage</li>
                                <li>Converged Infrastructure</li>
                                <li>Cloud Infrastructure</li>
                                <li>Software Defined Solutions</li>
                                <li>AI Architectures</li>
                                <li>Analytics & Insights</li>
                                <li>Enterprise Management</li>
                            </ul>
                        </Col>
                        <Col sm={5}>
                            <img src={dc1} alt="img" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mngBgDiv2">
                <Container>
                    <Row>
                        {
                            slidesData.map((slides, index) => (
                                <Col sm={6} key={index} className={"mb-4"}>
                                    <h3 className={"datasubtitle"}>
                                        {slides.title}
                                    </h3>
                                    <p className={"dataTitle"}>
                                        {slides.subtitle}
                                    </p>
                                    <Row>
                                        <Col sm={12} className="d-flex justify-content-center align-items-center">
                                            <img src={slides.icon} alt="img" className="img-fluid mgImg" />
                                        </Col>
                                        <Col sm={12} className="d-flex flex-column justify-content-center align-items-start">
                                            <ul className="subtitle">
                                                {
                                                    slides.items?.map((x) => (
                                                        <li>{x.list}</li>
                                                    )
                                                    )
                                                }
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}