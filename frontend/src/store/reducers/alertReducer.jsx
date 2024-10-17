// The alertActions object contains action types that will trigger showing and hiding alert messages.
import alertActions from "../actions/alertActions";


// defines the initial state for the alert system
const initState = {
    // This indicates whether the alert message is visible. Initially, it is set to false, meaning the alert is not being shown.
    showAlertMessage: false,
    // This holds the content of the alert message.Initially, it is set to null, meaning no message is available when the app starts.
    alertMessageContent: null,
};


/*
* `state`: The current state of the alert system. If the state is undefined (like when the app first loads), it defaults to initState.


* `action`: The action dispatched to modify the alert state. Each action has a type and any additional data related to that action (e.g., the alert message content).
*/
const reducer = (state = initState, action) => {
    // The switch statement checks the type of the action to determine how the state should be updated.
    switch (action.type) {

        /*
        * When the action type is OPEN_ALERT_MESSAGE, the reducer updates the state as follows:
        `showAlertMessage` is set to true, which will make the alert message visible.

        `alertMessageContent` is updated with the message content from action.content. This content is passed when dispatching the action, which contains the message to display.

        */
        case alertActions.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case alertActions.CLOSE_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null,
            };
        default:
            return state;
    }
};

export default reducer;
