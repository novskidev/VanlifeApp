import { useEffect, useState } from "react";
import Navbar from "../component/Nav";
import Footer from "../section/Footer";

function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vans:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <h1>Vans List</h1>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            <h2>{van.name}</h2>
            <p>{van.description}</p>
            <img src={van.imageUrl} alt={van.name} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Vans;
