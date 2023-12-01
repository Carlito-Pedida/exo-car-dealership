import React, { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const VehiclesContext = createContext();

export const VehiclesProvider = (props) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function getVehicles() {
      await refreshVehicles();
    }
    getVehicles();
  }, []);

  function refreshVehicles() {
    return axios.get(`http://localhost:3005/vehicles/?q=`).then((response) => {
      setVehicles(response.data);
    });
  }

  function getVehicle(id) {
    return axios
      .get(`http://localhost:3005/vehicles/${id}`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  function sortPriceHigh() {
    return axios
      .get(`http://localhost:3005/vehicles/?price_gte=500000&price_lte=900000`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }
  function sortPriceMid() {
    return axios
      .get(`http://localhost:3005/vehicles/?price_gte=90000&price_lte=200000`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }
  function sortPriceLow() {
    return axios
      .get(`http://localhost:3005/vehicles/?price_gte=30000&price_lte=70000`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  function deleteVehicle(id) {
    axios.delete(`http://localhost:3005/vehicles/${id}`).then(refreshVehicles);
  }

  function addVehicle(vehicle) {
    return axios
      .post("http://localhost:3005/vehicles", vehicle)
      .then((response) => {
        refreshVehicles();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function updateVehicle(vehicle) {
    return axios
      .put(`http://localhost:3005/vehicles/${vehicle.id}`, vehicle)
      .then((response) => {
        refreshVehicles();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  return (
    <VehiclesContext.Provider
      value={{
        vehicles,
        getVehicle,
        addVehicle,
        deleteVehicle,
        refreshVehicles,
        updateVehicle,
        sortPriceHigh,
        sortPriceMid,
        sortPriceLow
      }}
    >
      {props.children}
    </VehiclesContext.Provider>
  );
};
