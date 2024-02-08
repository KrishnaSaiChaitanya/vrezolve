import logo from "./logo.svg";
import "./App.css";
import "./styles/animation.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LoginNavbar from "./components/LoginNavbar";
import Footer from "./components/Footer";
import AlertzHero from "./components/hero/AlertzHero";
import RewardzHero from "./components/hero/RewardzHero";
import Alertz from "./pages/Alertz";

function App() {
  useEffect(() => {
    function checkVisibility() {
      var elements = document.querySelectorAll(".animation_container .anm_mod");
      for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = elements[i].getBoundingClientRect().top;
        var offset = 140;

        if (elementTop < windowHeight - offset) {
          elements[i].classList.add("active");
        } else {
          elements[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <LoginNavbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/alertz" element={<Alertz />}></Route>
          <Route exact path="/rewardz" element={<RewardzHero />}></Route>
          {/* <Route exact path="/disputz" element={<DisputszHero />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
