import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { VehiclesProvider } from "./VehiclesContext";

ReactDOM.render(
  <VehiclesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </VehiclesProvider>,
  document.getElementById("root")
);
