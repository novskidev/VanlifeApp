import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <NotFound />
    </div>
  );
}

export default App;
