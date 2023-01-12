import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
    FormControlLabel,
    ToggleButtonGroup,
    alignment,
    ToggleButton,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setLogin } from "../../states";
import Dropzone from "react-dropzone";
import FlexBetween from "../../../components/FlexBetween";
import { setPostPet } from "../../../states";

const registerPetSchema = yup.object().shape({
    petName: yup.string().required("required"),
    type: yup.string().required("required"),
    breed: yup.string().required("required"),
    height: yup.string().required("required"),
    weight: yup.string().required("required"),
    color: yup.string().required("required"),
    shortBio: yup.string().required("required"),
    hypoallergenic: yup.boolean().required("required"),
    dietaryRestrictions: yup.string().required("required"),
});

const initialValuesPetRegister = {
    petName: "",
    type: "",
    breed: "",
    height: "",
    weight: "",
    color: "",
    shortBio: "",
    hypoallergenic: false,
    dietaryRestrictions: "",
};
const initialValuesPetEdit = {
    // petName: { petName },
    // type: { type },
    // breed: { breed },
    // height: { height },
    // weight: { weight },
    // color: { color },
    // shortBio: { showrtBio },
    // hypoallergenic: { hypoallergenic },
    // dietaryRestrictions: { dietaryRestrictions },
};
const PetForm = () => {
    const [pageType, setPageType] = useState("edit-pet");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const isnonMobile = useMediaQuery("(min-width:600px)");
    const isExists = pageType == "edit-pet";
    const isNew = pageType == "register-pet";
    const registerPet = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append("picturePath", values.pictur.name);
        }
        formData.append("picturePath", values.picture.name);
        const savedPetResponse = await fetch("http://localhost:3001/pet", {
            method: "POST",
            body: formData,
        });
        const savedPet = await savedPetResponse.json();
        onSubmitProps.resetForm();
        if (savedPet) {
            setPageType("edit-pet");
        }
    };
    // const editPet = async (values, onSubmitProps) => {
    //     const ExistingPetEditResponse = await fetch("http://localhost:3001/pet:id", {
    //         method: "UPDATE",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(values),
    //     })
    //     const existingPet = await ExistingPetEditResponse.json();
    //     onSubmitProps.resetForm();
    //     if (existingPet) {
    //         dispatch(
    //             setPostPet({

    //             })
    //         )
    //     }
    // }

    const handleFormSubmit = async (values, onSubmitProps) => {
        // if (isExists) await editPet(values, onSubmitProps);
        if (isNew) await registerPet(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues= {initialValuesPetRegister}
            validationSchema={registerPetSchema}
        >
            {({
                value,
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4,minmax(0,1frm))" >
                        
                            <>
                                <TextField
                                    label="Pet Name"
                                    onChange={handleChange}
                                    value={values.petName}
                                    name="petName"
                                    error={
                                        Boolean(touched.petName) &&
                                        Boolean(errors.petName)
                                    }
                                    helperText={
                                        touched.petName && errors.petName
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Pet Type"
                                    onChange={handleChange}
                                    value={values.type}
                                    name="type"
                                    error={
                                        Boolean(touched.type) &&
                                        Boolean(errors.type)
                                    }
                                    helperText={touched.type && errors.type}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Pet Breed"
                                    onChange={handleChange}
                                    value={values.breed}
                                    name="breed"
                                    error={
                                        Boolean(touched.breed) &&
                                        Boolean(errors.breed)
                                    }
                                    helperText={touched.breed && errors.breed}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.neutral.medium}`}
                                    borderRadius="5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles=".jpeg, .jpg, .png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                            setFieldValue(
                                                "picture",
                                                acceptedFiles[0]
                                            )
                                        }
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={`2px dashed ${palette.primary.main}`}
                                                p="1rem"
                                                sx={{
                                                    "&:hover": {
                                                        cursor: "pointer",
                                                    },
                                                }}
                                            >
                                                <input {...getInputProps()} />
                                                {!value.picture ? (
                                                    <p>Add Pet Picture Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>
                                                            {
                                                                values.picture
                                                                    .name
                                                            }
                                                        </Typography>
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}
                                    </Dropzone>
                                </Box>
                                <TextField
                                    label="Pet Height"
                                    onChange={handleChange}
                                    value={values.height}
                                    name="height"
                                    error={
                                        Boolean(touched.height) &&
                                        Boolean(errors.height)
                                    }
                                    helperText={touched.height && errors.height}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Pet Weight"
                                    onChange={handleChange}
                                    value={values.weight}
                                    name="weight"
                                    error={
                                        Boolean(touched.weight) &&
                                        Boolean(errors.weight)
                                    }
                                    helperText={touched.weight && errors.weight}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Short Bio"
                                    onChange={handleChange}
                                    value={values.shortBio}
                                    name="shortBio"
                                    error={
                                        Boolean(touched.shortBio) &&
                                        Boolean(errors.shortBio)
                                    }
                                    helperText={
                                        touched.shortBio && errors.shortBio
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <FormControlLabel
                                    control={
                                        <ToggleButtonGroup
                                            color="primary"
                                            // value={alignment}
                                            exclusive
                                            onChange={handleChange}
                                            aria-label="Platform"
                                        >
                                            <ToggleButton value="true">
                                                Yes
                                            </ToggleButton>
                                            <ToggleButton value="false">
                                                No
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    }
                                    label="Is the pet hypoAllergenic?"
                                />
                                <TextField
                                    label="Does the pet have any dietary restrictions?"
                                    onChange={handleChange}
                                    value={values.dietaryRestrictions}
                                    name="hypoallergenic"
                                    error={
                                        Boolean(touched.dietaryRestrictions) &&
                                        Boolean(errors.dietaryRestrictions)
                                    }
                                    helperText={
                                        touched.dietaryRestrictions &&
                                        errors.dietaryRestrictions
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                            </>
                     
                        {/* {isNew && (
                            <>
                                <TextField
                                    label="Pet Name"
                                    onChange={handleChange}
                                    value={values.petName}
                                    name="petName"
                                    error={
                                        Boolean(touched.petName) &&
                                        Boolean(errors.petName)
                                    }
                                    helperText={
                                        touched.petName && errors.petName
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Pet Type"
                                    onChange={handleChange}
                                    value={values.type}
                                    name="type"
                                    error={
                                        Boolean(touched.type) &&
                                        Boolean(errors.type)
                                    }
                                    helperText={touched.type && errors.type}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Pet Breed"
                                    onChange={handleChange}
                                    value={values.breed}
                                    name="breed"
                                    error={
                                        Boolean(touched.breed) &&
                                        Boolean(errors.breed)
                                    }
                                    helperText={touched.breed && errors.breed}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.neutral.medium}`}
                                    borderRadius="5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles=".jpeg, .jpg, .png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                            setFieldValue(
                                                "picture",
                                                acceptedFiles[0]
                                            )
                                        }
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={`2px dashed ${palette.primary.main}`}
                                                p="1rem"
                                                sx={{
                                                    "&:hover": {
                                                        cursor: "pointer",
                                                    },
                                                }}
                                            >
                                                <input {...getInputProps()} />
                                                {!value.picture ? (
                                                    <p>Add Pet Picture Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>
                                                            {
                                                                values.picture
                                                                    .name
                                                            }
                                                        </Typography>
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}
                                    </Dropzone>
                                </Box>
                                <TextField
                                    label="Pet Height"
                                    onChange={handleChange}
                                    value={values.height}
                                    name="height"
                                    error={
                                        Boolean(touched.height) &&
                                        Boolean(errors.height)
                                    }
                                    helperText={touched.height && errors.height}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Pet Weight"
                                    onChange={handleChange}
                                    value={values.weight}
                                    name="weight"
                                    error={
                                        Boolean(touched.weight) &&
                                        Boolean(errors.weight)
                                    }
                                    helperText={touched.weight && errors.weight}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    label="Short Bio"
                                    onChange={handleChange}
                                    value={values.shortBio}
                                    name="shortBio"
                                    error={
                                        Boolean(touched.shortBio) &&
                                        Boolean(errors.shortBio)
                                    }
                                    helperText={
                                        touched.shortBio && errors.shortBio
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <FormControlLabel
                                    control={
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={alignment}
                                            exclusive
                                            onChange={handleChange}
                                            aria-label="Platform"
                                        >
                                            <ToggleButton value="true">
                                                Yes
                                            </ToggleButton>
                                            <ToggleButton value="false">
                                                No
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    }
                                    label="Is the pet hypoAllergenic?"
                                />
                                <TextField
                                    label="Does the pet have any dietary restrictions?"
                                    onChange={handleChange}
                                    value={values.dietaryRestrictions}
                                    name="hypoallergenic"
                                    error={
                                        Boolean(touched.dietaryRestrictions) &&
                                        Boolean(errors.dietaryRestrictions)
                                    }
                                    helperText={
                                        touched.dietaryRestrictions &&
                                        errors.dietaryRestrictions
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                            </>
                        )} */}
                    </Box>
                    {/* BUTTONS */}
                    <Box>
                        <Button
                            type="submit"
                            sx={{
                                justifyContent: "center",
                                width: "50%",
                                m: "2rem 25% 0 25%",
                                p: "1rem",
                                backgroundColor: palette.primary.main,
                                color: palette.background.alt,
                                "&:hover": { color: palette.primary.main },
                            }}
                        >
                            {isNew ? "Edit Pet" : "Register Pet"}
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default PetForm;
