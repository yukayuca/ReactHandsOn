import React from "react";
import ReactDOM from "react-dom";

import MsgList from "./components/MsgList";

const App = () => {
  return (
    <>
      <h2>React Hands On</h2>
      <MsgList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
