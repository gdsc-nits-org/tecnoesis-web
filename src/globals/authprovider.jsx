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

  let api_url = `${import.meta.env.BASE_URL}/api/auth/signup`;
  let api_url_me = `${import.meta.env.BASE_URL}api/user/me`;

  const extractUserDetails = (user) => {
    const { firstName, middleName, lastName } = splitDisplayName(
      user.displayName
    );
    let data = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      collegeName: "NITS",
      email: user.email,
      imageUrl: user.photoUrl,
    };
    return data;
  };
  function splitDisplayName(displayName) {
    const words = displayName.split(" ");
    const nameCount = words.length;

    if (nameCount === 1) {
      return {
        firstName: words[0],
        middleName: "",
        lastName: "",
      };
    } else if (nameCount === 2) {
      return {
        firstName: words[0],
        middleName: "",
        lastName: words[1],
      };
    } else if (nameCount === 3) {
      return {
        firstName: words[0],
        middleName: words[1],
        lastName: words[2],
      };
    } else {
      return {
        firstName: words[0],
        middleName: words.slice(1, -1).join(" "),
        lastName: words[words.length - 1],
      };
    }
  }

  const signup = async (data) => {
    try {
      let newUser = { ...user, ...data };
      let res = await signUpbackend(newUser, token);
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async () => {
    try {
      await GoogleSignin();
      await signinbackend(token);
    } catch (error) {
      if (error.response.status !== 200) {
        throw new Error("User not found");
      }
      return error.data;
    }
  };

  const GoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({});
    const result = await signInWithPopup(auth, provider);
    const newUser = extractUserDetails(result.user.reloadUserInfo);
    setUser(newUser);
    let token = await result.user.getIdToken();
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const logout = async () => {
    setUser(undefined);
    await signOut(auth);
    localStorage.removeItem("token");
    navigate("/");
  };

  const signinbackend = async (token) => {
    const header = {
      authorization: `Bearer ${token}`,
    };
    let res = await axios.get(api_url_me, {
      headers: header,
    });
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
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
