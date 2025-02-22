const { Router } = require("express");
const { getAllExpense, getExpenseById, deleteExpenseById, createExpense, updateExpenseById } = require("./expenses.service");

const expenseRouter = Router()

expenseRouter.get("/", getAllExpense)
expenseRouter.get("/:id", getExpenseById)
expenseRouter.delete("/:id", deleteExpenseById)
expenseRouter.post("/", createExpense)
expenseRouter.put("/:id", updateExpenseById)

module.exports = expenseRouter
