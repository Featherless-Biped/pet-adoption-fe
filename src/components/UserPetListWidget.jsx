import { Box, Typography, useTheme } from "@mui/material";
import Pet from "./Pet";
import WidgetWrapper from "./WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserPets } from "../states/index";

const UserPetListWidget = ({ userId, name, ownedPets }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  
  // console.log(ownedPets)
  // const ownedPets = useSelector((state) => state.user.ownedPets);

  // const getUserPets = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/users/${userId}/ownedPets`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setUserPets({ pets: data.ownedPets }));
  //   console.log(data.ownedPets)
  // };

  // useEffect(() => {
  //   getUserPets();
  //   console.log(ownedPets)
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
       {name}'s Pets
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {ownedPets.map((pet) => (
          
          <Pet
            key={pet._id}
            petId={pet._id}

          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default UserPetListWidget;
