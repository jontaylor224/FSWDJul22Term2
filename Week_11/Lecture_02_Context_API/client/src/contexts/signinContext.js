import { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";

const initialState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  submitting: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  const newState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case "HANDLE_CHANGE":
      newState.form[payload.name] = payload.value;
      return newState;
    case "RESET_FORM":
      return initialState;
    case "RESET_ERRORS":
      newState.errors = initialState.errors;
      return newState;
    case "SET_ERRORS":
      newState.errors = payload;
      return newState;
    case "TOGGLE_SUBMIT":
      newState.submitting = !state.submitting;
      return newState;
    case "START_SUBMIT":
      newState.submitting = true;
      return newState;
    case "STOP_SUBMIT":
      newState.submitting = false;
      return newState;
    default:
      return state;
  }
};

// Step 1: Create Context
export const signinContext = createContext();

// Step 2: Provide Context
export const SignInProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: e.target,
    });
  };

  const resetForm = () => dispatch({ type: "RESET_FORM" });
  const resetErrors = () => dispatch({ type: "RESET_ERRORs" });
  const setErrors = (errors) =>
    dispatch({ type: "SET_ERRORS", payload: errors });
  const toggleSubmit = () => dispatch({ type: "TOGGLE_SUBMIT" });
  const startSubmit = () => dispatch({ type: "START_SUBMIT" });
  const stopSubmit = () => dispatch({ type: "STOP_SUBMIT" });

  return (
    <signinContext.Provider
      value={{
        form: state.form,
        errors: state.errors,
        handleChange,
        resetForm,
        resetErrors,
        setErrors,
        toggleSubmit,
        startSubmit,
        stopSubmit,
      }}
    >
      <Outlet />
    </signinContext.Provider>
  );
};
