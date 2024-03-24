import React from "react";
import { useState, useEffect } from "react";
import hero from "../../assets/hero.jpg";
import spices from "../../assets/spices.jpg";
import greenbg from "../../assets/greenbg.jpg";
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
      <div className="section2main">
        <div className="sec2head">
          <h2>Why Choose Us??</h2>
          <h1>A joyful investment in your body, mind and spirit</h1>
        </div>
        <div className="section2">
          <div className="sec2img">
            <img src={spices} alt="vecstock" />
          </div>
          <div className="sec2text">
            <h4>India's best dietician and health expert clinic.</h4>
            <h1>Welcome To SAS FAT TO SLIM</h1>
            <p>
              We have a client base across the globe. Our diet is completely
              different from all other dietitians. The diet is more about Indian
              food and not at all about Brown Bread, Brown Rice or those fancy
              Salads The concept of ‘Eat & Sleep’ is a revolutionary concept, we
              believe in putting nutrients in the body rather than starving
              people out of food. We make our clients to lose up to 7 kgs and 4
              inches from various part of their body within one month, without
              exercises and without making them starve. Also, the diet has
              helped clients in controlling their diabetes. The diet containing
              nutrients rich food makes the clients energetic and fresh, unlike
              other dieticians who drain out energy by stopping food and
              starving people. It is recognized for the pioneering & innovative
              work in the field of Obesity Control & Management with particular
              emphasis to developing new and effective ways & programs to combat
              Obesity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
