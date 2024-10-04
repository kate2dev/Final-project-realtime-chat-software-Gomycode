import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { Tooltip } from "@mui/material";
import RedirectInfo from "../../shared/components/RedirectInfo";

// Message for invalid form
const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password should contain between 6 and 12 characters";
};

// Message for valid form
const getFormValidMessage = () => {
  return "Press to log in!";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to navigate to the register page
  const handlePushToRegisterPage = () => {
    navigate("/register"); // Use navigate instead of history.push
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage} // Correct handler for redirection
      />
    </>
  );
};

export default LoginPageFooter;
