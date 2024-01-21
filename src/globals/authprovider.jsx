import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
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

  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  let api_url = `${import.meta.env.VITE_BASE_URL}/api/auth/signup`;
  let api_url_me = `${import.meta.env.VITE_BASE_URL}/api/user/me`;

  const signup = async (data) => {
    try {
      let res = await signUpbackend(data);
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
    console.log(result.user);
    let token = await result.user.getIdToken();
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser("");
    setLoggedin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
      localStorage.setItem("user", JSON.stringify(res.data.msg));
      setUser(res.data.msg);
      setLoggedin(true);
    }
  };

  const signUpbackend = async (data) => {
    if (!user) {
      const header = {
        authorization: `Bearer ${getToken()}`,
      };
      let res = await axios.post(api_url, data, {
        headers: header,
      });
      if (res.status >= 200 && res.status < 300) {
        let newUser = await axios.get(api_url_me, {
          headers: header,
        });
        localStorage.setItem("user", JSON.stringify(newUser.data.msg));
        setUser(newUser.data.msg);
        setLoggedin(true);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
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
