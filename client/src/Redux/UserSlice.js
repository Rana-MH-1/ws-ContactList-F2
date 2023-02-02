import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios' 

export const AddingUser = createAsyncThunk("user/AddingUser", async (newUser)=>{
     try {
        const {data} = await axios.post('/api/users/',newUser) // bsh nabaathou req de meth post 
        return data //l data lli jetni mil server tet7at frl payload taa action AddUSer
     } catch (error) {
        
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
        }
    }
})

export default UserSlice.reducer
