import React from "react";

function Review() {
  return (
    <main className="bg-primary">
      <div className="flex items-center h-auto p-6 gap-3">
        <h1 className="font-bold text-3xl">Your reviews </h1>
        <h2>
          last <span className="underline font-bold">30 days</span>
        </h2>
      </div>
    </main>
  );
}

export default Review;
