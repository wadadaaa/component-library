import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton from "./Components/Buttons";

const App = () => {
  return (
    <div>
      <PrimaryButton>Submit</PrimaryButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
