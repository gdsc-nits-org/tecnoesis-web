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
  const { token,
    signup,
    logout,
    signin,
    loggedin,
    setLoggedin } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedin(true);
    }
  }, []);

  return (
    <>
      <AuthProvider>
        <LoadingProvider>
          <UserContext.Provider value={{
            token,
            signup,
            logout,
            signin,
            loggedin,
            setLoggedin,
          }}>
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
          </UserContext.Provider>
        </LoadingProvider>
      </AuthProvider>
    </>
  );
}

export default App;
