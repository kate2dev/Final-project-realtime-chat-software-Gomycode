import * as api from "../../api";
// import { openAlertMessage } from "./alertActions";




//  This defines a constant object authActions with a single property SET_USER_DETAILS.This property holds a string that will be used to identify the action type when dispatching it.
export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};



// This function returns an object with login and register methods that dispatch their respective actions.

/**
 * This function returns an object with login and register methods. These methods take userDetails and history as arguments and dispatch the corresponding action creators (login and register) with these arguments. This is a common pattern in Redux to bind action creators to the dispatch function for easier use in components.
 *  */
export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};





/**
 * This is a simple action creator that returns an object with the type property set to authActions.SET_USER_DETAILS and the userDetails property containing the user details. This action will be dispatched to update the Redux store with the user's information
 * 
 * 
 */
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

// * These are async action creators that handle the login and registration processes, respectively.
const login = (userDetails, history) => {
  return async (dispatch) => {
    // * They call the corresponding API functions(api.login or api.register) to make the network request.
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {

      // If the API call is successful, they store the user details in local storage,
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      // * dispatch the setUserDetails action to update the Redux store, and navigate to the /dashboard page using the history object.
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
