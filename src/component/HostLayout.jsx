import React from "react";
import { Outlet } from "react-router";
import HostDashboard from "../pages/Dashboard";
import NestedNav from "./NestedNav.";
import Footer from "../section/Footer";

function HostLayout() {
  return (
    <div>
      <NestedNav />
      <Outlet />
    </div>
  );
}

export default HostLayout;
