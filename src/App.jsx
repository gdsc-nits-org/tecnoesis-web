import { Home, Error } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

import "./App.css";
import Module from "./pages/Module/Module";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Module/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
