import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ReducerSlice from "./Reducer/Reducer";

const rootState = combineReducers({
    ReducerSlice,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rooState = ReturnType<typeof rootState>
type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']