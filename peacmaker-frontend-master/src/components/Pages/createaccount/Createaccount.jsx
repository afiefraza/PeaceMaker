import React, { useState } from "react";
import "./createaccount.css";
import Button from "../button/Button";
import Linkfields from "../linkfields/Linkfields";
import { Link } from "react-router-dom";
import usePostFetch from "../../../utils/usePostFetch";
import { useNavigate } from "react-router-dom";

const Createaccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const { data, loading, err, handleClick } = usePostFetch(
    "http://127.0.0.1:8000/account/sign-up",
    formData
  );

  if (data?.Token) {
    console.log(data.Token);
    localStorage.setItem("refereshToken", data.Token.access);
    navigate("/home");
  }

  return (
    <div className="main__create">
      <div className="create-header">
        <b>Create Account</b>
      </div>
      <div className="left__create">
        <div className="signup_3-create">
          <div className="signup_31-create">Name</div>
          <div className="signup_32-create">
            <input
              className="input-a-create"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup_3-create">
          <div className="signup_31-create">Email</div>
          <div className="signup_32-create">
            <input
              className="input-a-create"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-box-create">
          <div className="label-create">Phone</div>
          <div className="label-inner-create">
            <input
              className="input-a-create"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-box-create">
          <div className="label-create">Username</div>
          <div className="label-inner-create">
            <input
              className="input-a-create"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="my-box-create">
          <div className="label-create">password</div>
          <div className="label-inner-create">
            <input
              className="input-a-create"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="h__create">
          <Linkfields text={"Already have an account? Sign in"} />
        </div>
        <div className="create">
          <Button onClick={handleClick} text1={"Createaccount"} />
        </div>
      </div>
    </div>
  );
};

export default Createaccount;
