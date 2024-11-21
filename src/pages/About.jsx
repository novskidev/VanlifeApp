import React from "react";
import Navbar from "../component/Nav";
import AboutHero from "../section/aboutHero";
import Footer from "../section/Footer";

function About() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <AboutHero />
      <Footer />
    </main>
  );
}

export default About;
