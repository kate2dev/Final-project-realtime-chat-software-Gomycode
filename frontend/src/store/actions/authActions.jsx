import * as api from "../../api";
// import { openAlertMessage } from "./alertActions";
import { useNavigate } from "react-router-dom";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard"); // Use navigate instead of history.push
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.register(userDetails);
      console.log(response);

      if (response.error) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        const { userDetails } = response?.data;
        localStorage.setItem("user", JSON.stringify(userDetails));

        dispatch(setUserDetails(userDetails));
        navigate("/dashboard"); // Use navigate to redirect
      }
    } catch (error) {
      console.error("Registration error", error);
      // Optionally handle error by dispatching a failure action
    }
  };
};
