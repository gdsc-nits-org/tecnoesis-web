import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./authcontext";

const getToken = () => {
  const token = localStorage.getItem("token") || "";
  return token;
};

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [loggedin, setLoggedin] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [email, setEmail] = useState("");
  let api_url = `${import.meta.env.VITE_BASE_URL}/api/auth/signup`;
  let api_url_me = `${import.meta.env.VITE_BASE_URL}/api/user/me`;

  const signup = async (data) => {
    try {
      await signUpbackend({ ...data, email });
      return {
        message: "User logged in successfully",
        status: 200,
      };
    } catch (error) {
      return {
        message: error?.response?.data?.msg,
        status: error?.response?.data?.status || error?.response?.status || 500,
      };
    }
  };

  const signin = async () => {
    try {
      await GoogleSignin();
      await signinbackend();
      return {
        message: "User logged in successfully",
        status: 200,
      };
    } catch (error) {
      return {
        message: error?.response?.data?.msg,
        status: error?.response?.data?.status || error?.response?.status || 500,
      };
    }
  };

  const GoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({});
    const result = await signInWithPopup(auth, provider);
    setEmail(result.user.email);
    let token = await result.user.getIdToken();
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setLoggedin(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  const signinbackend = async () => {
    const header = {
      authorization: `Bearer ${getToken()}`,
    };
    let res = await axios.get(api_url_me, {
      headers: header,
    });
    if (res.status >= 200 && res.status < 300) {
      setLoggedin(true);
    }
  };

  const signUpbackend = async (data) => {
    const header = {
      authorization: `Bearer ${getToken()}`,
    };
    let res = await axios.post(api_url, data, {
      headers: header,
    });
    if (res.status >= 200 && res.status < 300) {
      setLoggedin(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        signup,
        logout,
        signin,
        loggedin,
        setLoggedin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
