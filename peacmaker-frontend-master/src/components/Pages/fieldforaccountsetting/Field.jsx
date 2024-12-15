import React from "react";
import "./field.css";
const Field = (props) => {
  return (
    <div className="main__Field">
      <div className="left">
        <div className="signup_3-Field">
          <div className="signup_31-Field">{props.text1}</div>
          <div className="signup_32-Field">
            <input className="input-Field" type="text" />
          </div>
        </div>
        <div className="signup_3-Field">
          <div className="signup_31-Field">{props.text2}</div>
          <div className="signup_32-Field">
            <input className="input-Field" type="text" />
          </div>
        </div>
        <div className="my-box-Field">
          <div className="label-Field">{props.text3}</div>
          <div className="label-inner-Field">
            <input className="input-Field" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
