import { useEffect } from "react";
import { useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const responseToJson = await response.json();
      setData(responseToJson);
    };
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useGetData;
