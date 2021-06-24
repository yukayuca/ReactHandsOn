import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <h2>Reactハンズオン！</h2>
      <p style={{ color: "blue" }}>React is not difficult.</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));