import React, { useState } from "react";
import "./Home.css";


const Home = (props) => {
  const [count, setCount] = useState(0);

  const coundHandelinc = () => {
    setCount((count) => count + 1);
  };
  const coundHandeldec = () => {
    setCount((count) => count - 1);
  };
  const [enableDarkMood, setEnableDarkMood] = useState(false);
  const enableMoodHandel = () => {
    setEnableDarkMood(!enableDarkMood);
  };
  return (
    <>
      {" "}
      <div className={enableDarkMood ? "DarkMood" : "LightMood"}>
        welcom {props.user}
        {/* <Card username={props.user} /> */}
        <p>The Value of count is {count}</p>
        <button onClick={coundHandelinc}>Increment</button>
        <button onClick={coundHandeldec}>Decerement</button>
        <button onClick={enableMoodHandel}>
          {enableDarkMood ? "EnableDarkMood" : "EnableLightMood"}
        </button>
      </div>
    </>
  );
};

export default Home;
