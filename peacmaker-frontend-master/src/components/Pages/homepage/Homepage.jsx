import React from "react";
import Header from "../header/Header";
import "./homepage.css";
import Herobannerforhomepage from "../herobanner/Herobannerforhomepage";
import download from "../../pictures/frontpic.jpg";
import Footer from "../footer/Footer";
import Signup from "../signup/Signup";
import { Link } from "react-router-dom";
import Whyus from "../whyus/Whyus";
import Noiseclassifier from "../noiseclassifier/Noiseclassifier";
import Difficulties from "../difficulties/Difficulties";
const Homepage = () => {
  return (
    <div>
      <div className="home">
        <Header />
        <Herobannerforhomepage
          title={"Welcome to Peacemaker"}
          text={"A right for everyone "}
          img={download}
        />
      </div>
      <div>
        <Whyus
          main={"Noise Canceller"}
          title={"Our State of art noise canceller"}
          text={
            "Noise is very unpleasant and irritating like traffic noise, construction noise fan noise and it can lead to many diseases like high blood pressure heart disease sleeping disorder and stress"
          }
        />
      </div>

      <div>
        <Noiseclassifier
          main={"Noise Classifier"}
          title={"Our State of art noise classifier"}
          text={
            "Noise is very unpleasant and irritating like traffic noise, construction noise fan noise and it can lead to many diseases like high blood pressure heart disease sleeping disorder and stress"
          }
        />
      </div>
      <div className="home-about">
        <Difficulties text={"About Us"} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
