import React, { Component } from "react";
import Banner from "../sections/solution-service/ss-banner/SolutionServiceBanner";
import ManagedService from "../sections/solution-service/managed-service/ManagedService";
import TelecomNetworking from "../sections/solution-service/telecom-networking/TelecomNetworking";
import SolutionPillars from "../sections/solution-service/solution-pillars/SolutionPillars";
import DataCenter from "../sections/solution-service/data-center/DataCenter";
import TamdeedService from "../sections/solution-service/tamdeed-service/TamdeedService";
import { API } from "../../src/http/API";

class SolutionService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getAllServicesAndSols();
  }

  getAllServicesAndSols = () => {
    API.get(`/solutions`)
      .then((response) => {
        // debugger;
        if (response.status === 200 || response.status === 201) {
          const dataCenter = response.data.data?.filter(
            (element) => element.type === "solutions"
            // if (2 < index && index < 7) { return true } return false;
          );
          //   const dataCenterSingle = response.data.data[1];
          const dataCenterSingle = dataCenter[1];
          const services = response.data.data?.filter(
            (element) => element.type === "services"
          );
          this.setState({
            solutions: response.data.data?.filter(
              (element) => element.type === "solutions"
            ),
            dataCenter,
            services,
            dataCenterSingle,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Banner />
        <SolutionPillars />
        <ManagedService
          managedService={
            this.state.solutions && this.state.solutions.length > 0
              ? this.state.solutions[0]
              : ""
          }
        />
        <TelecomNetworking
          telecomNetworking={
            this.state.solutions && this.state.solutions.length > 0
              ? this.state.solutions[4]
              : ""
          }
        />
        <DataCenter
          dataCenter={
            this.state.dataCenter && this.state.dataCenter.length > 0
              ? this.state.dataCenter
              : []
          }
          dataCenterSingle={
            this.state.dataCenterSingle ? this.state.dataCenterSingle : ""
          }
        />
        <TamdeedService
          services={
            this.state.services && this.state.services.length > 0
              ? this.state.services
              : []
          }
        />
      </div>
    );
  }
}

export default SolutionService;
