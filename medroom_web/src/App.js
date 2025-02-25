import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Header from "./ui/Header";

import "./App.css"

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
