import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { userAuth } from '../actions/userAuth';
import { userLogin } from '../actions/userLogin';
// import { userLogout } from '../actions/userLogout';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

export const userSlice = createSlice({
    name: "User",

    initialState:{
        loading: false,
        user: null,
        userToken,
        error: null,
        success: false,
    },

    reducers : {
    },

    extraReducers : {
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload.user
            state.userToken = payload.token;
            state.success = payload.success;
        },

        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [userAuth.pending] : (state) => {
          state.loading =true;
          state.error = null;
        },
        [userAuth.fulfilled] : (state, { payload }) => {
          state.loading = false;
          state.success = payload.success;
          state.user = payload.user;
        },
        [userAuth.rejected] : (state, {payload}) => {
          state.loading = false;
          state.error = payload;
        }
    }
})


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

// https://blog.logrocket.com/handling-user-authentication-redux-toolkit/