import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPets } from "../../../states";
import PetCard from "../../../components/PetCard";
import Pet from "../../../components/Pet";

const PetsList = ({ thePets }) => {
   
    const dispatch = useDispatch();
    const pets = useSelector((state) => state.pets);
    const token = useSelector((state) => state.token);
    

    // const getAllPets = async () => {
    //     const response = await fetch("http://localhost:3001/pets", {
    //         method: "GET",
    //         // headers: {Authorization: `Bearer ${token}`}
    //     });
    //     const data = await response.json();
    //     dispatch(setPets({ pets: data }));
    // };
    // useEffect(() => {
    //     getAllPets();
    //     console.log(pets);
    // }, []);
    // useEffect(() => {
    //     getAllPets();
    //     console.log(pets);
    // }, [thePets]);
    // if (!thePets) {
    //    petsToDisplay = pets;
    // } else {
    //     petsToDisplay = thePets.map((thePets) =>
    //         pets.find((pet) => pet._id === thePets)
    //     );
    // }
    const petsToDisplay = thePets.map((thePets) =>
            pets.find((pet) => pet._id === thePets))

    return (
        <>
        
            {petsToDisplay.map(
                ({
                    _id,
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
                }) => (
                    <Pet
                        key={_id}
                        petId={_id}
                        name={name}
                        petName={petName}
                        type={type}
                        color={color}
                        shortBio={shortBio}
                        hypoalergenic={hypoalergenic}
                        dietaryRestrictions={dietaryRestrictions}
                        breed={breed}
                        height={height}
                    weight={weight}
                        picturePath={picturePath}
                        adoptionStatus={adoptionStatus}
                    />
                )
            )}
        </>
    );
};

export default PetsList;

// // READ
// router.get("/", verifyToken, getAvailablePets)

// {pets.map(
//     ({
//         _id,
//         petName,
//         type,
//         breed,
//         color,
//         shortBio,
//         hypoalergenic,
//         dietaryRestrictions,
//         picturePath,
//         adoptionStatus,
//     }) => (
//         <PetCard
//             key={_id}
//             _id={_id}
//             petName={petName}
//             type={type}
//             color={color}
//             shortBio={shortBio}
//             hypoalergenic={hypoalergenic}
//             dietaryRestrictions={dietaryRestrictions}
//             breed={breed}
//             picturePath={picturePath}
//             adoptionStatus={adoptionStatus}
//         />
//     )
// )}
