import { useState, useEffect } from 'react';

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let fetching = true;
    setLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
      })
      .catch((err) => {
        setError('Opps, seems like we missed the bus somewhere.');
      });
    return () => {
      fetching = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
