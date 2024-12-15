import React from "react";
import { useState, useEffect } from "react";

const useGetFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Perform the backend request here
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  return { data, loading, error };
};

export default useGetFetch;
