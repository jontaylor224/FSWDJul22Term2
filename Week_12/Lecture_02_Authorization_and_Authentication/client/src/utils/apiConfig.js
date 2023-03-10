import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api",
});

export const setApiToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
