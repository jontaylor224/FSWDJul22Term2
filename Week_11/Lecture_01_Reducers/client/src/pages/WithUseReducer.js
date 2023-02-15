import React, { useReducer, useState } from "react";

const initialState = {
  userData: {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  errors: {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  rememberUser: false,
  isSubmitting: false,
};

// A reducer function should accept 2 parameters:
// - state
// - action
const reducer = (state, action) => {
  // Generally, the actions are going to have a TYPE,
  // and a PAYLOAD
  const { type, payload } = action;
  // I also like to make a copy of state, and then make
  // changes to that copy
  const newState = JSON.parse(JSON.stringify(state));

  // Inside of this function is where you do all
  // logic for EVERY WAY you might want to change
  // state

  // It is recommended that in a reducer, you use
  // a SWITCH statement
  switch (type) {
    case "TOGGLE_REMEMBER_ME":
      // whatever needs to be done to change
      // state (in this case, change the copy of state)
      newState.rememberUser = !state.rememberUser;
      // and then return the newState
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

const WithUseReducer = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) =>
    dispatch({ type: "CHANGE_FORM_DATA", payload: e.target });

  const toggleRememberUser = () => dispatch({ type: "TOGGLE_REMEMBER_ME" });

  const validate = () => {
    const errors = { ...initialState.errors };

    const { firstName, lastName, username, password, confirmPassword } =
      data.userData;

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

    if (!username) {
      errors.username = "Username is required.";
    } else if (username.length < 4) {
      errors.username = "Username must be at least 4 characters.";
    } else if (username.length > 20) {
      errors.username = "Username cannot be longer than 20 characters.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    } else if (password.length > 30) {
      errors.password = "Password cannot be longer than 30 characters.";
    }

    if (password && !confirmPassword) {
      errors.confirmPassword = "You must confirm your password.";
    } else if (password && password !== confirmPassword) {
      errors.confirmPassword = "Passwords must match.";
    }

    dispatch({ type: "SET_ERRORS", payload: errors });
  };

  const resetForm = () => dispatch({ type: "RESET_DATA" });

  const clearErrors = () => dispatch({ type: "RESET_ERRORS" });

  const handleSubmit = (e) => {
    console.log("Thanks for submitting your form");
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "TOGGLE_SUBMITTING" });

    validate();

    setTimeout(() => dispatch({ type: "TOGGLE_SUBMITTING" }), 1500);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="firstName"
            value={data.userData.firstName}
            onChange={handleChange}
          />
          <span className="error-msg">{data.errors.firstName}</span>
        </label>
        <label>
          Last Name:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="lastName"
            value={data.userData.lastName}
            onChange={handleChange}
          />
          <span className="error-msg">{data.errors.lastName}</span>
        </label>
        <label>
          Username:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="username"
            value={data.userData.username}
            onChange={handleChange}
          />
          <span className="error-msg">{data.errors.username}</span>
        </label>
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={data.userData.password}
            onChange={handleChange}
          />
          <span className="error-msg">{data.errors.password}</span>
        </label>
        <label>
          Confirm Password:
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={data.userData.confirmPassword}
            onChange={handleChange}
          />
          <span className="error-msg">{data.errors.confirmPassword}</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="rememberUser"
            checked={data.rememberUser}
            onChange={toggleRememberUser}
          />
          Remember Me
        </label>
        <br />
        <div className="form-buttons">
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
          <button type="submit" disabled={data.isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithUseReducer;
