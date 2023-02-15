import React from "react";
import useAuthForm from "../hooks/useAuthForm";

const initialState = {
  userData: {
    username: "",
    password: "",
  },
  errors: {
    username: "",
    password: "",
  },
  isSubmitting: false,
  rememberUser: false,
};

const LoginPage = () => {
  const {
    userData,
    errors,
    isSubmitting,
    rememberUser,
    handleSubmit,
    handleChange,
    resetForm,
    toggleRememberUser,
  } = useAuthForm(initialState);

  const submitForm = () => {
    alert("Thanks for logging in.");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submitForm)}>
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
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            autoComplete="off"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <span className="error-msg">{errors.password}</span>
        </label>
        <br />
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

export default LoginPage;
