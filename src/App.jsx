import {
  Home,
  Error,
  Dashboard,
  ModulePage,
  EventDescription,
  Registration,
  Form,
} from "./pages";
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, Loading } from "./components";
import AuthProvider from "./globals/authprovider";
import LoadingProvider from "./globals/loading/loadingProvider";
import UserContext from "./globals/authcontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.setItem("loggedin", 1);
    } else {
      localStorage.setItem("loggedin", 0);
    }
  }, []);

  return (
    <>
      <AuthProvider>
        <LoadingProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<ModulePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Form />} />
            <Route path="/event/:id" element={<EventDescription />} />
            <Route path="/event/:id/registration" element={<Registration />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </LoadingProvider>
      </AuthProvider>
    </>
  );
}

export default App;
