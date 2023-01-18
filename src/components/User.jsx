import { Box, Typography, useTheme, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import ProfileImage from "./ProfileImage";
import UserInfoWidget from "../displays/adminPages/DashBoardSegments/UserInfoWidget";

const User = ({
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    admintrator,
    ownedPets,
    shortBio,
    picturePath,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const token = useSelector((state) => state.token);
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    
    const numberOfPets= ownedPets.length

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
                            This is {firstName} {lastName}, they have adopted {numberOfPets} Pets
                           
                        </Typography>
                    </Box>
                </FlexBetween>
            </FlexBetween>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <UserInfoWidget
                    key={_id}
                    userId={_id}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phoneNumber={phoneNumber}
                    admintrator={admintrator}
                    ownedPets={ownedPets}
                    shortBio={shortBio}
                    picturePath={picturePath}
                />
            </Modal>
        </>
    );
};

export default User;
