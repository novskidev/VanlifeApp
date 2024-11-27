import React from "react";
import { reviewPic } from "../constant/iconConst";

function Review() {
  return (
    <main className="bg-primary h-screen w-full">
      <div className="flex items-center h-auto p-6 gap-3">
        <h1 className="font-bold text-3xl">Your reviews </h1>
        <h2>
          last <span className="underline font-bold">30 days</span>
        </h2>
      </div>
      <img className="p-5 " src={reviewPic} alt="" />
      <p className="font-bold text-[16px] px-6 py-5">Reviews</p>
      <p className="px-6">⭐⭐⭐⭐⭐</p>
      <p className="font-bold px-6 py-5">
        Sandy <span className="font-thin">November 23, 2022</span>{" "}
      </p>
      <p className="text-justify font-extralight pb-5 px-6">
        The beach bum is such as awesome van! Such as comfortable trip. We had
        it for 2 weeks and there was not a single issue. Super clean when we
        picked it up and the host is very comfortable and understanding. Highly
        recommend!
      </p>
    </main>
  );
}

export default Review;
