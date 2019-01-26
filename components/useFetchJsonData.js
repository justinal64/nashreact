import { useState, useEffect } from "react";

export const useFetchJsonData = () => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    // fetch("../data/data.json")
    //   .then(resp => resp.json())
    //   .then(data => {
    //     setResult(data);
    //   });

    setResult([1, 2, 3]);
  }, []); // <-- The empty array stops the effect from running after the initial render.

  return { result };
};
