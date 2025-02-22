const { isValidObjectId } = require("mongoose")
const usersModel = require("../models/users.model")

const getAllUsers = async(req, res)=>{
    const users = await usersModel.find()
    res.json(users)
}

const getUserById = async(req, res)=>{
    const {id}= req.params
    if(isValidObjectId(id)) return res.status(400).json({message: "Wrong Id Format!"})
    const user = await usersModel.findById(id)
    if(!user) return res.status(404).json({message: "User Not Found!"})
    res.json(user)
}

const deleteUserById = async(req, res)=>{
    const {id}= req.params
    if(isValidObjectId(id)) return res.status(400).json({message: "Wrong Id Format!"})
    const user = await usersModel.findByIdAndDelete(id)
    if(!user) return res.status(404).json({message: "User Not Found!"})
    res.json(user)
}
const UpdateUserById = async(req, res)=>{
    const {id}= req.params
    if(isValidObjectId(id)) return res.status(400).json({message: "Wrong Id Format!"})
    
    const {firstName, email} = req.body
    const updateRequest ={}
    
    if(firstName) updateRequest.firstName = firstName
    if(email) updateRequest.email = email

    const user = await usersModel.findByIdAndUpdate(id,updateRequest, {new:true})

    if(!user) return res.status(404).json({message: "User Not Found!"})
    
    res.json(user)
}



module.exports = {getAllUsers, getUserById, UpdateUserById, deleteUserById}