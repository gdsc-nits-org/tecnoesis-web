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
import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
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
  // const { setLoggedin } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    if (localStorage.getItem("token")) {
      localStorage.setItem("loggedin", 1);
    } else {
      localStorage.setItem("loggedin", 0);
    }

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
            <Route path="/team" element={<TeamPage/>}/>
            <Route path="*" element={<Error toggleNavbar={toggleNavbar} />} />
          </Routes>
        </LoadingProvider>
      </AuthProvider>
    </>
  );
}

export default App;