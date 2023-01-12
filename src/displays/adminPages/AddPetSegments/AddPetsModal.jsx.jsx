import { Box, Button, useTheme, Modal } from "@mui/material";
import { useState } from "react";
import PetForm from "./AddPetForm";

import Form from "./AddPetForm";

const AddPetModal = () => {
    const [open, setOpen] = useState(false);
    const { palette } = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            {/* <Button
                fullWidth
                type="submit"
                sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                }}
                onClick={handleOpen}
            >
                Show Modal
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                sx={{
                    m: "2rem",
                    p: "1rem",
                    backgroundColor: palette.background.default,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                }}
            >
                  </Modal> */}
                <PetForm />
          
        </Box>
    );
};

export default AddPetModal;