import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Pet from "../../../components/Pet";

const PetsList = ({ thePets }) => {
   
    
    const pets = useSelector((state) => state.pets);
    const token = useSelector((state) => state.token);
    

    
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

