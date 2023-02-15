import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthForm from "../hooks/useAuthForm";

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

const WithHookForReducer = () => {
  const {
    userData,
    errors,
    rememberUser,
    isSubmitting,
    setErrors,
    handleChange,
    handleSubmit,
    resetForm,
    toggleRememberUser,
  } = useAuthForm(initialState);

  const navigate = useNavigate();

  const validate = () => {
    const errors = { ...initialState.errors };
    let isValid = true;

    const { firstName, lastName, username, password, confirmPassword } =
      userData;

    if (!firstName) {
      isValid = false;
      errors.firstName = "First name is required.";
    } else if (firstName.length < 2) {
      isValid = false;
      errors.firstName = "First name must be at least 2 characters.";
    } else if (firstName.length > 30) {
      isValid = false;
      errors.firstName = "First name cannot be longer than 30 characters.";
    }
    if (!lastName) {
      isValid = false;
      errors.lastName = "Last name is required.";
    } else if (lastName.length < 2) {
      isValid = false;
      errors.lastName = "Last name must be at least 2 characters.";
    } else if (lastName.length > 30) {
      isValid = false;
      errors.lastName = "Last name cannot be longer than 30 characters.";
    }

    if (!username) {
      isValid = false;
      errors.username = "Username is required.";
    } else if (username.length < 4) {
      isValid = false;
      errors.username = "Username must be at least 4 characters.";
    } else if (username.length > 20) {
      isValid = false;
      errors.username = "Username cannot be longer than 20 characters.";
    }

    if (!password) {
      isValid = false;
      errors.password = "Password is required.";
    } else if (password.length < 8) {
      isValid = false;
      errors.password = "Password must be at least 8 characters.";
    } else if (password.length > 30) {
      isValid = false;
      errors.password = "Password cannot be longer than 30 characters.";
    }

    if (password && !confirmPassword) {
      isValid = false;
      errors.confirmPassword = "You must confirm your password.";
    } else if (password && password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Passwords must match.";
    }

    setErrors(errors);
    return isValid;
  };

  const submitForm = () => {
    if (!validate()) {
      alert("Please check your stuff and resubmit");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submitForm)}>
        <label>
          First Name:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
          <span className="error-msg">{errors.firstName}</span>
        </label>
        <label>
          Last Name:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
          <span className="error-msg">{errors.lastName}</span>
        </label>
        <label>
          Username:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
          <span className="error-msg">{errors.username}</span>
        </label>
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <span className="error-msg">{errors.password}</span>
        </label>
        <label>
          Confirm Password:
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          <span className="error-msg">{errors.confirmPassword}</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="rememberUser"
            checked={rememberUser}
            onChange={toggleRememberUser}
          />
          Remember Me
        </label>
        <br />
        <div className="form-buttons">
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithHookForReducer;
