import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import FlexBetween from "./FlexBetween";
import {
    FavoriteBorderOutlined,
    FavoriteOutlined,
} from "@mui/icons-material";
import WidgetWrapper from "./WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import setPostPet from "../states/index"

const PetCard = ({
     petID,
    name,
    petName,
    type,
    breed,
    picturePath,
    height,
    weight,
    color,
    shortBio,
    hypoallergenic,
    dietaryRestriction,
    adoptionStatus,
}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);

    const { palette } = useTheme();
    const main = "black";
    const primary = palette.primary.main;

    const patchAdopt = async () => {
        const response = await fetch(
            `http:localhost:3001/pets/${petID}/adoptionStatus`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    adoptionStatus: true}),
            }
        );
        const updatedPet = await response.json();
        dispatch(setPostPet({ pet: updatedPet }));
    };

    return (
        <WidgetWrapper m="2rem 0">
            
                
            <Box flexDirection="column" alignItems="start">
                <Typography color={main}  >
                    This Cutey is called {(!petName) ? name : petName}
                </Typography>
                {picturePath && (
                    <img
                    alignItems="start"
                        width="60%"
                        height="auto"
                        alt="pet"
                        style={{
                            borderRadius: "0.75rem",
                            marginTop: "0.75rem",
                        }}
                        src={`http://localhost:3001/assets/${picturePath}`}
                    />
                )}
                </Box>
                <Box flex="flex">
                    <Typography color={main} sx={{ mt: "1rem" }}>
                        Type:{type}
                    </Typography>
                    <Typography color={main} sx={{ mt: "1rem" }}>
                        Breed:{breed}
                    </Typography>
                    <Typography color={main} sx={{ mt: "1rem" }}>
                        Color: {color}
                    </Typography>
                </Box>
                <FlexBetween >
                    <Typography color={main} sx={{ mt: "1rem" }}>
                        Short Bio:{shortBio}
                    </Typography>
                    <Typography color={main} sx={{ mt: "1rem" }}>
                        Dietary Restrictions: {dietaryRestriction}
                    </Typography>
                </FlexBetween>
                <FlexBetween >
                    <IconButton onClick={patchAdopt}>
                        {adoptionStatus ? (
                            <FavoriteOutlined sx={{ color: primary }} />
                        ) : (
                            <FavoriteBorderOutlined />
                        )}
                    </IconButton>
                    <Typography>
                        {adoptionStatus ? "Adopted" : "Not Adopted"}
                    </Typography>
                </FlexBetween>
            
        </WidgetWrapper>
    );
};

export default PetCard;
