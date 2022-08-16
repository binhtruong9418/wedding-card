import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    time: new Date(),

}

export default createSlice({
    name: 'time',
    initialState,
    reducers: {
        changeTime: (state, actions) => {
            state.time = actions.payload
        }
    }
})