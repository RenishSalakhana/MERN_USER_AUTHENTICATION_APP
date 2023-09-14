import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./common/Navbar";
import RouteList from "./routes/RouteList";

export const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <RouteList/>
      </BrowserRouter>
    </div>
  );
}