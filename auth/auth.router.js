const { Router } = require("express");
const { registerUser, signInUser } = require("./auth.service");

const authRouter = Router()

authRouter.post("/sign-up", registerUser)
authRouter.post("/sign-in", signInUser)

module.exports = authRouter