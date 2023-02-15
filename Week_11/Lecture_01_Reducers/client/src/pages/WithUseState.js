import React, { useState } from "react";

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

const WithUseState = () => {
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({
      ...data,
      userData: {
        ...data.userData,
        [e.target.name]: e.target.value,
      },
    });
  };

  const toggleRememberUser = (e) => {
    setData({
      ...data,
      rememberUser: !data.rememberUser,
    });
  };

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

    setData({
      ...data,
      errors,
    });
  };

  const resetForm = () => {
    setData(initialState);
  };

  const clearErrors = () => {
    setData({
      ...data,
      errors: {
        ...initialState.errors,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* your fields here */}
        <input type="submit" disabled={data.isSubmitting} value="Submit" />
      </form>
    </div>
  );
};

export default WithUseState;
