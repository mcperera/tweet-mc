import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url, timeout = 0) {
  const [data, setData] = useState(null);
  const [fetchState, setFetchState] = useState({
    loading: false,
    error: false,
  });

  const getData = async (url, timeout) => {
    setFetchState((prev) => {
      return { ...prev, loading: true };
    });

    await axios({ url, timeout })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log("useFetchData - error -->", error);
        setFetchState((prev) => {
          return { ...prev, error: true };
        });
      });
    setFetchState((prev) => {
      return { ...prev, loading: false };
    });
  };

  useEffect(() => getData(url, timeout), [url, timeout]);

  return [fetchState, data];
}
export default useFetchData;
