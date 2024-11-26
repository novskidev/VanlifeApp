import React from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";
import Button from "../component/Button";

function Login() {
  return (
    <div className="flex-grow h-screen">
      <main className="bg-primary flex flex-col items-center gap-2 px-4 sm:px-6 lg:px-8 h-full">
        <h1 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl mb-[48px] mt-[51px] text-center">
          Sign in to your account
        </h1>
        <form
          className="flex flex-col w-full max-w-md sm:max-w-lg mb-[47px]"
          action=""
        >
          <input
            className="h-[42px] px-3 py-3 border rounded-t-lg font-normal font-inter text-[14px] sm:text-[16px]"
            placeholder="Email address"
            type="email"
            name="email"
            id=""
          />
          <input
            className="h-[42px] px-3 py-3 mb-[22px] border rounded-b-lg font-normal font-inter text-[14px] sm:text-[16px]"
            placeholder="Password"
            type="password"
            name="password"
            id=""
          />
          <Button>Sign in</Button>
        </form>
        <h2 className="font-inter font-medium text-center text-sm sm:text-base mb-36">
          Don’t have an account?{" "}
          <span className="font-inter font-bold text-base text-[#FF8C38]">
            Create one now
          </span>
        </h2>
      </main>
    </div>
  );
}

export default Login;
