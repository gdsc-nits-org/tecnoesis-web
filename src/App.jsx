import { Home, Error } from "./pages";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
