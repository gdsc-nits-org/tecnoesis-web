import { Home, Error, Dashboard, EventDescription, ModulePage, Registration, Form } from "./pages";
import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import UserContext from "./globals/authcontext";
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
      <UserContext.Provider value={{
        setLoggedin
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event/:id" element={<EventDescription />} />
          <Route path="*" element={<Error />} />
          <Route path="/modules" element={<ModulePage />} />
          <Route path="/signup" element={<Form />} />

        </Routes>
        <Footer />
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
      </UserContext.Provider>
    </>
  );
}

export default App;
