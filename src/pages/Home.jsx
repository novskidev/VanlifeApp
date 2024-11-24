import React from "react";
import Navbar from "../component/Nav";
import Hero from "../section/Hero";
import Footer from "../section/Footer";

function Home() {
  return (
    <div className="h-auto">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
