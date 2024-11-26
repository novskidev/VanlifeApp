import React from "react";
import { NavLink } from "react-router-dom";

function NestedNav() {
  return (
    <nav className="bg-primary">
      <ul className="flex gap-5  p-5 ">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : ""
          }
        >
          <li className="hover:underline text-base m-2 hover:font-semibold">
            Dashboard
          </li>
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : ""
          }
        >
          <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
            Income
          </li>
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : ""
          }
        >
          <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
            Vans
          </li>
        </NavLink>
        <NavLink
          to="/host/review"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : ""
          }
        >
          <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
            Review
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NestedNav;
