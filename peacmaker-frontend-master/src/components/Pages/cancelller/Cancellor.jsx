import React from "react";
import "./cancelller.css";
import Header from "../header/Header";
import Herobanner from "../herobanner/Herobanner";
import Whyus from "../whyus/Whyus";
import herobanner_cancellor from "../../pictures/herobanner_cancellor.png";
import whyus_cancellor from "../../pictures/whyus_cancellor.png";
import Sample from "../sample/Sample";
import Difficulties from "../difficulties/Difficulties";
import Footer from "../footer/Footer";
import { useState } from "react";

const Cancellor = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecordingAPI = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch("http://127.0.0.1:8000/canceller/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    }
  };

  const stopRecordingAPI = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const historyData = new FormData();
      historyData.append("type_of_service", 1);

      try {
        const user = localStorage.getItem("user");
        historyData.append("end_user", user);

        const response = await fetch(
          `http://127.0.0.1:8000/users/${user}/history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: "POST",
            body: historyData,
          }
        );
        const jsonData = await response.json();
      } catch (error) {
        console.error(error);
      }

      const response = await fetch("http://127.0.0.1:8000/canceller-off/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    }
  };

  const handleClick = () => {
    console.log(isRecording);
    if (!isRecording) {
      setIsRecording(true);
      startRecordingAPI();
    } else {
      setIsRecording(false);
      stopRecordingAPI();
    }
  };

  console.log(data);

  return (
    <div>
      <Header />
      <div className="herobanner__container">
        <div className="herobanner__container-text">
          <h1>Ready for peace</h1>
          <p>Press the record button to start cancelling the noise</p>
          <div>
            <button onClick={handleClick}>Record</button>
          </div>
        </div>
        <img
          className="herobanner__container-pic"
          src={herobanner_cancellor}
          alt=""
        />
      </div>

      <Whyus
        main={"Why us?"}
        title={"Our procedure for the cancellation process"}
        text={
          "We calculate the opposite waves to cancels out the noise’s waves by sending opposite phase waves by one of our proposed method. And then outputs the calculated waves from the output device of user’s device i.e., speakers."
        }
        img={whyus_cancellor}
      />
      <Sample />
      <Difficulties text={"Having Difficulties?"} />
      <Footer />
    </div>
  );
};

export default Cancellor;
