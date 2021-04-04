import "./App.css";
import { useState, useEffect } from "react";
import { WindowSize } from "./WindowSize";

function App() {
  const [value, setValue] = useState(0);

  // UseEffect for initial rendering (this will only run once on the first page rendering)
  useEffect(() => {
    document.title = "React useEffect";
  }, []); //because i did not pass any parameters in the array

  // useEffect for rendering when value change
  useEffect(() => {
    if (value >= 1) {
      document.title = `New messages (${value})`;
    }
  }, [value]); //because i pass the value parameters in the array

  // this will always run when page render on any component change because I did not pass any second parameter
  // in the dependency list
  useEffect(() => {
    console.log("page rendered");
  });

  return (
    <div className="App">
      <h2>Learning useEffects Basics</h2>

      <h3>{value}</h3>
      <button
        type="button"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>

      {/* useEffect Clean Example in separate component */}
      <WindowSize />
    </div>
  );
}

export default App;
