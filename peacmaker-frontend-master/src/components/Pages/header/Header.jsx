import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import useGetFetch from "../../../utils/useGetFetch";

const Header = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        //   setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/account/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const jsonData = await response.json();
      } catch (error) {
      } finally {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refereshToken");
        localStorage.removeItem("user");
    
        navigate("/login");
    
      }
    };

    fetchData();

  };

  return (
    <header className="header">
      <Link to="/home" className="header__logo">
        Peacemaker
      </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/cancellor" className="header__nav-link">
              Canceller
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/classifier" className="header__nav-link">
              Classifier
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/Account" className="header__nav-link">
              Account
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/history" className="header__nav-link">
              History
            </Link>
          </li>{" "}
          <li className="header__nav-item">
            <Link className="header__nav-link" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
