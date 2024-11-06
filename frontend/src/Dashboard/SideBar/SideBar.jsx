
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";

const MainContainer = styled("div")({
    flexGrow: 1,
    backgroundColor: "#36393f",
    marginTop: "48px",
    display: "flex",
});

const Messenger = () => {
    return <MainContainer>
        <MainPageButton />
    </MainContainer>;
};

export default Messenger;
