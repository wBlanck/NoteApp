import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [loadings, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loadings, error, data };
};
