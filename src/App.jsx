import { Home, Error, Dashboard, ModulePage, EventDescription, Form } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import React, { useState } from "react";
import UserContext from "./globals/authprovider";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <>
      <UserContext>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showNavbar && <Navbar />}
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/modules"
            element={
              <>
                {showNavbar && <Navbar />}
                <ModulePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                {showNavbar && <Navbar />}
                <Dashboard />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {showNavbar && <Navbar />}
                <Form />
                <Footer />
              </>
            }
          />
          <Route
            path="/event/:id"
            element={
              <>
                {showNavbar && <Navbar />}
                <EventDescription />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Error toggleNavbar={toggleNavbar} />} />
        </Routes>
            
      </UserContext>
    </>
  );
}

export default App;
