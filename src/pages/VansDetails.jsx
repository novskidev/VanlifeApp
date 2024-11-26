import React from "react";
import { useParams } from "react-router";
import Nav from "../component/Nav";
import Footer from "../section/Footer";
import { useFetch } from "../constant/useFetch";
import Button from "../component/Button";
import { Link } from "react-router-dom";

function VansDetails() {
  const params = useParams();
  const { vans, loading } = useFetch(`/api/vans/${params.id}`);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-primary w-screen h-screen">
        <h1 className="text-5xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-primary">
      <main className="font-medium flex flex-col gap-5 justify-center content-center h-auto p-6 w-4/5  mx-auto">
        <Link to="/vans">
          <h3 className="underline cursor-pointer">⬅️ Back to all vans</h3>
        </Link>
        <img
          className="object-cover w-[500px] h-[500px]"
          src={vans.imageUrl}
          alt=""
        />
        {vans.type === "rugged" && (
          <p className="bg-ijo text-[#FFEAD0] w-[70px] md:w-[85px] text-center rounded py-1 font-semibold text-[14px] md:text-[16px] font-inter">
            Rugged
          </p>
        )}
        {vans.type === "simple" && (
          <p className="bg-[#E17654] text-[#FFEAD0] w-[70px] md:w-[85px] text-center rounded py-1 font-semibold text-[14px] md:text-[16px] font-inter">
            Simple
          </p>
        )}
        {vans.type === "luxury" && (
          <p className="bg-hitam text-[#FFEAD0] w-[70px] md:w-[85px] text-center rounded py-1 font-semibold text-[14px] md:text-[16px] font-inter">
            Luxury
          </p>
        )}
        <p className="font-inter text-[32px] md:text-[40px] font-bold text-hitam">
          {vans.name}
        </p>
        <div className="">
          <span className="font-inter text-[14px] md:text-[20px] font-bold text-hitam">
            ${vans.price}
          </span>
          <span className="text-xs md:text-sm font-semibold"> /day</span>
        </div>
        <p className="text-justify font-medium">{vans.description}</p>
        <Button variant="primary">Rent this van</Button>
      </main>
    </div>
  );
}

export default VansDetails;
