import UserLandingPage from "../pages/UserLandingPage";
import VendorLandingPage from "../pages/VendorLandingPage";
import DeliveryPartnerLandingPage from "../pages/DeliveryPartnerLandingPage";
import BrandLandingPage from "../pages/BrandLandingPage";
import InfluencerLandingPage from "../pages/InfluencerLandingPage";

export const routes = [
  {
    name: "UserLandingPage",
    path: "/",
    component: UserLandingPage,
    isPrivate: false,
    exact: true,
  },
  {
    name: "VendorLandingPage",
    path: "/vendors",
    component: VendorLandingPage,
    isPrivate: false,
    exact: true,
  },
  {
    name: "DeliveryPartnerLandingPage",
    path: "/delivery-partners",
    component: DeliveryPartnerLandingPage,
    isPrivate: false,
    exact: true,
  },
  {
    name: "BrandLandingPage",
    path: "/brands",
    component: BrandLandingPage,
    isPrivate: false,
    exact: true,
  },
  {
    name: "InfluencerLandingPage",
    path: "/influencers",
    component: InfluencerLandingPage,
    isPrivate: false,
    exact: true,
  },
];
