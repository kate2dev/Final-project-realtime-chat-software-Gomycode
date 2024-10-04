import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { useNavigate } from "react-router-dom"; // Using useNavigate for navigation
import { Tooltip } from "@mui/material";
import RedirectInfo from "../../shared/components/RedirectInfo";

// Function to provide form validation message when form is invalid
const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password should contain between 6 and 12 characters";
};

// Function to provide form validation message when form is valid
const getFormValidMessage = () => {
  return "Press to log in!";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Handler function to navigate to the register page
  const handlePushToRegisterPage = () => {
    navigate("/register");
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
