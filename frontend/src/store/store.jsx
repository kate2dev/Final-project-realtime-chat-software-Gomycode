// * combineReducers: This function combines multiple reducers into a single root reducer. Each reducer manages a different part of the state.

// createStore: This function creates the Redux store, which holds your application's state.

// applyMiddleware: Redux middleware allows you to extend Redux with custom functionality.Here, you're using middleware to handle asynchronous actions with redux-thunk.

// redux - thunk: This is a middleware that allows you to write action creators that return functions instead of plain objects.It’s useful for handling asynchronous logic, such as fetching data from an API.

import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import friendsReducer from "./reducers/friendsReducer";
// combineReducers is used to create a rootReducer by combining all individual reducers. Here, you're only using one reducer, authReducer, to manage the auth slice of the state.
const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
});


/*
createStore creates the Redux store by passing in:
The rootReducer (which combines all your individual reducers).
composeWithDevTools wraps applyMiddleware(thunk) to enable the Redux DevTools extension and allow middleware (thunk) to be used.
applyMiddleware(thunk) applies the redux-thunk middleware to the store. This allows your action creators to return functions (thunks) to handle asynchronous logic (like API calls).
*/

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
