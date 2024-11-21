import React from "react";
import { aboutPic } from "../constant/iconConst";
import Button from "../component/Button";

function AboutHero() {
  return (
    <main className="flex flex-col justify-center">
      <img
        className="h-full w-screen object-cover"
        src={aboutPic}
        alt="about picture"
      />
      <article className="bg-primary py-[31px] px-[26px] h-auto flex flex-col items-center justify-center gap-4 ">
        <p
          className="font-inter font-bold text-[32px] text-wrap text-center leading-8
        "
        >
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="font-inter font-medium text-base text-wrap leading-8 text-center">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉){" "}
          <br></br> Our team is full of vanlife enthusiasts who know firsthand
          the magic of touring the world on 4 wheels.
        </p>
        <div className="bg-accent flex  flex-col gap-4 justify-center rounded items-start p-5 w-[420px] h-[200px]">
          <p className="font-inter font-bold text-2xl text-wrap font-">
            Your destination is waiting. <br></br> Your van is ready.
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
