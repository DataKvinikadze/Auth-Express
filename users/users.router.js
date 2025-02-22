const { Router } = require("express");
const { getAllUsers, getUserById, deleteUserById, UpdateUserById } = require("./users.service");

const userRouter = Router()

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.delete("/:id", deleteUserById)
userRouter.put("/:id", UpdateUserById)

module.exports = userRouter