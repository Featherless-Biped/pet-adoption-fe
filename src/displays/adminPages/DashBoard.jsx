import UsersList from "../../components/UserList"
import PetsList from "./DashBoardSegments/PetsList";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import GetFields from "../../components/GetFields";
import { useEffect } from "react";
import {  setAllUsers } from "../../states";


const Dashboard = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:500px)");
    const dispatch = useDispatch()
    // const { _id, picturePath } = useSelector((state) => state.user);
    const pets = useSelector((state) => state.pets);
    const petIds = GetFields(pets, "_id")
    const token = useSelector((state) => state.token);

    const GetAllUsers = async () => {
        const response = await fetch(`http://localhost:3001/users`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setAllUsers({users: data})) ;
    };
    useEffect(() => {
        GetAllUsers()
        console.log(users);

    }, []);
    const users = useSelector((state) => state.users)

    return (
        <Box>

            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "42%" : undefined}>
                    <UsersList theUsers={users} />
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
