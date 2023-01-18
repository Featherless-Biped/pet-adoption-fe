
import { useSelector } from "react-redux";
import User from "./User";

const UserList = ({theUsers}) => {
    const token = useSelector((state) => state.token);

 
   
    // const usersPets = thePets.map((thePets) =>
    //     pets.find((pet) => pet._id === thePets)
    // );

   
    return (
        <>
            {theUsers.map(
                ({
                    _id,
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    admintrator,
                    ownedPets,
                    shortBio,
                    picturePath,
                }) => (
                    <User
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
                )
            )}
        </>
    );
};

export default UserList;
