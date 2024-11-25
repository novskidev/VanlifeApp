import React, { useState } from "react";
import { signIcon } from "../constant/iconConst";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary w-full h-auto p-4 flex flex-wrap items-center justify-between">
      <h1 className="hover:text-3xl font-inter text-2xl font-black cursor-pointer">
        #VANLIFE
      </h1>

      <button
        className="block lg:hidden text-menuFont text-xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full lg:w-auto lg:flex flex-col lg:flex-row  lg:gap-6 text-menuFont items-center cursor-pointer lg:static absolute bg-primary left-0 top-16 lg:top-auto z-10`}
      >
        <Link to="/">
          <li className="hover:underline text-base m-2 font-semibold">Host</li>
        </Link>
        <Link to="/about">
          <li className="hover:underline text-base m-2 font-semibold">About</li>
        </Link>

        <Link to="/vans">
          <li className="hover:underline text-base m-2 font-semibold">Vans</li>
        </Link>

        <Link to="/login">
          <li>
            <img className="w-4 h-4 m-3" src={signIcon} alt="Sign In" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
