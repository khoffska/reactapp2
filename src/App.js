import React, { useState } from "react";

const apiEndpoint = "https://fetpttl8n4.execute-api.us-east-1.amazonaws.com/";

const MyComponent = () => {
  const [response, setResponse] = useState("");

  const handleClick = async (path) => {
    try {
      alert("Please wait 5 minutes for launch!");
      const res = await fetch(`${apiEndpoint}/${path}`);
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick("mfarestrict")}>mfarestrict</button>
      <button onClick={() => handleClick("ec2")}>ec2</button>
      <button onClick={() => handleClick("waf")}>WAF</button>
      <button onClick={() => handleClick("test")}>test</button>
      <div>{JSON.stringify(response)}</div>
    </div>
  );
};

export default MyComponent;
