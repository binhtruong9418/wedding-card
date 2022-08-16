import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    address: 'Trung Phung, Dong Da, Ha Noi'
}

export default createSlice({
    name: "address",
    initialState,
    reducers: {
        inputAddress: (state, actions) => {
            state.address = actions.payload
        }
    }
})