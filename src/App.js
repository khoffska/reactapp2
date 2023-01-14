import React, { useState } from "react";

const apiEndpoint = "https://fetpttl8n4.execute-api.us-east-1.amazonaws.com/";

const MyComponent = () => {
  const [response, setResponse] = useState("");

  const handleClick = async (path) => {
    try {
      const res = await fetch(`${apiEndpoint}/${path}`);
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick("route1")}>Route 1</button>
      <button onClick={() => handleClick("route2")}>Route 2</button>
      <button onClick={() => handleClick("waf")}>WAF</button>
      <div>{JSON.stringify(response)}</div>
    </div>
  );
};

export default MyComponent;
