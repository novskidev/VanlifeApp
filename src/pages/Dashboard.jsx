import React from "react";
import { useFetch } from "../constant/useFetch";

// Komponen VanCard untuk menampilkan kartu van
const VanCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 m-4">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">${price}/day</p>
        <button className="mt-3 w-full bg-[#FF8C38] text-white py-2 rounded-md hover:bg-orange-600 transition">
          View
        </button>
      </div>
    </div>
  );
};

// Komponen utama Dashboard
const HostDashboard = () => {
  const { vans } = useFetch("/api/vans");
  return (
    <div className="h-auto w-full ">
      <section className="bg-[#FFEAD0] rounded-lg p-6 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Welcome!</h2>
            <p className="text-gray-600">Income last 30 days</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-3xl font-bold text-[#161616]">$2,260</p>
            <a href="#" className="text-gray-600 hover:underline">
              Details
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#FFEAD0] rounded-lg p-6 flex justify-between">
        <h1 className="text-2xl font-semibold">
          Review Score ⭐ 5.0 <span className="font-normal text-xl">/5</span>
        </h1>
        <a href="#" className="text-gray-600 hover:underline">
          Details
        </a>
      </section>

      <section className="mt-5">
        <div className="flex justify-between items-center  w-auto mx-4 mb-6">
          <h2 className="text-2xl font-bold">Your Listed Vans</h2>
          <a href="/vans" className="text-gray-600 hover:underline">
            View all
          </a>
        </div>

        <div className="flex flex-wrap justify-center">
          {vans.map((van) => (
            <VanCard
              key={van.id}
              name={van.name}
              price={van.price}
              image={van.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HostDashboard;
