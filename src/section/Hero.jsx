import React from "react";
import { heroPic } from "../constant/iconConst";
import Button from "../component/Button";

function Hero() {
  return (
    <main className="relative w-full h-screen bg-primary">
      {/* Gambar Latar */}
      <img
        className="h-full w-full object-cover"
        src={heroPic}
        alt="hero-background"
      />

      {/* Konten Hero */}
      <article className="absolute inset-0 flex flex-col justify-center items-center text-center gap-4 px-6 lg:gap-8">
        {/* Judul */}
        <h2 className="font-inter font-extrabold text-white text-2xl sm:text-3xl lg:text-5xl leading-snug">
          You got the travel plans, we got the travel vans.
        </h2>

        {/* Deskripsi */}
        <p className="text-white text-sm sm:text-base lg:text-lg font-inter max-w-lg">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        {/* Tombol */}
        <Button variant="primary" width="w-4/5 sm:w-1/2" size="md">
          Find your van
        </Button>
      </article>
    </main>
  );
}

export default Hero;
