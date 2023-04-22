import {ITypes} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

interface IReducer {
    users: ITypes[],
    loading: boolean,
    error: string
}

const initialState: IReducer = {
    users: [],
    loading: false,
    error: ''
}

export const ReducerSlice = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        reducerFetching() {

        },
        reducerFetchingSuccess() {

        },
        reducerFetchingError() {

        }
    }
})




export default ReducerSlice.reducer;