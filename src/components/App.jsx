import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setHeading("Clicked");
  }

  function handleMouseOver() {
    setMousedOver(true);
    //console.log(isMousedOver);
  }

  function handleMouseOut() {
    setMousedOver(false);
    //console.log(isMousedOver);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: isMousedOver ? "black" : "white"
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
