import React from "react";
import { graphPic } from "../constant/iconConst";

function Income() {
  return (
    <main className="bg-primary h-screen p-6">
      <h1 className="text-4xl font-bold">Income</h1>
      <h2 className="py-2 font-medium">
        Last <span className="underline font-light">30 days</span>{" "}
      </h2>
      <h1 className="font-bold text-4xl py-4">$2,260</h1>
      <img src={graphPic} alt="" />
    </main>
  );
}

export default Income;
