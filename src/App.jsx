import { Home, Error, Dashboard,ModulePage,EventDescription } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import UserContext from "./globals/authprovider";
import "./App.css";

function App() {
  return (
    <>
      
      <UserContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModulePage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event" element={<EventDescription/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </UserContext>
    </>
  );
}

export default App;
