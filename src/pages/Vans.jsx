import { useEffect, useState } from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";
import { useFetch } from "../constant/useFetch";
import { Link } from "react-router-dom";

function Vans() {
  const [filter, setFilter] = useState("");
  const { vans, loading } = useFetch("/api/vans");

  const filteredVans = filter
    ? vans.filter((van) => van.type === filter)
    : vans;

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-primary w-screen h-screen">
        <h1 className="text-5xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="bg-primary flex flex-col items-center px-4 md:px-8 h-full">
        <h1 className="font-inter font-bold text-2xl md:text-4xl text-left">
          Explore our van option
        </h1>
        <div className="flex flex-wrap gap-5 mt-[22px] items-center justify-center">
          <button
            className="hover:bg-[#E17654] hover:text-[#FFEAD0] font-inter text-[14px] md:text-[16px] text-center font-medium bg-[#FFEAD0] px-[20px] md:px-[26px] py-2 rounded-md"
            onClick={() => setFilter("simple")}
          >
            Simple
          </button>
          <button
            className="hover:bg-hitam hover:text-[#FFEAD0] font-inter text-[14px] md:text-[16px] text-center font-medium bg-[#FFEAD0] px-[20px] md:px-[26px] py-2 rounded-md"
            onClick={() => setFilter("luxury")}
          >
            Luxury
          </button>
          <button
            className="hover:bg-ijo hover:text-[#FFEAD0] font-inter text-[14px] md:text-[16px] text-center font-medium bg-[#FFEAD0] px-[20px] md:px-[26px] py-2 rounded-md"
            onClick={() => setFilter("rugged")}
          >
            Rugged
          </button>
          <a
            className="text-center underline font-inter font-medium text-[14px] md:text-[16px] cursor-pointer"
            onClick={() => setFilter("")}
          >
            Clear filters
          </a>
        </div>
        <article>
          <ul className="flex flex-wrap justify-center gap-6 w-full my-14">
            {filteredVans.map((item) => (
              <li
                className="flex flex-col gap-2 w-[150px] md:w-[230px]"
                key={item.id}
              >
                <Link to={`/vans/${item.id}`}>
                  <img
                    className="w-[150px] h-[150px] md:w-[230px] md:h-[230px] object-cover cursor-pointer"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </Link>

                <div className="flex justify-between">
                  <p className="font-inter text-[14px] md:text-[20px] font-semibold text-hitam">
                    {item.name}
                  </p>
                  <div className="flex flex-col gap-0">
                    <span className="font-inter text-[14px] md:text-[20px] font-semibold text-hitam">
                      ${item.price}
                    </span>
                    <span className="text-xs md:text-sm font-normal">
                      {" "}
                      /day
                    </span>
                  </div>
                </div>
                {item.type === "rugged" && (
                  <p className="bg-ijo text-[#FFEAD0] w-[70px] md:w-[85px] text-center rounded py-1 font-semibold text-[14px] md:text-[16px] font-inter">
                    Rugged
                  </p>
                )}
                {item.type === "simple" && (
                  <p className="bg-[#E17654] text-[#FFEAD0] w-[70px] md:w-[85px] text-center rounded py-1 font-semibold text-[14px] md:text-[16px] font-inter">
                    Simple
                  </p>
                )}
                {item.type === "luxury" && (
                  <p className="bg-hitam text-[#FFEAD0] w-[70px] md:w-[85px] text-center rounded py-1 font-semibold text-[14px] md:text-[16px] font-inter">
                    Luxury
                  </p>
                )}
              </li>
            ))}
          </ul>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Vans;
