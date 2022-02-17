import HomePage from "../pages/HomePage"
import About from "../pages/About"
import Careers from "../pages/Careers"
import ContactUs from "../pages/ContactUs"
import Industries from "../pages/Industries"
import MediaCenter from "../pages/MediaCenter"
import MediaInner from "../pages/MediaInner"
import Insights from "../pages/Insights"
import SolutionService from "../pages/SolutionService"
import Copyright from "../pages/Copyright"

export const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
    isPrivate: false,
    exact: true,
  },
  {
    name: "About",
    path: "/about",
    component: About,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Careers",
    path: "/career",
    component: Careers,
    isPrivate: false,
    exact: true,
  },
  {
    name: "ContactUs",
    path: "/contact",
    component: ContactUs,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Industries",
    path: "/industries",
    component: Industries,
    isPrivate: false,
    exact: true,
  },
  {
    name: "MediaCenter",
    path: "/media-center",
    component: MediaCenter,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Insights",
    path: "/insights",
    component: Insights,
    isPrivate: false,
    exact: true,
  },
  {
    name: "SolutionService",
    path: "/solution-service",
    component: SolutionService,
    isPrivate: false,
    exact: true,
  },
  {
    name: "MediaInner",
    path: "/media-center/:slug",
    component: MediaInner,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Copyright",
    path: "/copyright",
    component: Copyright,
    isPrivate: false,
    exact: true,
  }
];
