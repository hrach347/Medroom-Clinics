import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Services = lazy(() => import("../../pages/Services"));
const Contact = lazy(() => import("../../pages/Contact"));
const staff = lazy(() => import("../../pages/Staff"));
const More = lazy(() => import("../../pages/More"));

const routeList = [
  {
    element: Home,
    path: "/",
  },
  {
    element: About,
    path: "/About",
  },
  {
    element: Services,
    path: "/Services",
  },
  {
    element: staff,
    path: "/Staff",
  },
  {
    element: Contact,
    path: "/Contact",
  },
  {
    element: More,
    path: "/Services/:slug",
  },
];

export default routeList;
