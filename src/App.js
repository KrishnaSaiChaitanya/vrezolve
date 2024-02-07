import logo from "./logo.svg";
import "./App.css";
import "./styles/animation.css";
// import { AlertZ } from "./components/test";

import AlertzHero from "./components/hero/AlertzHero";
import RewardzHero from "./components/hero/RewardzHero";
import HomeHero from "./components/hero/HomeHero";
import Section from "./components/Section";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisputszHero from "./pages/Disputsz";
import MyComponent from "./components/New";
import Complete from "./components/home/Complete";

function App() {
  return (
    <div className="App">
      {/* <MyComponent /> */}
      <Complete />
      {/* <Section /> */}
      {/* <Home /> */}
      {/* <Disputsz /> */}
      {/* <HomeHero /> */}
      {/* <RewardzHero />
      <AlertzHero /> */}
      {/* <PlatformFeatures />
      <EnhancedSecurityComponent /> */}
      {/* <LogoSlider /> */}
      {/* <AlertZ /> */}
      {/* <LandingPage />
      <TransactionComponent />
      <ExpertConsultation /> */}
      {/* <Footer /> */}
      {/* <Router>
        <LoginNavbar />
        <Routes>
          <Route exact path="/" element={<HomeHero />}></Route>
          <Route exact path="/alertz" element={<AlertzHero />}></Route>
          <Route exact path="/rewardz" element={<RewardzHero />}></Route>
          <Route exact path="/disputz" element={<DisputszHero />}></Route>
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
