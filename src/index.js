import React from "react";
import ReactDOM from "react-dom";
import App from "containers/App";
import ReduxRoot from "ReduxRoot";


ReactDOM.render(
  <ReduxRoot>
    <App />
  </ReduxRoot>,
  document.getElementById("root")
);
