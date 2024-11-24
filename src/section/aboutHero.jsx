import React from "react";
import { aboutPic } from "../constant/iconConst";
import Button from "../component/Button";

function AboutHero() {
  return (
    <main className="flex flex-col justify-center">
      {/* Gambar Hero */}
      <img
        className="h-[300px] sm:h-[400px] lg:h-[500px] w-full object-cover"
        src={aboutPic}
        alt="about picture"
      />

      {/* Konten Artikel */}
      <article className="bg-primary py-8 px-6 sm:py-10 sm:px-12 h-auto flex flex-col items-center justify-center gap-6">
        {/* Heading */}
        <p className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl text-wrap text-center leading-tight">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>

        {/* Deskripsi */}
        <p className="font-inter font-medium text-sm sm:text-base lg:text-lg leading-relaxed text-center">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        {/* Kartu Aksi */}
        <div className="bg-accent flex flex-col gap-4 justify-center rounded items-start p-6 w-full max-w-md sm:max-w-lg h-auto">
          <p className="font-inter font-bold text-lg sm:text-xl lg:text-2xl text-wrap">
            Your destination is waiting. <br /> Your van is ready.
          </p>
          <Button variant="blacky" size="lg">
            Explore our vans
          </Button>
        </div>
      </article>
    </main>
  );
}

export default AboutHero;
