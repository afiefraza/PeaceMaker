import React, { useState } from "react";
import Header from "../header/Header";
import Herobanner from "../herobanner/Herobanner";
import Whyus from "../whyus/Whyus";
import Sample from "../sample/Sample";
import Footer from "../footer/Footer";
import Difficulties from "../difficulties/Difficulties";
import herobanner_classifier from "../../pictures/herobanner_classifier.png";
import whyus_classifier from "../../pictures/whyus_classifier.png";
import { useNavigate } from "react-router-dom";

const Classifier = () => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    setFileData(event.target.files[0]);
  };

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("audio", fileData);

    const token = localStorage.getItem("accessToken");
    const historyData = new FormData();
    historyData.append("type_of_service", 2);

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

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/classify/", options);
      const jsonData = await response.json();
      navigate("/classifier-result", { state: { data: jsonData.audio } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="herobanner__container">
        <div className="herobanner__container-text">
          <h1>Can't perceive?</h1>
          <p>Upload your audio file now to recognize the present sounds!</p>
          <form>
            <input type="file" name="audio" onChange={handleFileChange} />
            <input type="button" value="Classify" onClick={handleClick} />
          </form>
        </div>
        <img
          className="herobanner__container-pic"
          src={herobanner_classifier}
          alt=""
        />
      </div>
      <Whyus
        main={"Why us"}
        title={"State of the art AI model"}
        text={
          "We calculate the opposite waves to cancels out the noises waves by sending opposite phase waves by one of our proposed method. And then outputs the calculated waves from the output device of user’s device i.e., speakers."
        }
        img={whyus_classifier}
        button={"Upload"}
      />
      <Sample />
      <Difficulties text={"Having Difficulties?"} />
      <Footer />
    </div>
  );
};

export default Classifier;
