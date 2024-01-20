import { Home, Error,Dashboard, ModulePage} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

import "./App.css";


function App() {
  return (
    <>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<ModulePage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
