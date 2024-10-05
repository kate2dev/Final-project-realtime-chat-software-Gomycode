import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom"; // 
import { Tooltip } from "@mui/material";

// Function to provide the form invalid message
const getFormNotValidMessage = () => {
  return "Username should contain between 3 and 12 characters, password should contain between 6 and 12 characters, and a valid e-mail address should be provided.";
};

// Function to provide the form valid message
const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to navigate to the login page
  const handlePushToLoginPage = () => {
    navigate("/login"); // Use navigate instead of history.push
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage} // Correct handler for redirection
      />
    </>
  );
};

export default RegisterPageFooter;
