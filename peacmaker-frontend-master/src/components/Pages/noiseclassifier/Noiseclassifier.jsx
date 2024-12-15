import React from "react";
import "./noiseclassifier.css";
import useGetFetch from "../../../utils/useGetFetch"; // Replace './path/to/useGetFetch' with the correct relative path

const Noiseclassifier = (props) => {

  return (
    <div className="noise__container">
      <div className="noise__header">
        <h3>{props.main}</h3>
      </div>
      <div className="noise__content">
        <img src={props.img} alt="" />
        <div className="noise__content-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Noiseclassifier;
