import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIceCreams: 20
}
const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCreams -= action.payload
        },
        restoked: (state, action) => {
            state.numOfIceCreams = state.numOfIceCreams + action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(cakeOrdered, (state) => {
                state.numOfIceCreams -= 1;
            });
    },
})

export default iceCreamSlice.reducer
export const { ordered, restoked } = iceCreamSlice.actions