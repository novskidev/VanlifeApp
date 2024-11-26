import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vans:", err);
        setLoading(false);
      });
  }, [url]);

  return { vans, loading };
};
