import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    currentUser: {},
    message: null,
    flag: false
}
export const getUserByNameAndEmail = createAsyncThunk("goToServerGetUserByNameAndEmail", async (user, thunkApi) => {
    return axios.get(`http://localhost:8080/user/login?name=${user.name}&email=${user.email}`)
})

export const setMessage = createAsyncThunk("setMessage", (mess, thuncApi) => {
    thuncApi.getState().message = mess;
    console.log(`setMessage${thuncApi.getState().message}`);
})

export const addUser = createAsyncThunk("goToServerToAddUser", async (user, thuncApi) => {
    console.log('in addUser', user);
    return axios.post("http://localhost:8080/user", user)
})

export const deleteUser = createAsyncThunk('goToServerAndDeleteUser', async (id, thunkApi) => {
    return axios.put(`http://localhost:8080/user/${id}`)
})

export const updateUser = createAsyncThunk('goToServerAndUpdateUser', async (user, thunkApi) => {
    return axios.delete(`http://localhost:8080/user/${user.id}`, user)
})

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        updateCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setFlag: (state, action) => {
            console.log('setFlag', action.payload);
            state.flag = action.payload
        },
        logOut: (state, action) => {
            state.currentUser = {}
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserByNameAndEmail.fulfilled, (state, action) => {
                console.log(action.payload.data);
                if (action.payload.data.length !== 0) {
                    state.currentUser = action.payload.data[0]
                    state.message = `Welcome to ${action.payload.data.username}`
                    localStorage.setItem('user', JSON.stringify(action.payload.data[0]))
                    console.log(state.currentUser);
                }

            })
            .addCase(getUserByNameAndEmail.rejected, (state, action) => {
                state.message = 'Sorry, an error occurred while accepting the request'
            })
            .addCase(getUserByNameAndEmail.pending, (state, action) => {
                state.message = 'loading...'
            })

            .addCase(addUser.fulfilled, (state, action) => {
                console.log('currenUser', action.payload.data.user);
                state.currentUser = action.payload.data.user
                state.message = `welcome ${action.payload.data.username} 
                Press OK to login`
                console.log(`addUser`);
                localStorage.setItem('user', JSON.stringify(action.payload.data))
            }).addCase(addUser.rejected, (state, action) => {
                state.message = 'Sorry, an error occurred while accepting the request'
            }).addCase(addUser.pending, (state, action) => {
                state.message = 'loading...'
            })

            .addCase(deleteUser.fulfilled, (state, action) => {
                state.message = `deleted ${state.user.userName} `
                state.user = null
            }).addCase(deleteUser.rejected, (state, action) => {
                state.message = 'Sorry, an error occurred while accepting the request'
            }).addCase(deleteUser.pending, (state, action) => {
                state.message = 'loading...'
            })

            .addCase(updateUser.fulfilled, (state, action) => {
                state.currentUser = action.payload.data
                state.message = `update ${action.payload.data.userName}`
            }).addCase(updateUser.rejected, (state, action) => {
                state.message = 'Sorry, an error occurred while accepting the request'
            }).addCase(updateUser.pending, (state, action) => {
                state.message = 'loading...'
            })
    }
})
export const { setFlag, logOut, updateCurrentUser } = userSlice.actions;
export default userSlice.reducer;
