import { Home, Error, Dashboard,EventDescription } from "./pages";
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event/:id" element={<EventDescription/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </UserContext>
    </>
  );
}

export default App;
