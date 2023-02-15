import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/authConfig";
import { toast } from "react-toastify";
import { setApiAuth } from "../utils/apiConfig";

const initialState = {
  isAuthenticated: undefined,
  uid: null,
  email: null,
  token: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  const newState = { ...state };

  switch (type) {
    case "LOGIN":
      newState.isAuthenticated = true;
      newState.uid = payload.sub;
      newState.email = payload.email;
      newState.token = payload.token;
      return newState;
    case "LOGOUT":
      newState.isAuthenticated = false;
      newState.uid = null;
      newState.email = null;
      newState.token = null;
      return newState;
  }
};

// Step 1: Create my Auth Context
export const authContext = createContext();

// Step 2: Build the Provider that will Provide our Auth Context
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const signUp = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    return auth
      .post("/signup", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        setApiAuth(res.token);
        dispatch({
          type: "LOGIN",
          payload: res,
        });
        toast.success(`Welcome, ${res.email}`);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const signIn = async (email, password) => {
    return auth
      .post("/signin", { email, password })
      .then((res) => {
        setApiAuth(res.token);
        dispatch({
          type: "LOGIN",
          payload: res,
        });
        toast.success(`Welcome, ${res.email}`);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const signOut = () => dispatch({ type: "LOGOUT" });

  return (
    <authContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        uid: state.uid,
        email: state.email,
        token: state.token,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
