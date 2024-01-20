import { Home, Error, Registration, Dashboard, EventDescription } from "./pages";
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
          <Route path="*" element={<Error />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event" element={<EventDescription />} />
        </Routes>
        <Footer />
      </UserContext>
    </>
  );
}

export default App;
