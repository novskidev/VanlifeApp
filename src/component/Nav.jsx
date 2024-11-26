import React, { useState } from "react";
import { signIcon } from "../constant/iconConst";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary w-full h-auto p-4 flex flex-wrap items-center justify-between">
      <Link to="/">
        <h1 className="hover:text-3xl font-inter text-2xl font-black cursor-pointer">
          #VANLIFE
        </h1>
      </Link>

      <button
        className="block lg:hidden text-menuFont text-xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <ul
        className={`${
          menuOpen ? "block absolute left-0 top-16 z-10" : "hidden"
        } w-full lg:w-auto lg:flex flex-col lg:flex-row lg:gap-6 text-menuFont items-center cursor-pointer lg:static bg-primary`}
      >
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <li className="hover:underline text-base m-2 font-semibold">Host</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <li className="hover:underline text-base m-2 font-semibold">About</li>
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <li className="hover:underline text-base m-2 font-semibold">Vans</li>
        </NavLink>
        <NavLink to="/login">
          <li>
            <img className="w-4 h-4 m-3" src={signIcon} alt="Sign In" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
