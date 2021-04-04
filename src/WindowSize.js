// Cleaning useEffect so no memory leakage take place Example
import React, { useState, useEffect } from "react";

export const WindowSize = () => {
  const [winSize, setWinSize] = useState(window.innerWidth);

  const checkSize = () => {
    setWinSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div>
      <h1>Window</h1>
      <h3>{winSize} Px</h3>
    </div>
  );
};
