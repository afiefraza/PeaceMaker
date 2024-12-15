import React from "react";
import "./homepageheader.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Homepageheader = (props) => {
  const Alert = () => {
    Swal.fire({
      title: "Oops",
      type: "success",
      text: "Please login or signup your account",
      TimeProgressBar: true,
    });
  };
  return (
    <header className="homepageheader">
      <div className="homepageheader__logo">Peacemaker</div>

      <nav className="homepageheader__nav">
        <ul className="homepageheader__nav-list">
          <li>
            <Link to="" className="homepageheader__nav-link" onClick={Alert}>
              Home
            </Link>
          </li>
          <li className="homepageheader__nav-item">
            <Link to="" className="homepageheader__nav-link" onClick={Alert}>
              Canceller
            </Link>
          </li>
          <li className="homepageheader__nav-item">
            <Link to="" className="homepageheader__nav-link" onClick={Alert}>
              Classifier
            </Link>
          </li>
          <li className="homepageheader__nav-item">
            <Link to="" className="homepageheader__nav-link" onClick={Alert}>
              Account
            </Link>
          </li>

          <li className="homepageheader__nav-item">
            <Link to="" className="homepageheader__nav-link" onClick={Alert}>
              History
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Homepageheader;
