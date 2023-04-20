import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
