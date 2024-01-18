import { Error, Home} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import ModulePage from "./pages/ModulePage/ModulePage";

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<ModulePage/>} />
        <Route path="*" element={<Error/>} />
        
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
