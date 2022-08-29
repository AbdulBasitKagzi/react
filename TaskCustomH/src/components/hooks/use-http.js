import { useState } from "react";

function useHTTP(reqConfig, applydata) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [tasks, setTasks] = useState([]);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
        headers: reqConfig.headers ? reqConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applydata(data);
      //   const loadedTasks = [];

      //   for (const taskKey in data) {
      //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      //   }

      //   setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHTTP;
