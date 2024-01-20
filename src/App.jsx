import { Home, Error,Dashboard} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import UserContext from "./globals/authprovider";
import "./App.css";

function App() {
  return (
    <>
      <UserContext>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </UserContext>
    </>
  );
}

export default App;
