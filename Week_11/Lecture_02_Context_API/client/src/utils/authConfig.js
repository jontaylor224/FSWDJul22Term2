import axios from "axios";

export const auth = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL || "/auth",
});

auth.interceptors.response.use((res) => res.data);

export const setAuthAuth = (token) => {
  if (token) {
    auth.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete auth.defaults.headers.common["Authorization"];
  }
};
