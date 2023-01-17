import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    Button,
    Modal,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import setUserPets, { setPets } from "../states/index";
import FlexBetween from "./FlexBetween";
import ProfileImage from "./ProfileImage";
import PetCard from "./PetCard";

const Pet = ({
    petId,
    name,
    petName,
    type,
    breed,
    height,
    weight,
    color,
    shortBio,
    hypoalergenic,
    dietaryRestrictions,
    picturePath,
    adoptionStatus,
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const [pet, setPet] = useState(null)
    // const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    // const pets = useSelector((state) => state.user.pets);

    const { palette } = useTheme();
    // const primaryLight = palette.primary.light;
    // const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    // const isAdopted = pets.find((pet) => pet._id === petId);
    const GetSpecificPets = async () => {
        const token = useSelector((state) => state.token);
        // const dispatch = useDispatch();
        const response = await fetch(`http://localhost:3001/pets/`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        console.log(data);
        setPets(data);
    };
    useEffect(() => {
        GetSpecificPets();
    }, []);

    // const patchPetAdoptionStatus = async () => {
    //   const response = await fetch(
    //     `http://localhost:3001/users/${_id}/${petId}`,
    //     {
    //       method: "PATCH",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   dispatch(setUserPets({ pets: data }));
    // };

    return (
        <>
            <FlexBetween>
                <FlexBetween gap="1rem">
                    <ProfileImage image={picturePath} size="55px" />
                    <Box onClick={handleOpen}>
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
                            This is {!petName ? name : petName} the {breed}{" "}
                            {type}
                        </Typography>
                    </Box>
                </FlexBetween>
                {/* <IconButton
        onClick={() => patchPetAdoptionStatus()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isAdopted ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton> */}
            </FlexBetween>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PetCard
                    petID={petId}
                    name={name}
                    petName={petName}
                    breed={breed}
                    dietaryRestriction={dietaryRestrictions}
                    type={type}
                    height={height}
                    weight={weight}
                    color={color}
                    shortBio={shortBio}
                    picturePath={picturePath}
                />
            </Modal>
        </>
    );
};

export default Pet;
