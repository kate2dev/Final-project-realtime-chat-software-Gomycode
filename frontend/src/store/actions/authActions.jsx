import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};



// This function returns an object with login and register methods that dispatch their respective actions.
export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};


// This function returns an object with login and register methods that dispatch their respective actions.
const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};


// This is an async action creator that:

// Calls the login API
// Dispatches an alert message if there's an error
// If successful, stores user details in localStorage, dispatches the setUserDetails action, and navigates to the dashboard
const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};
