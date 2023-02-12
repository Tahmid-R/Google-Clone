import React, { createContext, useReducer, useContext } from "react";

//DATA LAYER
export const DataLayer = createContext();

//BUILD A PROVIDER
export const DataProvider = ({ reducer, initialState, children }) => (
  <DataLayer.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayer.Provider>
);

//HOW WE USE IT INSIDE COMPONENT
export const useDataLayerValue = () => useContext(DataLayer);
