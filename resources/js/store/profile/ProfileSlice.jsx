import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setUser(state, { payload }) {
            state.user = payload;
        }
    },
});

export const { setUser } = ProfileSlice.actions;

export default ProfileSlice.reducer;
