const registerPetSchema = yup.object().shape({
    id: yup.string().required("required"),
    petName: yup.string().required("required"),
    type: yup.string().required("required"),
    breed: yup.string().required("required"),
    height: yup.string().required("required"),
    weight: yup.string().required("required"),
    color: yup.string().required("required"),
    shortBio: yup.string().required("required"),
});

const initialValues = {
    id: existingPet.id,
    petName: existingPet.petName,
    type: existingPet.type,
    breed: existingPet.breed,
    height: existingPet.height,
    weight: existingPet.weight,
    color: existingPet.color,
    shortBio: existingPet.shortBio,
};

const UpdatePetForm = (props) => {
    const { existingPet } = props;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registerPetSchema}
            onSubmit={(values, { setSubmitting }) => {
                axios.patch(`http://localhost:3001/pets/${values.id}`, values)
                    .then(res => {
                        console.log(res.data);
                        setSubmitting(false);
                    })
                    .catch(err => {
                        console.log(err);
                        setSubmitting(false);
                    });
            }}
        >
            {/* Your form fields here */}
        </Formik>
    );
};
