const expenseModel = require("../models/expense.model")

const getAllExpense = async(req,res)=>{
    const expenses = await expenseModel.find()   
    res.json(expenses)
}

const getExpenseById = async(req,res)=>{
    const {id} = req.params
    const expense = await expenseModel.findById(id)
    res.json(expense)
}

const createExpense = async(req,res)=>{
    const newExpense = await expenseModel.create(req.body)
    res.json(newExpense)
}

const deleteExpenseById = async(req, res)=>{
    const {id} = req.params
    const deletedExpense = await expenseModel.findByIdAndDelete(id)
    res.json(deletedExpense)
}

const updateExpenseById = async(req, res)=>{
    const {id} = req.params
    const updatedExpense = await expenseModel.findByIdAndUpdate(id, req.body)
    res.json(updatedExpense)
}

module.exports = {getAllExpense, deleteExpenseById, createExpense, updateExpenseById, getExpenseById}