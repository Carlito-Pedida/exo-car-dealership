import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Footer from "./Footer.js";
import Inventory from "./Inventory.js";
import Create from "./Create.js";
import Vehicle from "./Vehicle.js";
import Featured from "./Featured.js";
import { VehiclesContext } from "./VehiclesContext.js";
import "./App.css";

function App() {
  return (
    <div className="pageContainer">
      <div className="browser-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Featured />} />
              <Route path="inventory/:vehicleId/edit" element={<Create />} />
              <Route path="inventory/:vehicleId" element={<Vehicle />} />
              <Route path="inventory" element={<Inventory />}></Route>
              <Route path="about-us" element={<AboutUs />} />
              <Route path="vehicle" element={<Vehicle />} />
              <Route path="create" element={<Create />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
