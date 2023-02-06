const user = require('../Models/UserSchema')

//add a user
//method : @post
 AddUser = async(req,res)=>{
    try {
        //1 creating a user and saved it in the DB
        const NewUser = await user.create(req.body)
        res.json({NewUser, msg:'User has been added successfully'})
    } catch (error) {
        console.log(error);
    }
} 

//get all data users
//method: @GET
 const getAllDataUsers = async(req,res)=>{
    try {
        const users = await user.find({})
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

//delete data user
//method: @Delete
 const DeleteDataUser = async(req,res)=>{
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.idUser)
        res.json({msg:'User has been deleted succ !!', deletedUser })
    } catch (error) {
        console.log(error)
    }
}

 const UpdateDataUser = async(req,res)=>{
    try {
        const updateDataUser = await user.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.json(updateDataUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports ={UpdateDataUser,DeleteDataUser,getAllDataUsers,AddUser}