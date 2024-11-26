import React from "react";
import { Link } from "react-router-dom";

function NestedNav() {
  return (
    <nav className="bg-primary">
      <ul className="flex gap-5  p-5 ">
        <Link to="/host/dashboard">
          <li className="hover:underline text-base m-2 hover:font-semibold">
            Dashboard
          </li>
        </Link>
        <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
          Income
        </li>
        <Link to="/host/vans">
          <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
            Vans
          </li>
        </Link>

        <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
          Review
        </li>
      </ul>
    </nav>
  );
}

export default NestedNav;
