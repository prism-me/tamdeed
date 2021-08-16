// import Home from "../pages/Home";
// import PgAdmission from "../pages/PgAdmission";

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));


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
];
