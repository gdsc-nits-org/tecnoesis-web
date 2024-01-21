import React, { useState } from "react";
import { Home, Error, Dashboard } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev); 
  };

  return (
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
        path="*"
        element={<Error toggleNavbar={toggleNavbar} />}
      />
    </Routes>
  );
}

export default App;
