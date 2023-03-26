import {createSlice} from "@reduxjs/toolkit";
import profile from '../profile/profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            return {...state, ...action.payload}
        },

    }
});
export const {editProfile} = profileSlice.actions

export default profileSlice.reducer;