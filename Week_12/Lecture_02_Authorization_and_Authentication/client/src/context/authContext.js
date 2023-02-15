import { createContext, useContext, useEffect, useReducer } from "react";
import { setApiToken } from "../utils/apiConfig";
import { auth, setAuthToken } from "../utils/authConfig";

const initialState = {
  isAuthenticated: undefined,
  user: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case "LOG_IN":
      newState.isAuthenticated = true;
      newState.user = payload;
      return newState;
    case "LOG_OUT":
      newState.isAuthenticated = false;
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    auth.get("/session").then((response) => {
      if (response.message === "No session") {
        setAuthToken();
        setApiToken();
        dispatch({ type: "LOG_OUT" });
      } else {
        setAuthToken(response.accessToken);
        setApiToken(response.accessToken);
        dispatch({ type: "LOG_IN", payload: response.user });
      }
      // dispatch({ type: "LOG_IN", payload: response.user });
    });
  }, []);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const { state, dispatch } = useContext(authContext);

  const signOut = () => {
    auth.delete("/session").then((response) => {
      setAuthToken();
      setApiToken();
      dispatch({ type: "LOG_OUT" });
    });
  };

  return {
    auth: state,
    signOut,
  };
};
