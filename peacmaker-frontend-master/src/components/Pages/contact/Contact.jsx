import React from "react";
import "./contact.css";
import Field from "../fieldforaccountsetting/Field";
import Button from "../button/Button";

import usePostFetch from "../../../utils/usePostFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    text: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const { data, loading, err, handleClick } = usePostFetch(
    "http://127.0.0.1:8000/chat/",
    formData
  );

  return (
    <div>
      <div className="contact-container">
        <h2>Any Query? Contact Us</h2>
      </div>
      <div>
        <div>
          <div className="main__Field">
            <div className="left">
              <div className="signup_3-Field">
                <div className="signup_31-Field">Username</div>
                <div className="signup_32-Field">
                  <input
                    className="input-Field"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="signup_3-Field">
                <div className="signup_31-Field">Email</div>
                <div className="signup_32-Field">
                  <input
                    className="input-Field"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact2">
          <textarea
            id=""
            cols="53"
            rows="15"
            resize="none"
            name="text"
            value={formData.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="contact21">
          <Button text1={"Submit"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
