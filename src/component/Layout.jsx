import React from "react";
import Navbar from "./Nav";
import Footer from "../section/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
