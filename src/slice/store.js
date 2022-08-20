import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'
import factsReducer from './factsSlice'

const store = configureStore({
    reducer: {
        profileData: profileReducer,
        factsData: factsReducer
    }
})

export default store