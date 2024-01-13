import { Home, Error,EventDescription} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer} from "./components";

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventDescription/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
