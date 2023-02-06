import React, { useEffect } from 'react'
import { DeleteDataUser, getAllDataUSers } from '../Redux/UserSlice'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card} from 'react-bootstrap'
import UpdateModal from '../Components/UpdateModal'


const UserLists = () => {
  const users = useSelector(state=> state.UserReducer.users)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllDataUSers())
  },[])
  return (
    <div>
      {users?.map(user => <Card key={user._id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.age}</Card.Subtitle>
        <Card.Text>
          {user.email}
        </Card.Text>
        
      </Card.Body>
      <Button onClick={()=> dispatch(DeleteDataUser(user._id))} variant='danger'>Delete</Button>
      <UpdateModal user={user}/>

    </Card>)}
    </div>
  )
}

export default UserLists