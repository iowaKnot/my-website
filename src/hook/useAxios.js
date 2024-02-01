import axios from "axios";
import { useState, useEffect } from "react";

const DEFAULT_OPTIONS = {
  data: null,
  selector: null,
  method: "GET",
  headers: {},
};

export const useAxios = (url, options = { ...DEFAULT_OPTIONS }) => {
  options = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const refetch = async (_url) => {
    if (error) {
      setError(false);
    }

    try {
      const axiosOptions = {
        url: _url ? _url : url,
        method: options.method,
      };

      const response = await axios(axiosOptions);

      const result =
        options.selector === null
          ? response.data
          : response.data[options.selector];

      setData(result);

      console.log(result);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    refetch();
  }, [url]);

  return {
    data,
    setData,
  };
};
