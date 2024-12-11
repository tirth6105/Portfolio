import React, { useEffect } from "react";
import "../src/App.css";

const Loading = () => {
  const name = "Tirth";
  return (
    <div>
      <div className="loader">
        <div className="loader-text">
          {name.split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
