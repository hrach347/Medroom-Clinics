import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "./App.css";
import RouteWrapper from "./library/Router";
import './i18n';

function App() {
  return (
    <div className="container">
      <Header />
      <RouteWrapper />
      <Footer />
    </div>
  );
}

export default App;
