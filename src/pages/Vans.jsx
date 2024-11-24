import { useEffect, useState } from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";

function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="flex flex-wrap gap-5 mt-[22px] mb-[55px] items-center">
          <button
            className="hover:bg-[#E17654] hover:text-[#FFEAD0] font-inter text-[16px] text-center font-medium bg-[#FFEAD0] px-[26px] py-2 rounded-md 
          "
          >
            Simple
          </button>
          <button className="hover:bg-hitam hover:text-[#FFEAD0] font-inter text-[16px] text-center font-medium bg-[#FFEAD0] px-[26px] py-2 rounded-md">
            Luxury
          </button>
          <button className="hover:bg-ijo hover:text-[#FFEAD0] font-inter text-[16px] text-center font-medium bg-[#FFEAD0] px-[26px] py-2 rounded-md">
            Rugged
          </button>
          <a className="text-center underline font-inter font-medium text-[16px]">
            Clear filters
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Vans;
