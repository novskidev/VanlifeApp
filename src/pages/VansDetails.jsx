import React from "react";
import { useParams } from "react-router";
import Nav from "../component/Nav";
import Footer from "../section/Footer";
import { useFetch } from "../constant/useFetch";

function VansDetails() {
  const params = useParams();
  const { vans, loading } = useFetch(`/api/vans/${params.id}`);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-primary w-screen h-screen">
        <h1 className="text-5xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <main>
        <h1>This is Details {vans.id} page</h1>
        <h2>{vans.name}</h2>
        <p>{vans.description}</p>
      </main>
      <Footer />
    </div>
  );
}

export default VansDetails;
