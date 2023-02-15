import { useReducer } from "react";
import { auth, setAuthToken } from "../utils/authConfig";

const initialSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
};

const initialSignIn = {};

const reducer = (state, action) => {
  const { type, payload } = action;
  const { ...newState } = state;

  switch (type) {
    case "HANDLE_CHANGE":
      newState[payload.name] = payload.value;
      return newState;
    case "HANDLE_VALIDATE":
      newState.errors = payload;
      return newState;
    default:
      return state;
  }
};

const useLogReg = (action) => {
  const url = action.toLowerCase() === "signup" ? "/signup" : "/signin";
  const [data, dispatch] = useReducer(
    reducer,
    action.toLowerCase() === "signup" ? initialSignUp : initialSignIn
  );

  const EMAIL_REGEX =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  const handleChange = (e) => {
    dispatch({ type: "HANDLE_CHANGE", payload: e.target });
  };

  const validate = () => {
    let errors = {};
    switch (action.toLowerCase()) {
      case "signup":
        errors = validateSignUp(errors);
        break;
      case "signin":
        errors = validateSignIn(errors);
        break;
    }

    dispatch({ type: "HANDLE_VALIDATE", payload: errors });
    return errors;
  };

  const validateSignUp = (errors = {}) => {
    const { firstName, lastName, password, confirmPassword } = data;

    if (!firstName) {
      errors.firstName = "First name is required.";
    } else if (firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters.";
    } else if (firstName.length > 30) {
      errors.firstName = "First name cannot be longer than 30 characters.";
    }

    if (!lastName) {
      errors.lastName = "Last name is required.";
    } else if (lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters.";
    } else if (lastName.length > 30) {
      errors.lastName = "Last name cannot be longer than 30 characters.";
    }

    errors = validateSignIn(errors);

    if (!confirmPassword) {
      errors.confirmPassword = "You must confirm your password";
    } else if (password !== confirmPassword && !errors.password) {
      errors.confirmPassword = "Your passwords must match.";
    }

    return errors;
  };

  const validateSignIn = (errors = {}) => {
    const { email, password } = data;
    if (!email) {
      errors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Invalid email address format.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    } else if (password.length > 30) {
      errors.password = "Password cannot be longer than 30 characters.";
    }

    return errors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const errors = validate();

      console.log(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }

      const { errors: _, ...body } = data;
      await auth.post(url, body);
      const { accessToken } = await auth.post("/signin", {
        email: data.email,
        password: data.password,
      });

      setAuthToken(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const errors = validate();

      if (Object.keys(errors).length > 0) {
        return;
      }

      const { errors: _, ...body } = data;
      const { accessToken } = await auth.post("/signin", body);

      setAuthToken(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    handleChange,
    validate,
    handleSignup,
  };
};

export default useLogReg;
