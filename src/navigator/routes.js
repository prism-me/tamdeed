// import Home from "../pages/Home";
// import PgAdmission from "../pages/PgAdmission";

import { lazy } from 'react';
import {STRINGS} from "../utils/base";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));


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
];
