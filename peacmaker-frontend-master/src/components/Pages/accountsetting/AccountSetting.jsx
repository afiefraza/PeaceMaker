import React, { useState, useEffect } from "react";
import "./accountsetting.css";
import usePostFetch from "../../../utils/usePostFetch"; // Import usePostFetch from the appropriate location
import useGetFetch from "../../../utils/useGetFetch"; // Import useGetFetch from the appropriate location

const AccountSetting = () => {
  const user = localStorage.getItem("user");
  const [userData, setUserData] = useState({});

  const token = localStorage.getItem("accessToken");

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/account/users/${user}`,
          options
        );
        const jsonData = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const updateOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/account/users/${user}`,
        updateOptions
      );
      const jsonData = await response.json();
      // Process the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="main__account">
      <div className="account-header">
        <b>Account Setting</b>
        <div className="main__Field">
          <div className="left">
            <div className="signup_3-Field">
              <div className="signup_31-Field">Name</div>
              <div className="signup_32-Field">
                <input
                  className="input-Field"
                  type="text"
                  value={userData.name || ""}
                  name="name"
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
                  value={userData.email || ""}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-box-Field">
              <div className="label-Field">Phone</div>
              <div className="label-inner-Field">
                <input
                  className="input-Field"
                  type="text"
                  value={userData.phone || ""}
                  name="phone"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-account">
        <div className="buttons">
          <button className="update" onClick={handleUpdate}>
            Update
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;

