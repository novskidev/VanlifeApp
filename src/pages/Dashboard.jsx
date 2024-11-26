import React from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";
import NestedNav from "../component/NestedNav.";
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
          Edit
        </button>
      </div>
    </div>
  );
};

// Komponen utama Dashboard
const HostDashboard = () => {
  const { vans } = useFetch("/api/vans");
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <NestedNav />
      <section className="bg-[#FFEAD0] rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Welcome!</h2>
            <p className="text-gray-600">Income last 30 days</p>
          </div>
          <div className="text-3xl font-bold text-[#161616]">$2,260</div>
        </div>
      </section>

      <section>
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
      <Footer />
    </div>
  );
};

export default HostDashboard;