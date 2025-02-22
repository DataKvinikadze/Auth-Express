const express = require("express")
const connectDb = require("./db/connectToDb")
const userRouter = require("./users/users.router")
const authRouter = require("./auth/auth.router")
const expenseRouter = require("./expenses/expenses.router")
const isAuth = require("./middlewares/isAuth.middleware")

const app = express()

app.use(express.json())

connectDb()

app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/expenses", isAuth, expenseRouter)

app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000")
})
