import useGetFetch from "../../../utils/useGetFetch";
import Header from "../header/Header";
import "./history.css";
import { useState, useEffect } from "react";

const History = () => {
  const user = localStorage.getItem("user");

  const token = localStorage.getItem("accessToken");

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const userData = useGetFetch(
    `http://127.0.0.1:8000/account/users/${user}`,
    options
  );
  console.log(userData);

  const { data, loading, err } = useGetFetch(
    `http://127.0.0.1:8000/users/${user}/history`,
    options
  );

  return (
    <>
      <Header />
      <div className="history-container@">
        <h1 className="his">User Functionality History</h1>
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type of service</th>
              <th>Date&time</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>{userData?.data?.name}</td>
                  <td>
                    {item.type_of_service == 1
                      ? "Noise Cancellation"
                      : "Noise Classifier"}
                  </td>
                  <td>{item.recorded_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
