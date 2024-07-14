import logo from "./logo.svg";
import "./App.css";
import { Home, Category, News } from "./pages";

// import { Category } from "./pages/category";

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useOwlCarousel from "./common/hooks/useOwlCarousel";
import Footer from "./common/components/footer";
import Topbar from "./common/components/topbar";
import Navbar from "./common/components/navbar";

function App() {
  useOwlCarousel();

  return (
    <div className="App">
      <Topbar />
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
