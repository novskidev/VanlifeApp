import { useEffect, useState } from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";

function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vans:", err);
        setLoading(false);
      });
  }, []);

  const filteredVans = filter
    ? vans.filter((van) => van.type === filter)
    : vans;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <main className="bg-primary flex flex-col items-center">
        <h1 className="font-inter font-bold text-4xl text-left">
          Explore our van option
        </h1>
        <div className="flex flex-wrap gap-5 mt-[22px] items-center">
          <button
            className="hover:bg-[#E17654] hover:text-[#FFEAD0] font-inter text-[16px] text-center font-medium bg-[#FFEAD0] px-[26px] py-2 rounded-md"
            onClick={() => setFilter("simple")}
          >
            Simple
          </button>
          <button
            className="hover:bg-hitam hover:text-[#FFEAD0] font-inter text-[16px] text-center font-medium bg-[#FFEAD0] px-[26px] py-2 rounded-md"
            onClick={() => setFilter("luxury")}
          >
            Luxury
          </button>
          <button
            className="hover:bg-ijo hover:text-[#FFEAD0] font-inter text-[16px] text-center font-medium bg-[#FFEAD0] px-[26px] py-2 rounded-md"
            onClick={() => setFilter("rugged")}
          >
            Rugged
          </button>
          <a
            className="text-center underline font-inter font-medium text-[16px] cursor-pointer"
            onClick={() => setFilter("")}
          >
            Clear filters
          </a>
        </div>
        <article>
          <ul className="flex flex-wrap justify-center w-[500px] gap-6 my-14">
            {filteredVans.map((item) => (
              <li className="flex flex-col gap-2" key={item.id}>
                <img
                  className="w-[230px] h-[230px]"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="flex justify-between">
                  <p className="font-inter text-[20px] font-semibold text-hitam">
                    {item.name}
                  </p>
                  <div className="flex flex-col gap-0">
                    <span className="font-inter text-[20px] font-semibold text-hitam">
                      ${item.price}
                    </span>
                    <span className="text-sm font-normal"> /day</span>
                  </div>
                </div>
                {item.type === "rugged" && (
                  <p className="bg-ijo text-[#FFEAD0] w-[85px] text-center rounded py-1 font-semibold text-[16px] font-inter">
                    Rugged
                  </p>
                )}
                {item.type === "simple" && (
                  <p className="bg-[#E17654] text-[#FFEAD0] w-[85px] text-center rounded py-1 font-semibold text-[16px] font-inter">
                    Simple
                  </p>
                )}
                {item.type === "luxury" && (
                  <p className="bg-hitam text-[#FFEAD0] w-[85px] text-center rounded py-1 font-semibold text-[16px] font-inter">
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
