import { Home, Error, Dashboard, ModulePage, EventDescription, Form } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Navbar, Footer, Loading } from "./components";
import AuthProvider from "./globals/authprovider";
import LoadingProvider from "./globals/loading/loadingProvider";
import UserContext from "./globals/authprovider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
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
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModulePage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Loading" element={<Loading/>} />
          <Route path="/signup" element={<Form/>}/>
          <Route path="/event/:id" element={<EventDescription/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
        </AuthProvider>
      </LoadingProvider>
     
    </>
  );
}

export default App;
