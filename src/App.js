import logo from "./logo.svg";
import "./App.css";
import { Home, Category, News } from "./pages";

// import { Category } from "./pages/category";

import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
