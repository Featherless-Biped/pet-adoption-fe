import { Box, Button, useTheme, Modal } from "@mui/material";
import { useState } from "react";
import Form from "./Form";

const LoginPage = () => {
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
            <Button
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
                <Form padding="2rem" backgroundColor="white"/>
            </Modal>
        </Box>
    );
};

export default LoginPage;

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// function App() {
//   const [open, setOpen] = useState(false);
//   const classes = useStyles();

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Show Modal
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <div className={classes.paper}>
//           <h2 id="simple-modal-title">Hello, friend!</h2>
//         </div>
//       </Modal>
//     </div>
//   );
// }
