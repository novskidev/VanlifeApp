import React from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";
import Button from "../component/Button";

function NotFound() {
  return (
    <div>
      <main className="h-screen bg-primary flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl leading-8 sm:leading-9 md:leading-10 font-bold text-hitam text-center mb-6 sm:mb-8 md:mb-[30px]">
          Sorry, the page you were <br className="hidden sm:block" /> looking
          for was not found.
        </h1>
        <Button variant="blacky" width="w-full sm:w-3/6 md:w-2/6">
          Return to home
        </Button>
      </main>
    </div>
  );
}

export default NotFound;
