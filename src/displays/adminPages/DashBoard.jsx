import UsersList from "./DashBoardSegments/UsersList";
import PetsList from "./DashBoardSegments/PetsList";
import Navbar from "../navbar/Navbar";
// import UserInfoModal from "./DashBoardSegments/UserInfoModal";
// import PetInfoModal from "./DashBoardSegments/PetInfoModal";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import GetFields from "../../components/GetFields";

const Dashboard = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:500px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    const pets = useSelector((state) => state.pets);
    const petIds = GetFields(pets, "_id")
    console.log(petIds)
    // console.log(petIds)
    return (
        <Box>
            <Navbar />

            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "42%" : undefined}>
                    {/* <UsersList /> */}
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "52%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <PetsList thePets={petIds}/>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
