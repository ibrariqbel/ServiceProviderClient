import React, { useState } from "react";

const About = () => {
  // first Example
  const [visibal, setvisible] = useState(false);
  const visibalHandle = () => {
    setvisible(!visibal);
  };

  // second  example
  const [showPassword, setShowPassword] = useState(false);
  const showPassHandel = () => {
    setShowPassword(!showPassword);
  };
  // third example
  const [isopen, setIsOpen] = useState(false);
  return (
    <>
      <h2>This is About Session here we learn the basic of useState </h2>
      {/* first Example */}
      {visibal && <p>This is a Hidden message</p>}
      <button onClick={visibalHandle}>
        {visibal ? "Text Hide" : "Text Show"}
      </button>

      <br />
      <br />

      {/* Second Exapme */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Eneter Password"
      />
      <button onClick={showPassHandel}>{showPassword ? "Hide" : "Show"}</button>
      <br />
      <br />

      {/* Third Example */}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open
      </button>
      {isopen && (
        <div className="model">
          <p>This is a model</p>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default About;
