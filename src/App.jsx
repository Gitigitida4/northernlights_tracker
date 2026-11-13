import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;