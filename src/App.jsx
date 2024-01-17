import { Error, Home} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

import "./App.css";
import Module from "./components/Module/Module";
// import ModulePage from "./pages/ModulePage/ModulePage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Module/>} />
        {/* <Route path="/modules" element={<ModulePage/>} /> */}
        <Route path="*" element={<Error/>} />
        
        {/* <Route path="/modules" element={<Module/>} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
