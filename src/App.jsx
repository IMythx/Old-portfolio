import { Route, Routes } from "react-router-dom";
import Cursor from "./components/UI/cursor/cursor";
import useQuery from "./hooks/mediaQueries";
import Navigation from "./components/UI/MainNavigation/MainNavigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
const App = () => {
  const { isTablet, isMobile } = useQuery();
  return (
    <div className="App">
      {!isTablet && <Cursor />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
