import { createSlice } from "@reduxjs/toolkit"
import { fonts } from "../assets/fonts"

const initialState = {
    currentFont: fonts[0].font,
    fonts,
}


export default createSlice({
    name: 'font',
    initialState,
    reducers: {
        changeFont: (state, actions) => {
            state.currentFont = actions.payload
        }
    }   
})
