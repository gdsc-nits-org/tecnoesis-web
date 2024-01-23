import {
  Home,
  Error,
  Dashboard,
  ModulePage,
  EventDescription,
  Form,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Navbar, Footer, Loading } from "./components";
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
  const { setLoggedin } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedin(true);
    }
  }, []);

  return (
    <>
      <LoadingProvider>
        <AuthProvider>
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
            <Route path="/Loading" element={<Loading />} />
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
        </AuthProvider>
      </LoadingProvider>
    </>
  );
}

export default App;