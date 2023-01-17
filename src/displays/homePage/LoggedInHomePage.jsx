// import PetsList from '../adminPages/DashBoardSegments/FetchPets.jsx';
import { useSelector } from "react-redux";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import UserInfoWidget from "../adminPages/DashBoardSegments/UserInfoWidget.jsx";
import UserPetListWidget from "../../components/UserPetListWidget";
import GetSpecificPets from "../../components/GetSpecificPet.jsx";
import Pet from "../../components/Pet.jsx";
import PetsList from "../adminPages/DashBoardSegments/PetsList.jsx";
import { useNavigate } from "react-router-dom";

function LoggedInHomePage() {
  const navigate = useNavigate()

    const { _id, picturePath, firstName, lastName, ownedPets } = useSelector(
        (state) => state.user
    );
    const { palette } = useTheme();
    const routeChange = () =>{ 
      let path = `/search`; 
      navigate(path);
    }

    return (
        <>
            <UserInfoWidget userId={_id} picturePath={picturePath} />

            <PetsList thePets={ownedPets} />

            <Button
            onClick={routeChange}
                sx={{
                    justifyContent: "center",
                    width: "50%",
                    m: "2rem 25% 0 25%",
                    p: "1rem",
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                }}
            >
                Pet Search Page
            </Button>
        </>
    );
}

export default LoggedInHomePage;
