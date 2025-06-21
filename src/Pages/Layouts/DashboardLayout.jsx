import React from "react";
import MobileNavigation from "../Components/MobileNavigation";
import Sidebar from "./../Components/Sidebar";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>

      <MobileNavigation />
    </div>
  );
};

export default DashboardLayout;
