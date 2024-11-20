import React from "react";
import { signIcon } from "../constant/iconConst";

function Navbar() {
  return (
    <nav className="bg-primary w-full h-[112px] p-6 flex items-center justify-between m-auto ">
      <h1 className=" hover:text-3xl font-inter text-2xl font-black cursor-pointer">
        #VANLIFE
      </h1>
      <ul className=" flex flex-row gap-6 text-menuFont items-center cursor-pointer">
        <li className="hover:underline text-base font-semibold">Host</li>
        <li className="hover:underline text-base font-semibold">About</li>
        <li className="hover:underline text-base font-semibold">Vans</li>
        <img className="w-4 h-4" src={signIcon} alt="" />
      </ul>
    </nav>
  );
}

export default Navbar;
