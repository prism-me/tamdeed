import HomePage from "../pages/HomePage"
import About from "../pages/About"

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
];
