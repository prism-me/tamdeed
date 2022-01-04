import React, { Component } from "react";
import Banner from "../sections/solution-service/ss-banner/SolutionServiceBanner";
import ManagedService from "../sections/solution-service/managed-service/ManagedService";
import TelecomNetworking from "../sections/solution-service/telecom-networking/TelecomNetworking";
import SolutionPillars from "../sections/solution-service/solution-pillars/SolutionPillars";
import DataCenter from "../sections/solution-service/data-center/DataCenter";
import TamdeedService from "../sections/solution-service/tamdeed-service/TamdeedService"

class SolutionService extends Component {
    render() {
        return (
            <div>
                <Banner />
                <SolutionPillars />
                <ManagedService />
                <TelecomNetworking />
                <DataCenter />
                <TamdeedService />
            </div>
        );
    }
}

export default SolutionService;