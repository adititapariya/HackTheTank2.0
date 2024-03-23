import React from "react";
import { useState, useEffect } from "react";
import hero from "../../assets/hero.jpg";
import "./Home.css";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Home = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (windowDimensions.width < 600) {
      console.log("mobile view");
      setIsMobile(true);
    }
  }, []);
  const [loading, setLoading] = useState(false);

  return (
    <div className="home">
      <div>
        <img src={hero} alt="jcomp" className="heroimg" />

        <div className="homelanding">
          <h1>SAS:Fat to Slim</h1>
        </div>
      </div>
      <div className="section2">
        <div className="aboutus">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="3waydivision">
          <div className="divi1"></div>
          <div className="divi2"></div>
          <div className="divi3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
