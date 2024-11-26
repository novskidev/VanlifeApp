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

function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/host/dashboard" element={<Dashboard />} />
          <Route path="/host/vans" element={<ListedVans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
