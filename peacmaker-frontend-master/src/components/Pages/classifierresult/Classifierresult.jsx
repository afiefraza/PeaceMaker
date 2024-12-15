import React from "react";
import "./classifierresult.css";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import data from "../../../utils/data";

const Classifierresult = (props) => {
  const suggestions = data;
  const location = useLocation();
  //   console.log(classData);
  const predClass = location.state.data;
  const classImg = `classImages/${predClass}.png`;

  return (
    <div>
      <div className="classifierresult-container">
        <div className="hero-para">
          <p className="hero-para1">Inspecting audio... Finished!</p>
          <p>Noises around you are of:</p>
        </div>
        <div className="hero-type">{predClass && <h1>{predClass}</h1>}</div>
      </div>
      <div className="classifier-sectiona">
        <img src={classImg} alt={predClass} width={"250px"}></img>
      </div>
      <div className="sectiona">
        <a href="https://www.w3schools.com">
          Suggestions to reduce these noise.
        </a>
        <div>{suggestions[predClass]}</div>
      </div>
      <div className="sectionb">
        <a href="https://www.w3schools.com">
          Don’t hear what is shown? Click here
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Classifierresult;
