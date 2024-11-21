import React from "react";
import { heroPic } from "../constant/iconConst";
import Button from "../component/Button";

function Hero() {
  return (
    <main className="relative w-[550px] h-auto">
      <img
        className="h-auto lg:h-auto w-full"
        src={heroPic}
        alt="hero-background"
      />
      <article className="absolute inset-0 text-center lg:gap-10 gap-5 flex flex-col justify-center items-center ">
        <h2 className="font-inter font-extrabold lg:text-5xl text-3xl text-white">
          You got the travel plans, we got the travel vans.
        </h2>
        <p className="text-white text-sm lg:text-lg  font-inter">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button variant="primary" width="w-4/5" size="md">
          Find your van
        </Button>
      </article>
    </main>
  );
}

export default Hero;
