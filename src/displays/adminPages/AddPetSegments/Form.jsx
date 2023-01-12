import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPostPet } from "../../../states";
import Dropzone from "react-dropzone";
import FlexBetween from "../../../components/FlexBetween";

const registerPetSchema = yup.object().shape({
    petName: yup.string().required("required"),
    type: yup.string().required("required"),
    breed: yup.string().required("required"),
    height: yup.string().required("required"),
    weight: yup.string().required("required"),
    color: yup.string().required("required"),
    shortBio: yup.string().required("required"),
    // hypoallergenic: yup.boolean().required("required"),
    // dietaryRestrictions: yup.string().required("required"),
});

const initialValuesPetRegister = {
    petName: "",
    type: "",
    breed: "",
    picture: "",
    height: "",
    weight: "",
    color: "",
    shortBio: "",
    hypoallergenic: false,
    dietaryRestriction: "",
};

const Form = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const registerPet = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);
        const savedPetResponse = await fetch("http://localhost:3001/pets", {
            method: "POST",
            body: formData,
        });
        const savedPet = await savedPetResponse.json();
        onSubmitProps.resetForm();
        if(savedPet){
            console.log("Yippy!! you added a pet")
        }
    };

    const handleFormSubmit = async (values, onSubmitProps) => {
        registerPet(values, onSubmitProps);
        console.log(values, onSubmitProps)
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValuesPetRegister}
            validationSchema={registerPetSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        padding="2rem"
                        gap="30px"
                        gridTemplateColumns="repeat(4,minmax(0,1frm))"
                        sx={{
                            "& > div": {
                                gridColumn: isNonMobile ? undefined : "span 4",
                            },
                        }}
                    >
                        <>
                            <TextField
                                label="Pet Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.petName}
                                name="petName"
                                error={
                                    Boolean(touched.petName) &&
                                    Boolean(errors.petName)
                                }
                                helperText={touched.petName && errors.petName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                label="Type"
                                onBlur={handleBlur}
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
                            <Box
                                gridColumn="span 4"
                                // border={`1px solid ${palette.neutral.main}`}
                                borderRadius="5px"
                                p="1rem"
                            >
                                <Dropzone
                                    acceptedFiles=".jpg,.jpeg,.png"
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
                                            {!values.picture ? (
                                                <p>Add Picture Here</p>
                                            ) : (
                                                <FlexBetween>
                                                    <Typography>
                                                        {values.picture.name}
                                                    </Typography>
                                                    <EditOutlinedIcon />
                                                </FlexBetween>
                                            )}
                                        </Box>
                                    )}
                                </Dropzone>
                            </Box>
                            <TextField
                                label="breed"
                                onBlur={handleBlur}
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
                            <TextField
                                label="height"
                                onBlur={handleBlur}
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
                                label="weight"
                                onBlur={handleBlur}
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
                                label="color"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.color}
                                name="color"
                                error={
                                    Boolean(touched.color) &&
                                    Boolean(errors.color)
                                }
                                helperText={touched.color && errors.color}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                label="shortBio"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.shortBio}
                                name="shortBio"
                                multiline
                                error={
                                    Boolean(touched.shortBio) &&
                                    Boolean(errors.shortBio)
                                }
                                helperText={touched.shortBio && errors.shortBio}
                                sx={{
                                    gridColumn: "span 4",
                                }}
                            />
                            <TextField
                                label="Dietary Restrictions"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.dietaryRestriction}
                                multiline
                                name="dietaryRestriction"
                                error={
                                    Boolean(touched.dietaryRestriction) &&
                                    Boolean(errors.dietaryRestriction)
                                }
                                helperText={
                                    touched.dietaryRestriction &&
                                    errors.dietaryRestriction
                                }
                                sx={{ gridColumn: "span 4" }}
                            />
                        </>
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
              Add Pet
            </Button>
                       
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;
