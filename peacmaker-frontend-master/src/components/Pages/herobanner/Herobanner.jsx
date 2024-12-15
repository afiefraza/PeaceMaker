import React from "react";
import "./herobanner.css";
import { Link } from "react-router-dom";
import Upload from "../fileupload/Upload";
import RecordButton from "../fileupload/Upload";
const Herobanner = (props) => {
  return (
    <div className="herobanner__container">
      <div className="herobanner__container-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div>
          <RecordButton />
        </div>
      </div>
      <img className="herobanner__container-pic" src={props.img} alt="" />
    </div>
  );
};

export default Herobanner;
