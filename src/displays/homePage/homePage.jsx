import { Box, Typography, useTheme, useMediaQuery, Button, } from "@mui/material";
import LoginPage from "../loginPage/loginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPets } from "../../states";

const HomePage = () => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const pets = useSelector((state) => state.pets);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { palette } = useTheme(); 
    
    
        const getAllPets = async () => {
            const response = await fetch("http://localhost:3001/pets", {
                method: "GET",
                
            });
            const data = await response.json();
            dispatch(setPets({ pets: data }));
        };
        useEffect(() => {
            getAllPets();
            console.log(pets);
        }, []);

    return (
        <Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    The Pet Adoption App
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to The Pet Adoption App, the Easiest Platform for
                    Finding your New Best Friend!
                </Typography>
            </Box>
            <LoginPage />

            <Button sx={{
                justifyContent: "center",
                width: "50%",
                m: "2rem 25% 0 25%",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}>Pet Search Page</Button>
        </Box>
    );
};

export default HomePage;
