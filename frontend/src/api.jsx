import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5004/api",
  timeout: 2000,
});

// * These functions intercept outgoing requests before they are sent to the server.
apiClient.interceptors.request.use(
  (config) => {
    // The first interceptor checks for a user item in local storage.
    // If found, it parses it as JSON, extracts the token property, and sets the Authorization header in the request with a Bearer ${ token } format.This is a common way to send authentication tokens with API requests.
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// public routes

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
