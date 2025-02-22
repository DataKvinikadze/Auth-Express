const usersModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const registerUser = async(req,res)=>{
    const {firstName, email, password} = req.body
    // console.log(req.body)
    if(!firstName || !email || !password) return res.status(400).json({message: "firstname, email, password required"})
    const existUser = await usersModel.findOne({email})
    console.log(existUser)
    if(existUser) return res.status(400).json({message: "User Already Exists!"})
    const hashedPassword = await bcrypt.hash(password, 10)
    await usersModel.create({firstName, email, password: hashedPassword})
    res.json({message: "User has been Registered!"})
}

const signInUser = async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password) return res.status(400).json({message: "email and password Required!"})
    
    const existUser = await usersModel.findOne({email})
    if(!existUser) return res.status(400).json({message: "email or password is Incorrect!"})
    
    const isPasswordEqual = await bcrypt.compare(password, existUser.password)
    if(!isPasswordEqual) return res.status(400).json({message: "email or password is Incorrect!"})
    
    const payLoad = {
    userId: existUser._id

    }
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, {expiresIn: "1h"})
    res.json(token)
}

module.exports = {registerUser, signInUser}