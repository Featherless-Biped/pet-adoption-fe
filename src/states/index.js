import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    tokens: null,
    pets: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.tokens = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.tokens = null;
        },
        setAllUsers: (state, action) => {
            state.users = action.payload.users;
        },
        setUserPets: (state, action) => {
            if (state.user) {
                state.user.ownedPets = action.payload.ownedPets;
            } else {
                console.log("user has no pets :(");
            }
        },
        setPets: (state, action) => {
            state.pets = action.payload.pets;
        },
        setPostPet: (state, action) => {
            const updatedPets = state.pets.map((pet) => {
                if (pet._id === action.payload.post_id)
                    return action.payload.pets;
                return pet;
            });
            state.pets = updatedPets;
        },
    },
});

export const {
    setMode,
    setLogin,
    setLogout,
    setUserPets,
    setAllUsers,
    setPets,
    setPostPet,
} = authSlice.actions;
export default authSlice.reducer;
