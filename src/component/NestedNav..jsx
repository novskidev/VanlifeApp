import React from "react";

function NestedNav() {
  return (
    <nav className="bg-primary">
      <ul className="flex gap-5  p-5 ">
        <li className="hover:underline text-base m-2 hover:font-semibold">
          Dashboard
        </li>
        <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
          Income
        </li>
        <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
          Vans
        </li>
        <li className="hover:underline text-base m-2 hover:font-semibold cursor-pointer">
          Review
        </li>
      </ul>
    </nav>
  );
}

export default NestedNav;
