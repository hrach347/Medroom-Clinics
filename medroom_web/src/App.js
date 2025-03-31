import { Route, Routes } from "react-router";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import routes from "./Routes.js";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
