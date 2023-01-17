import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Pet from "../../../components/Pet";

const UserList = ({ theUsers }) => {
   

    return (
        <>
        
            {theUsers.map(
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

export default UserList;