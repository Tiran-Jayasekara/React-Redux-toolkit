import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//is a helper function that reduces the boilerplate code associated with defining actions and reducers in Redux.

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    // order is a key
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes -= action.payload
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions