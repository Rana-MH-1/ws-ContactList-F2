import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { AddingUser } from '../Redux/UserSlice'

const AddUser = () => {
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({})
    const HandleChange = (e)=>{
        setNewUser({...newUser,[e.target.name] : e.target.value })
    }
  return (
    <div>
        <Form.Control onChange={HandleChange} name='name' type="text" placeholder="Enter name" />
        <Form.Control onChange={HandleChange} name='age' type="number" placeholder="Enter age" />
        <Form.Control onChange={HandleChange} name='email' type="email" placeholder="Enter email" />
        <Form.Control onChange={HandleChange} name='password' type="password" placeholder="Enter password" />
        <Button onClick={()=> dispatch(AddingUser(newUser))} variant='primary'>Add a User</Button>
    </div>
  )
}

export default AddUser