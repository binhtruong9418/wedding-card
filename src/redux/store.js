import { configureStore } from "@reduxjs/toolkit";
import imageReducer from './imageSlice'
import fontReducer from './fontSlice'
import nameReducer from './nameSlice'
import timeReducer from './timeSlice'

export const store = configureStore({
    reducer: {
        image: imageReducer.reducer,
        font: fontReducer.reducer,
        name: nameReducer.reducer,
        time: timeReducer.reducer,
    }
})