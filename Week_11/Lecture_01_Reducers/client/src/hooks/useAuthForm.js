import { useReducer } from "react";

const useAuthForm = (initialState) => {
  const reducer = (state, action) => {
    const { type, payload } = action;
    const newState = JSON.parse(JSON.stringify(state));
    switch (type) {
      case "TOGGLE_REMEMBER_ME":
        newState.rememberUser = !state.rememberUser;
        return newState;
      case "TOGGLE_SUBMITTING":
        newState.isSubmitting = !state.isSubmitting;
        return newState;
      case "CHANGE_FORM_DATA":
        newState.userData[payload.name] = payload.value;
        return newState;
      case "RESET_DATA":
        return initialState;
      case "RESET_ERRORS":
        newState.errors = initialState.errors;
        return newState;
      case "SET_ERRORS":
        newState.errors = payload;
        return newState;
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) =>
    dispatch({ type: "CHANGE_FORM_DATA", payload: e.target });

  const toggleRememberUser = () => dispatch({ type: "TOGGLE_REMEMBER_ME" });

  const setErrors = (errors) => {
    dispatch({ type: "SET_ERRORS", payload: errors });
  };

  const resetForm = () => dispatch({ type: "RESET_DATA" });

  const clearErrors = () => dispatch({ type: "RESET_ERRORS" });

  const handleSubmit = (e, customSubmit) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "TOGGLE_SUBMITTING" });

    customSubmit();

    dispatch({ type: "TOGGLE_SUBMITTING" });
  };

  return {
    handleChange,
    toggleRememberUser,
    setErrors,
    resetForm,
    clearErrors,
    handleSubmit,
    ...data,
  };
};

export default useAuthForm;
