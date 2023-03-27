import {createSlice} from "@reduxjs/toolkit";
import feedtuits from '../tuits/feed-tuits.json';

const currentUser = {
    "userName": "JavaScript",
    "handle": "@javascript",
    "image": "javascript-logo.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Travel",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const feedTuitsSlice = createSlice({
    name: 'feed-tuits',
    initialState: feedtuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        tuitToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            tuit.likes = tuit.liked ? tuit.likes + 1 : tuit.likes - 1
        }
    }
});
export const {createTuit, deleteTuit, tuitToggle} = feedTuitsSlice.actions

export default feedTuitsSlice.reducer;