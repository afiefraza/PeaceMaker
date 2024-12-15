import React from "react";
import "./whyus.css";


const Whyus = (props) => {
  return (
    <div className="whyus__container">
      <div className="whyus__header">
        <h3>{props.main}</h3>
      </div>
      <div className="whyus__content">
        <div className="whyus__content-text">
          <h1>{props.title}</h1>
          <p>
           {props.text}
          </p>
        </div>

        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default Whyus;
