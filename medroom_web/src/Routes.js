import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Staff from "./pages/Staff";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Staff",
    element: <Staff />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <About />,
  },
];

export default routes;
