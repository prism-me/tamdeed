// import Home from "../pages/Home";
// import PgAdmission from "../pages/PgAdmission";

import { lazy } from 'react';
import { STRINGS } from "../utils/base";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Academics = lazy(() => import('../pages/Academics'));
const AgsPortal = lazy(() => import('../pages/AGSPortal'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const StudentCare = lazy(() => import('../pages/StudentCare'));
const MiddleSchool = lazy(() => import('../pages/MiddleSchool'));
const KinderGarten = lazy(() => import('../pages/KinderGarten'));
const Enroll = lazy(() => import('../pages/Enroll'));
const FAQMain = lazy(() => import('../pages/FAQMain'));
const OnlineForm = lazy(() => import('../pages/OnlineForm'));
const careers = lazy(() => import('../pages/Careers'));
const Primaryschool = lazy(() => import('../pages/Primaryschool'));


export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Home",
    path: "/AGS",
    component: Home,
    isPrivate: false,
    exact: true,
  },
  {
    name: "About",
    path: `${STRINGS.ROUTES.ABOUT_US}`,
    component: About,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Academics",
    path: `${STRINGS.ROUTES.ACADEMICS}`,
    component: Academics,
    isPrivate: false,
    exact: true,
  },
  {
    name: "AgsPortal",
    path: `${STRINGS.ROUTES.AGS_PORTAL}`,
    component: AgsPortal,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Contact",
    path: `${STRINGS.ROUTES.CONTACT_US}`,
    component: ContactUs,
    isPrivate: false,
    exact: true,
  },
  {
    name: "StudentCare",
    path: `${STRINGS.ROUTES.STUDENT_CARE}`,
    component: StudentCare,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Enroll",
    path: `${STRINGS.ROUTES.ENROLL}`,
    component: Enroll,
    isPrivate: false,
    exact: true,
  },
  {
    name: "FAQ",
    path: `${STRINGS.ROUTES.FAQ}`,
    component: FAQMain,
    isPrivate: false,
    exact: true,
  },
  {
    name: "OnlineForm",
    path: `${STRINGS.ROUTES.ONLINE_FORM}`,
    component: OnlineForm,
    isPrivate: false,
    exact: true,
  },
  {
    name: "careers",
    path: `${STRINGS.ROUTES.CAREERS}`,
    component: careers,
    isPrivate: false,
    exact: true,
  },
  {
    name: "MiddleSchool",
    path: `${STRINGS.ROUTES.MIDDLE_SCHOOL}`,
    component: MiddleSchool,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Primary-school",
    path: `${STRINGS.ROUTES.PRIMARYSCHOOL}`,
    component: Primaryschool,
    isPrivate: false,
    exact: true,
  },
  {
    name: "KinderGarten",
    path: `${STRINGS.ROUTES.KINDERGARTEN}`,
    component: KinderGarten,
    isPrivate: false,
    exact: true,
  },
];
