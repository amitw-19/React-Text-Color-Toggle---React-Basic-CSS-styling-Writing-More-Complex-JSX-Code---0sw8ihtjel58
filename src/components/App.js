import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  //code here
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    setActive(!isActive);
  }, []);
  return (
    <div id="main">
      <p className={isActive ? "blueColor" : "redColor"}>Newton School</p>
      <button id="button" onClick={() => setActive(!isActive)}>
        Change Style
      </button>
    </div>
  );
};

export default App;
