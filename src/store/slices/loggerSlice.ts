import {createSlice} from "@reduxjs/toolkit";
import type {ILogItem} from "../../types";

type loggerState = {
    logArray: ILogItem[]
}

const initialState: loggerState = {
    logArray: []
}

const loggerSlice = createSlice({
    name: 'loger',
    initialState,
    reducers: {}
})

export const loggerReducer = loggerSlice.reducer