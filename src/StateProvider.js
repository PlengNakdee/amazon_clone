// data layer setup
import React, { createContext, useContext, useReducer } from "react";

// create empty data layer
export const StateContext = createContext();

// build a provider to wrap oue app in
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
