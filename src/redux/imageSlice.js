import { createSlice, createAction } from "@reduxjs/toolkit"
import { images } from "../assets/image"

const initialState = {
    currentImage: images[0].image,
    images,
}


export default createSlice({
    name: 'image',
    initialState,
    reducers: {
        changeImage: (state, actions) => {
            state.currentImage = actions.payload
        }
    }   
})


