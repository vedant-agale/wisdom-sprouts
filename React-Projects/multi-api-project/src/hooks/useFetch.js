// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

// Ye hamara Custom Hook hai jo URL lega aur data dega
const useFetch = (initialUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetch karne ka function
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(initialUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // Component load hote hi data fetch karo
  useEffect(() => {
    fetchData();
  }, [initialUrl]);

  // UI se kisi item ko delete karne ka logic (Ma'am ki slide ke hisab se)
  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Data refresh karne ka logic
  const refreshData = () => {
    fetchData();
  };

  // Jo data aur functions component ko chahiye wo return karo
  return { data, loading, error, deleteItem, refreshData };
};

export default useFetch;