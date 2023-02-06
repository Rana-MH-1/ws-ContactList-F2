import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios' 

export const AddingUser = createAsyncThunk("user/AddingUser", async (newUser,{rejectWithValue})=>{
     try {
        const {data} = await axios.post('/api/users/',newUser) // bsh nabaathou req de meth post 
        return data //l data lli jetni mil server tet7at fel payload taa action AddUSer
     } catch (error) {
        rejectWithValue(error.response.data.message)
     }
}) 

export const getAllDataUSers = createAsyncThunk('user/getAllDataUSers',async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/users/')
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)

    }
}) 

export const DeleteDataUser = createAsyncThunk('user/DeleteDataUser', async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.delete(`/api/users/${id}`)
        dispatch(getAllDataUSers())
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)

    }
}) 

export const UpdateDataUser= createAsyncThunk('user/UpdateDataUser', async(updatedUser,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.put(`/api/users/${updatedUser._id}`,updatedUser )
        //dispatch(getAllDataUSers())
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)

    }
}) 

const UserSlice = createSlice({
    name:'user',
    initialState:{
        isLoading: false,
        msg:null,
        user:{},
        users:[],
        Errors: null
    },

    reducer:{},

    extraReducers:{
        [AddingUser.pending] : (state,action)=>{
            state.isLoading = true
        },
        [AddingUser.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.user = action.payload.NewUser
            state.msg = action.payload.msg
        },
        [AddingUser.rejected] : (state,{type,payload}) =>{
            state.Errors = payload
        },
        [getAllDataUSers.pending] : (state,action)=>{
            state.isLoading = true
        },
        [getAllDataUSers.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.users = action.payload
            
        },
        [getAllDataUSers.rejected] : (state,{type,payload}) =>{
            state.Errors = payload
        },
        [DeleteDataUser.pending] : (state,action)=>{
            state.isLoading = true
        },
        [DeleteDataUser.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.users = state.users.filter(user=> user.id !== action.payload.deletedUser._id)
            state.msg = action.payload.msg
            
        },
        [DeleteDataUser.rejected] : (state,{type,payload}) =>{
            state.Errors = payload
        },
        [UpdateDataUser.pending] : (state,action)=>{
            state.isLoading = true
        },
        [UpdateDataUser.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.users = state.users.map(user=> (user._id == action.payload._id)? {...user,...action.payload } : user)
           
            
        },
        [UpdateDataUser.rejected] : (state,{type,payload}) =>{
            state.Errors = payload
        }
    }
})

export default UserSlice.reducer
