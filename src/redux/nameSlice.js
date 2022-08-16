import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    groomName: 'Mr. Adsadasdas',
    brideName: 'Mrs adsdadas',
}

export default createSlice({
    name: "name",
    initialState,
    reducers: {
        inputName: (state, actions) => {
            state.brideName = actions.payload.brideName
            state.groomName = actions.payload.groomName
        }
    }
})