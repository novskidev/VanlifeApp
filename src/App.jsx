import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Vans />
    </div>
  );
}

export default App;
