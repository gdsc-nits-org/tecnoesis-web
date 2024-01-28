import {
  Home,
  Error,
  Dashboard,
  ModulePage,
  EventDescription,
  Registration,
  Form,
  TeamPage
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Loading, Navbar2 } from "./components";
import { useState, useEffect, useContext } from "react";
import AuthProvider from "./globals/authprovider";
import LoadingProvider from "./globals/loading/loadingProvider";
import UserContext from "./globals/authcontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };
  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      localStorage.setItem("loggedin", 1);
    } else {
      localStorage.setItem("loggedin", 0);
    }
    return () => clearTimeout(timer);
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

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/modules"
              element={
                <>
                  <ModulePage />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route path="/Loading" element={<Loading />} />
            <Route
              path="/signup"
              element={
                <>
                  <Form />
                </>
              }
            />
            <Route
              path="/event/:id"
              element={
                <>
                  <EventDescription />
                </>
              }
            />
            <Route
              path="/event/:id/registration"
              element={
                <>
                  <Registration />
                </>
              }
            />
            <Route
              path="/team"
              element={
                <>
                  <TeamPage />
                </>
              }
            />
            <Route path="*" element={<Error/>} />
          </Routes>
        </LoadingProvider>
      </AuthProvider>
    </>
  );
}

export default App;
