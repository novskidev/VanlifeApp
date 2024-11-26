import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import VansDetails from "./pages/VansDetails";
import Dashboard from "./pages/Dashboard";
import ListedVans from "./pages/Listed";
import Layout from "./component/Layout";
import HostLayout from "./component/HostLayout";
import Review from "./pages/Reviews";
import Income from "./pages/Income";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VansDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="vans" element={<ListedVans />} />
              <Route path="income" element={<Income />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
