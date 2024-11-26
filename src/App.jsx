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

function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VansDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route path="host" element={<HostLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="vans" element={<ListedVans />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
