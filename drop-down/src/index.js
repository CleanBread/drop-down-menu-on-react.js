import React from "react";
import { render } from "react-dom";

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

render(<Hello />, document.getElementById("root"));
