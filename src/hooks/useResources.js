import { useEffect, useState } from "react";

const useResources = num => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchResources = async num => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.coinmarketcap.com/v1/ticker/?limit=${num}`
      );
      const jsonData = await response.json();
      setResources(jsonData);
    } catch (e) {
      setIsError(e);
    } finally {
      setIsLoading(false);
    }
  };

  // const fetchResources = () => {
  //   fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${num}`)
  //     .then(res => res.json())
  //     .then(res => setResources(res))
  //     .catch(e => setIsError(e))
  //     .finally(() => setIsLoading(false))
  // }

  useEffect(() => {
    fetchResources(num);
  }, [num]);

  return {
    resources,
    isLoading,
    isError
  };
};

export default useResources;