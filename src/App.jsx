import { Home, Error } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import UserContext from "./globals/authprovider";
import Form from "./pages/Form/Form";
import "./App.css";

function App() {
  return (
    <>
      <UserContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </UserContext>
    </>
  );
}

export default App;
