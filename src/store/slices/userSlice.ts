import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: '',
    id: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.email = ''
            state.id = ''
        }
    }
})

export const {removeUser, setUser} = userSlice.actions
export const userReducer = userSlice.reducer;