import { AddCircle } from "@mui/icons-material";
import { RemoveCircle } from "@mui/icons-material";
import { Box, useTheme } from "@mui/system";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FlexBetween from "./FlexBetween";
import { setPets } from "../states";
import ProfileImage from "./ProfileImage";
import { useNavigate } from "react-router-dom";

const UserPets = ({
    petID,
    petName,
    breed,
    type,
    height,
    weight,
    color,
    petPicturePath,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const ownedPets = useSelector((state) => state.user.ownedPets);

    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const isOwned = ownedPets.find((pet) => pet._id === petID);

    const patchPet = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${_id}/${petID}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        dispatch(setPets({ pets: data }));
    };

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <ProfileImage image={petPicturePath} size="55px" />
                <Box
                    onClick={() => {
                        navigate(`/profile/${petID}`);
                        navigate(0);
                    }}
                >
                    <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: palette.primary.light,
                                cursor: "pointer",
                            },
                        }}
                    >
                        {petName}
                    </Typography>
                    <Typography color={medium} fontSize="0.75rem">
                        {breed}
                    </Typography>
                </Box>
            </FlexBetween>
            <IconButton
                onClick={() => patchPet()}
                sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
            >
                {isOwned ? (
                    <RemoveCircle sx={{ color: primaryDark }} />
                ) : (
                    <AddCircle sx={{ color: primaryDark }} />
                )}
            </IconButton>
        </FlexBetween>
    );
};

export default UserPets;
