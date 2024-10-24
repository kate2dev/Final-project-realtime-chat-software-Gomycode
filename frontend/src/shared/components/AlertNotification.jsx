
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
// Imports the connect function from React Redux to connect the component to the Redux store.
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

// * Props
const AlertNotification = ({ showAlertMessage, closeAlertMessage, alertMessageContent }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={6000}
        >
            {/* Contains an Alert component with the info severity and the alertMessageContent as its message. */}
            <Alert severity="info">{alertMessageContent}</Alert>
        </Snackbar>
    );
};


// *  Maps the alert state from the Redux store to the component's props.
const mapStoreStateToProps = ({ alert }) => {
    return {
        ...alert,
    };
};


// Maps the action creators from the getActions function to the component's props.
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};


//  Connects the component to the Redux store using the mapStoreStateToProps and mapActionsToProps functions.
export default connect(
    mapStoreStateToProps,
    mapActionsToProps
)(AlertNotification);
