import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "./authcontext";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  const auth = getAuth();

  let api_url = BASE_URL + `/api/auth/signup`;
  let api_url_me = BASE_URL + `/api/user/me`;

  const signup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({});
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      let token = await user.getIdToken();
      setToken(token);
      localStorage.setItem("token", JSON.stringify(token));
      await signUpbackend(data, token);
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({});
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const user = result.user;
      setUser(user);
      let token = await user.getIdToken();
      setToken(token);
      localStorage.setItem("token", JSON.stringify(token));
      await signinbackend(token);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setUser(undefined);
    await signOut(auth);
    localStorage.removeItem("token");
    navigate("/");
  };

  const data = {
    username: "",
    firstName: "",
    lastName: "",
    collegeName: "",
    email: "",
    phoneNumber: "",
  };

  const signinbackend = async (token) => {
    const header = {
      authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.get(api_url_me, {
        headers: header,
      });
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
      }
    } catch (error) {
      throw new Error("User not found");
    }
  };

  const signUpbackend = async (data, token) => {
    try {
      if (user) {
        const header = {
          authorization: `Bearer ${token}`,
        };
        let res = await axios.post(api_url, data, {
          headers: header,
        });
        if (res.ok) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
        }
      }
    } catch (error) {
      if (error.response.status === 409) {
        throw new Error("User already exists");
      }
      let errMessage = error.response.data.msg;
      errMessage = errMessage.toLowerCase();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        signup,
        logout,
        signin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
