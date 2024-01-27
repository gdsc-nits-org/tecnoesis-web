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
  const [loading, setLoading] = useState(true);
  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
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
                  {showNavbar && <Navbar2 />}
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/modules"
              element={
                <>
                  {showNavbar && <Navbar2 />}
                  <ModulePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  {showNavbar && <Navbar2 />}
                  <Dashboard />
                  <Footer />
                </>
              }
            />
            <Route path="/Loading" element={<Loading />} />
            <Route
              path="/signup"
              element={
                <>
                  {showNavbar && <Navbar2 />}
                  <Form />
                  <Footer />
                </>
              }
            />
            <Route
              path="/event/:id"
              element={
                <>
                  {showNavbar && <Navbar2 />}
                  <EventDescription />
                  <Footer />
                </>
              }
            />
            <Route
              path="/event/:id/registration"
              element={
                <>
                  {showNavbar && <Navbar2 />}
                  <Registration />
                  <Footer />
                </>
              }
            />
            <Route
              path="/team"
              element={
                <>
                  {showNavbar && <Navbar2 />}
                  <TeamPage />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<Error toggleNavbar={toggleNavbar} />} />
          </Routes>
        </LoadingProvider>
      </AuthProvider>
    </>
  );
}

export default App;
