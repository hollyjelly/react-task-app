import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";  // ← 수정
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
    reducers: {
        addLog: (state, {payload}: PayloadAction<ILogItem>) => {
            state.logArray.push(payload)
        }

    }
})

export const {addLog} = loggerSlice.actions
export const loggerReducer = loggerSlice.reducer