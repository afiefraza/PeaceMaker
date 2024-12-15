import React from "react";
import "./signup.css";
import Fields from "../fields/Fields";
import Linkfields from "../linkfields/Linkfields";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import usePostFetch from "../../../utils/usePostFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const [data, setData] = useState(null);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  // Perform the backend request here
  const fetchData = async () => {
    try {
      //   setLoading(true);
      const response = await fetch(
        "http://127.0.0.1:8000/account/log-in",
        options
      );
      const jsonData = await response.json();
      setData(jsonData);

      if (data?.token) {
        if (data?.token?.access) {
          localStorage.setItem("accessToken", data.token.access);
          localStorage.setItem("refreshToken", data.token.referesh);
          localStorage.setItem("user", data.user);
        }
        navigate("/home");
      }
    } catch (error) {
    } finally {
      //   setLoading(false);
    }
  };

  return (
    <div>
      <div className="signup_1">Welcome to Peacmaker</div>
      <div className="signup_2">
        <div className="signup_21">Sign In</div>
        <div>
          <div className="signup_3">
            <div className="signup_31">Username</div>
            <div className="signup_32">
              <input
                type="text"
                className="field_input"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-box">
            <div className="label">Password</div>
            <div className="label-inner">
              <input
                type="text"
                name="password"
                className="field_input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>{" "}
        <div className="sign_link">
          <Linkfields text={"Forget Password"} />
        </div>
        <div className="signup_211">
          <Button onClick={fetchData} text1={"Signin"} />
        </div>
      </div>
    </div>
  );
};
export default Signup;
