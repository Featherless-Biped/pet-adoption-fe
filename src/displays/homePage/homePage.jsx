import { Box, Typography, useTheme, useMediaQuery, } from "@mui/material";
import LoginPage from "../loginPage/loginPage";

const HomePage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
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

            <div>PET SEARCH PAGE!!!!!!!!!!</div>
        </Box>
    );
};

export default HomePage;
