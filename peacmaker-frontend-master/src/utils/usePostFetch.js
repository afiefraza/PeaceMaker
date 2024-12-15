import React from "react";
import { useState, useEffect } from "react";

const usePostFetch = (url, reqData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  };

  // Perform the backend request here
  const fetchData = async () => {
    try {
    //   setLoading(true);
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
    //   setLoading(false);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return { data, loading, error, handleClick };
};

export default usePostFetch;
