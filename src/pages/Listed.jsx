import React from "react";
import { useFetch } from "../constant/useFetch";

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

function ListedVans() {
  const { vans } = useFetch("/api/vans");
  return (
    <div>
      <main>
        <section>
          <div className="flex justify-between items-center  w-auto m-5 mb-6">
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
      </main>
    </div>
  );
}

export default ListedVans;
